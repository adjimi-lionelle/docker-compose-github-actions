# IBAI : conteneurisation et déploiement

Site de l'IBAI (Université de Garoua) : un front **React** et un back **Symfony** exposant une API. Ce dépôt documente la conteneurisation de l'ensemble avec **Docker Compose**, puis son déploiement automatisé (CI/CD) sur un VPS.

> **Avancement**
> - [x] Conteneurisation du front, du back et de la base
> - [x] Tests en local avec Docker Compose
> - [ ] Pipeline CI/CD (GitLab CI)
> - [ ] Déploiement sur le VPS derrière Apache (reverse proxy)
> - [ ] HTTPS (Let's Encrypt)

## 1. Architecture

```
Navigateur
   ├── :8080 → frontend  (nginx servant le build Vite/React)
   └── :8000 → backend   (Apache + PHP 8.3, Symfony 6.4 / API Platform)
                    └── db (MySQL 8.4, volume persistant)
```

| Service    | Image / build                    | Port hôte | Rôle                               |
|------------|----------------------------------|-----------|------------------------------------|
| `frontend` | `./ibai-frontend` (multi-stage)  | 8080      | Site public (React)                |
| `backend`  | `./site_ibai` (multi-stage)      | 8000      | API, administration EasyAdmin      |
| `db`       | `mysql:8.4`                      | non publié | Base de données                   |

En production, Apache (déjà présent sur le VPS) servira de reverse proxy vers ces conteneurs.

## 2. Stack

- **Front** : React 18, TypeScript, Vite, axios, Bootstrap, PrimeReact
- **Back** : Symfony 6.4, API Platform, Doctrine ORM, EasyAdmin, LexikJWT, Vich Uploader, Liip Imagine, Webpack Encore
- **Infra** : Docker, Docker Compose, MySQL 8.4, nginx, Apache

## 3. Structure du projet

```
ibai/
├── compose.yaml
├── .env                  # secrets pour Compose (non versionné)
├── secrets/jwt/          # clés JWT (non versionné)
├── ibai-frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── .dockerignore
└── site_ibai/
    ├── Dockerfile
    ├── .dockerignore
    └── ibai_backend.sql  # dump d'initialisation de la base
```

## 4. Choix techniques

**Images multi-stage.** Le front est compilé dans une image `node`, puis seul le dossier `dist` est copié dans une image `nginx` légère. Le back suit la même logique : assets Webpack Encore, dépendances Composer, puis image finale PHP-Apache.

**Apache intégré à l'image du back.** L'image `php:8.3-apache` évite un conteneur nginx et un fichier de configuration supplémentaires.

**Base initialisée par le dump.** Le fichier `ibai_backend.sql` est monté dans `/docker-entrypoint-initdb.d/`. Il n'est exécuté qu'au premier démarrage, avec un volume vide. Il n'est pas copié dans les images (`.dockerignore`).

**Secrets hors des images.** Mots de passe, `APP_SECRET`, passphrase et clés JWT sont fournis à l'exécution (`.env`, volume `secrets/jwt` en lecture seule) et ne sont jamais versionnés.

**Variables de build du front.** Les variables `VITE_*` sont intégrées au JavaScript **au moment du build**. Elles sont donc passées comme `ARG` dans le Dockerfile et `args` dans Compose.

## 5. Prérequis

- Docker et Docker Compose v2 (`docker compose version`)
- Les clés JWT du backend dans `secrets/jwt/` (`private.pem`, `public.pem`)

## 6. Configuration

Créer un fichier `.env` à la racine, à côté de `compose.yaml` :

```
DB_PASSWORD=
DB_ROOT_PASSWORD=
APP_SECRET=
JWT_PASSPHRASE=
VITE_API_TOKEN=
```

Générer les mots de passe aléatoires (hexadécimal, pour éviter les caractères spéciaux dans l'URL de la base) :

```bash
openssl rand -hex 16   # DB_PASSWORD et DB_ROOT_PASSWORD
openssl rand -hex 32   # APP_SECRET
```

`JWT_PASSPHRASE` et `VITE_API_TOKEN` proviennent du backend existant : le token doit être signé par les clés JWT utilisées par le conteneur.

## 7. Lancement en local

```bash
docker compose config -q && echo "compose OK"
docker compose up -d --build
docker compose ps
```

Le premier démarrage importe le dump : attendre environ une minute que `db` passe en `healthy`.

| Adresse                       | Contenu            |
|-------------------------------|--------------------|
| http://localhost:8080         | Site (front)       |
| http://localhost:8000/api     | API                |
| http://localhost:8000/admin   | Administration     |

## 8. Vérifications

```bash
# La base contient les 15 tables du dump
docker compose exec db mysql -uibai -p ibai -e "SHOW TABLES;"

# Réponse des services
curl -sI http://localhost:8000/api | head -3
curl -sI http://localhost:8080 | head -3

# Logs
docker compose logs --tail=50 backend
```

Pour rejouer l'import du dump depuis zéro : `docker compose down -v` puis `docker compose up -d --build`.

## 9. Problèmes rencontrés et solutions

| Problème | Cause | Solution |
|----------|-------|----------|
| Le build du front échoue (`TS2307`, module `spinner` introuvable) | Le code importait `utils/spinner` alors que le fichier s'appelle `Spinner.tsx`. Windows et macOS ignorent la casse, pas Linux | Corriger la casse des imports |
| `composer install` échoue (« lock file does not contain a compatible set of packages ») | L'image `composer:2` embarque PHP 8.5, alors que `lcobucci/jwt` exige PHP 8.2 à 8.4 | `--ignore-platform-reqs` dans l'étape de téléchargement des dépendances. Le code s'exécute dans l'image finale en PHP 8.3 |
| `tsc: Permission denied` en local | `node_modules` livré dans un zip, sans droits d'exécution | Le build Docker refait un `npm ci` propre ; en local : `chmod -R u+x node_modules/.bin` |
| Risque de démarrage du back sur une base incomplète | Le healthcheck MySQL réussit pendant l'import via le socket local | `mysqladmin ping -h 127.0.0.1` : le test ne passe qu'après le démarrage réel du serveur |
| Conflit de ports | Back et front publiés tous deux sur 8000 | Back sur 8000, front sur 8080, et CORS autorisant l'origine du front |

## 10. Points de sécurité

- Le token `VITE_API_TOKEN` finit **en clair** dans le JavaScript du navigateur : il ne doit donner accès qu'à la lecture des données publiques de l'API.
- Les fichiers `.env` et `secrets/` ne doivent jamais être versionnés (`.gitignore`).
- Le dump SQL ne contient que du contenu éditorial (aucune table d'utilisateurs ou de candidats), mais reste hors des images.
- Debug désactivé en production (`APP_ENV=prod`).

## 11. Suite prévue

1. **Pipeline GitLab CI** : build des images, lint et tests, push vers le registry GitLab (tag = SHA du commit), déploiement par SSH (`docker compose pull && docker compose up -d`).
2. **Déploiement VPS** : conteneurs sur des ports locaux (`127.0.0.1`), Apache en reverse proxy (`ProxyPass`) sur `ibai.univ-garoua.cm`.
3. **HTTPS** avec Certbot.
4. **Exploitation** : sauvegarde de la base, rollback par redéploiement du tag précédent.
