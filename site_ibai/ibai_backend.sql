-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 05 mai 2025 à 21:36
-- Version du serveur : 9.1.0
-- Version de PHP : 8.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ibai_backend`
--

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

DROP TABLE IF EXISTS `actualite`;
CREATE TABLE IF NOT EXISTS `actualite` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `date_actualite` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `details` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publier` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`id`, `titre`, `description`, `date_actualite`, `details`, `image`, `publier`, `updated_at`) VALUES
(1, 'Lancement du concours d\'entrée 2024 à l\'IBAI', '<div>&nbsp;L\'Institut des Beaux-Arts et de l\'Innovation (IBAI) ouvre officiellement les inscriptions pour son concours d\'entrée en première année. Les candidats ont jusqu\'au 27 septembre pour soumettre leur dossier en ligne et tenter de rejoindre une institution d\'excellence.&nbsp;<br><br></div><h1>Spacing</h1><div>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.<br><br></div><div>How it works</div><div>Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from .25rem to 3rem.<br><br></div><div>Notation</div><div>Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.<br><br></div>', '2024-06-13 21:45:00', 'L\'Institut des Beaux-Arts et de l\'Innovation (IBAI) ouvre officiellement les inscriptions pour son concours d\'entrée en première année. Les candidats ont jusqu\'au 27 septembre pour soumettre leur dossier en ligne et tenter de rejoindre une institution.', 'concours-entree-ibai-67c38168dd7c9159663491.jpg', 1, '2025-03-01 21:51:36'),
(2, 'Inauguration du nouveau Centre d’expérimentation et d’innovation (CEI)', '<div>&nbsp;L\'IBAI a inauguré son tout nouveau Centre d’expérimentation et d’innovation, un espace dédié à la recherche et au développement de projets créatifs. Ce centre ultramoderne est accessible aux étudiants et chercheurs désireux d\'explorer de nouvelles perspectives artistiques et technologiques.&nbsp;</div>', '2024-11-30 21:51:00', 'L\'IBAI a inauguré son tout nouveau Centre d’expérimentation et d’innovation, un espace dédié à la recherche et au développement de projets créatifs. Ce centre ultramoderne est accessible aux étudiants et chercheurs désireux d\'explorer des perspectives.', 'centre-innovation-expertisation-67c3819df07bf720812615.jpg', 1, '2025-03-01 21:52:29'),
(3, 'Séminaire sur l\'Art et l\'Intelligence Artificielle', '<div>&nbsp;Un séminaire spécial sur l\'impact de l\'Intelligence Artificielle dans les métiers de l\'art sera organisé à l\'IBAI. Ouvert à tous les étudiants, il sera animé par des experts du domaine et explorera les dernières innovations liant art et technologie.&nbsp;</div>', '2025-02-01 21:52:00', 'Un séminaire spécial sur l\'impact de l\'Intelligence Artificielle dans les métiers de l\'art sera organisé à l\'IBAI. Ouvert à tous les étudiants, il sera animé par des experts du domaine et explorera les dernières innovations liant art et technologie.', 'img-bg-1-67e482f71b764398596957.jpg', 1, '2025-03-26 22:43:03'),
(5, 'Organisation des journées portes ouvertes', '<div>## Installing FFmpeg<br><br>1. Type `./configure` to create the configuration. A list of configure<br>options is printed by running `configure --help`.<br><br>&nbsp; &nbsp; `configure` can be launched from a directory different from the FFmpeg<br>sources to build the objects out of tree. To do this, use an absolute<br>path when launching `configure`, e.g. `/ffmpegdir/ffmpeg/configure`.<br><br>2. Then type `make` to build FFmpeg. GNU Make 3.81 or later is required.<br><br>3. Type `make install` to install all binaries and libraries you built.<br><br>NOTICE<br>------<br><br>&nbsp;- Non system dependencies (e.g. libx264, libvpx) are disabled by default.<br><br>NOTICE for Package Maintainers<br>------------------------------<br><br>&nbsp;- It is recommended to build FFmpeg twice, first with minimal external dependencies so<br>&nbsp; &nbsp;that 3rd party packages, which depend on FFmpegs libavutil/libavfilter/libavcodec/libavformat<br>&nbsp; &nbsp;can then be built. And last build FFmpeg with full dependancies (which may in turn depend on<br>&nbsp; &nbsp;some of these 3rd party packages). This avoids circular dependencies during build.<br><br></div>', '2025-03-26 20:59:00', 'can be launched from a directory different from the FFmpeg sources to build the objects out of tree. To do this, use an absolute path when launching can be launched from a directory different from the FFmpeg sources to build the objects out of tree.', NULL, 1, NULL),
(6, 'Mise en place nouveau site web', '<div>Retrouvez vos demandes saisies précédemment.</div><div>Il est conseillé de mettre dans un même groupe les demandes devant êtres traitées en même temps et pouvant concerner notamment des membres de la même famille (6 demandes maximum par groupe)&nbsp;</div><div>Lorsqu\'une demande est éligible à la dématérialisation alors elle ne peut pas faire partie d\'un groupe de plusieurs demandes.&nbsp;<br>Retrouvez vos demandes saisies précédemment.</div><div>Il est conseillé de mettre dans un même groupe les demandes devant êtres traitées en même temps et pouvant concerner notamment des membres de la même famille (6 demandes maximum par groupe)&nbsp;</div><div>Lorsqu\'une demande est éligible à la dématérialisation alors elle ne peut pas faire partie d\'un groupe de plusieurs demandes.&nbsp;</div>', '2025-03-27 00:30:00', 'Retrouvez vos demandes saisies précédemment.\r\nIl est conseillé de mettre dans un même groupe les demandes devant êtres traitées en même temps et pouvant concerner notamment des membres de la même famille (6 demandes maximum par groupe)\r\nLorsqu\'une demande', 'img-bg-2-67e49d11bcc16331274282.jpg', 1, '2025-03-27 00:34:25');

-- --------------------------------------------------------

--
-- Structure de la table `agenda`
--

DROP TABLE IF EXISTS `agenda`;
CREATE TABLE IF NOT EXISTS `agenda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_evenement` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `details` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publier` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `agenda`
--

INSERT INTO `agenda` (`id`, `titre`, `date_evenement`, `details`, `image`, `publier`, `updated_at`) VALUES
(1, 'Concours d\'entrée à l\'IBAI', '2024-10-05 21:56:00', 'Le concours d\'entrée en première année aura lieu le 5 octobre à 7h30. Une opportunité pour les candidats de rejoindre l\'une des filières d\'excellence de l\'Institut.', 'capture-d-ecran-2025-03-11-001618-67e9226cec2bc159061918.png', 1, '2025-03-30 10:52:28'),
(2, 'Journée portes ouvertes', '2024-11-15 21:57:00', 'Venez découvrir les infrastructures de l\'IBAI, échanger avec nos enseignants et étudiants, et explorer les différents parcours proposés lors de notre journée portes ouvertes.', NULL, 1, NULL),
(3, 'Conférence sur l\'innovation numérique dans les arts', '2025-03-01 22:00:00', 'Conférence exclusive sur l\'impact des technologies numériques dans les arts plastiques et le design, avec des intervenants renommés du secteur.', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `artiste`
--

DROP TABLE IF EXISTS `artiste`;
CREATE TABLE IF NOT EXISTS `artiste` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_artiste_id` int NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom_artiste` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publier` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_9C07354F3CD18E61` (`type_artiste_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `artiste`
--

INSERT INTO `artiste` (`id`, `type_artiste_id`, `nom`, `prenom`, `nom_artiste`, `description`, `photo`, `publier`, `updated_at`) VALUES
(1, 1, 'Doe', 'john', 'JD', '<div>&nbsp;L\'IBAI fournit un environnement moderne et stimulant, propice à la créativité, avec des infrastructures de pointe pour favoriser l’épanouissement et l\'innovation.&nbsp;</div>', 'lmce4dc2ff68-7-67c387e2343d3802738533.jpg', 1, '2025-03-01 22:19:14'),
(2, 2, 'Dupont', 'Jean', 'DJ', '<div>&nbsp;L\'IBAI fournit un environnement moderne et stimulant, propice à la créativité, avec des infrastructures de pointe pour favoriser l’épanouissement et l\'innovation.&nbsp;</div>', 'hq720-67c38e9a41314590532320.jpg', 1, '2025-03-01 22:47:54');

-- --------------------------------------------------------

--
-- Structure de la table `contenu`
--

DROP TABLE IF EXISTS `contenu`;
CREATE TABLE IF NOT EXISTS `contenu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL,
  `title` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenu1` longtext COLLATE utf8mb4_unicode_ci,
  `image1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contenu2` longtext COLLATE utf8mb4_unicode_ci,
  `image2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publier` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_89C2003FC54C8C93` (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `contenu`
--

INSERT INTO `contenu` (`id`, `type_id`, `title`, `contenu1`, `image1`, `contenu2`, `image2`, `publier`, `updated_at`) VALUES
(1, 1, 'Le Mot du Directeur', '<div>L\'Institut des Beaux-Arts et de l\'Innovation (IBAI) se positionne comme le premier établissement d\'enseignement supérieur camerounais entièrement dédié à l\'innovation et à la création artistique. Notre mission est de former une nouvelle génération de concepteurs, d\'artistes et d\'experts capables de répondre aux défis socio-économiques et environnementaux contemporains. Ces professionnels, imprégnés des mutations technologiques et culturelles, développent des solutions créatives et sur mesure pour un monde en constante évolution.<br><br></div><div>L\'une des priorités fondamentales de l\'IBAI est de garantir l\'excellence académique et l\'insertion professionnelle de ses étudiants. Nous offrons aux entreprises locales et internationales l\'opportunité de recruter des collaborateurs hautement qualifiés, dotés d\'une double compétence artistique et technologique. Nos parcours professionnalisants, résolument tournés vers le numérique et les industries créatives, sont conçus pour répondre aux exigences d\'un marché du travail dynamique et compétitif. Ces formations s\'inscrivent pleinement dans la vision d\'un Cameroun émergent à l\'horizon 2035, telle que définie par Son Excellence Paul Biya, Président de la République.<br><br></div><div>En tant que pôle d\'excellence, l\'IBAI s\'engage à promouvoir l\'innovation pédagogique et la recherche appliquée. Notre ambition est de faire de l\'IBAI un hub régional de référence, où se croisent tradition et modernité, pour façonner l\'avenir des métiers de l\'art, du design et de l\'innovation technologique.<br><br><strong>Prof. Dr. Ado Adamou ABBA ARI</strong><br>Directeur de l\'IBAI &nbsp;<br><br></div>', 'whatsapp-image-2024-08-23-at-14-06-32-1-6817840c0a3cb433440466.jpg', NULL, NULL, 1, '2025-05-04 15:13:16'),
(3, 3, 'Présentation de l\'IBAI', '<div>L’Institut des Beaux-Arts et de l’Innovation (IBAI) de l’Université de Garoua s’est imposé comme un pôle d’excellence unique en Afrique Centrale, alliant création artistique et innovations technologiques. Notre institut forme une nouvelle génération de professionnels capables de répondre aux défis complexes des industries créatives modernes.<br><br></div><div>À travers cinq domaines phares - Arts et Humanités Numériques, Arts Plastiques, Architecture/Urbanisme, e-Tourisme, et Design/Graphisme - nous proposons des parcours complets où tradition et modernité se conjuguent. Notre approche pédagogique repose sur l’immersion professionnelle : ateliers pratiques avec experts, stages en entreprise, et développement de projets réels dans nos laboratoires high-tech (FabLab, studios numériques).<br><br></div><div>L’IBAI se distingue par son réseau de partenariats solides avec le monde professionnel, garantissant à nos diplômés une insertion réussie. Nos formations, constamment actualisées, répondent précisément aux besoins du marché, tout en participant activement au développement économique et culturel du Cameroun.</div><div><br></div>', 'img-20240110-wa0036-remini-enhanced-thumbnail-1600x900-68179bc6a8cbb925833924.jpg', '<div><strong>NOS PROGRAMMES ACADÉMIQUES</strong></div><ul><li><strong>DEUP</strong> (BAC+2)</li><li><strong>Licence Professionnelle</strong> (BAC+3)</li><li><strong>Master</strong> (BAC+5)</li><li><strong>Doctorat</strong> (BAC+8)<br><br></li></ul><div><strong>CHIFFRES CLÉS</strong></div><ul><li><strong>5 domaines de formation</strong></li><li><strong>180 places annuelles</strong> en concours d’entrée</li><li><strong>80% d’insertion professionnelle</strong> à 6 mois</li><li><strong>12 laboratoires</strong> de recherche et création</li></ul><div><br></div><div><strong>\"L’IBAI n’est pas seulement une école, c’est un écosystème où l’art rencontre la technologie pour inventer le futur.\"</strong><br><em>Prof. Dr. Ado Adamou ABBA ARI, Directeur de l’IBAI<br></em><br></div>', NULL, 1, '2025-05-04 16:54:30'),
(4, 4, 'Organisation et contact', '<div>L\'Institut des Beaux-Arts et de l\'Innovation (IBAI) de l\'Université de Garoua est structuré pour offrir un environnement académique dynamique et professionnalisant. L\'institut s\'organise autour de <strong>départements spécialisés</strong>, chacun dédié à un domaine clé des arts et de l\'innovation, encadrés par une équipe pédagogique composée d\'universitaires et de professionnels reconnus.<br><br></div><ul><li><strong>Départements</strong> :<ul><li>Arts et Humanités Numériques</li><li>Arts Plastiques et Innovation</li><li>Architecture, Urbanisme et Paysage</li><li>Design et Graphisme</li><li>e-Tourisme et Patrimoines<br><br></li></ul></li><li><strong>Structures opérationnelles</strong> :<ul><li><strong>FabLab et ateliers techniques</strong> : Espaces équipés pour la création et l\'expérimentation.</li><li><strong>Centre de recherche (CREATIVE)</strong> : Axé sur les innovations appliquées aux territoires et au patrimoine.</li><li><strong>Cellule d\'insertion professionnelle</strong> : Accompagnement des étudiants vers l\'emploi et l\'entrepreneuriat.<br><br></li></ul></li></ul><div>L\'IBAI privilégie une <strong>gestion participative</strong>, associant étudiants, enseignants et partenaires industriels à ses projets, dans un souci d\'innovation continue et d\'adaptation aux besoins du marché.</div>', 'whatsapp-image-2024-03-01-at-09-06-26-67b58730-remini-enhanced-thumbnail-1600x900-6817cf25afcc9244355581.jpg', '<div><strong>Contacts<br></strong><br></div><div>Pour toute information ou demande :</div><ul><li><strong>Adresse</strong> : Institut des Beaux-Arts et de l\'Innovation, Université de Garoua, Cameroun.</li><li><strong>Téléphone</strong> : (+237) 6 20 07 36 36 / 6 94 70 60 70</li><li><strong>Email</strong> : <a href=\"https://mailto:iba@univ-garoua.cm\">iba[at]univ-garoua.cm</a></li><li><strong>Site web</strong> : <a href=\"http://www.ibai.univ-garoua.cm\">www.ibai.univ-garoua.cm</a></li><li><strong>Réseaux sociaux</strong> : Facebook (@IBAI.Garoua), LinkedIn (IBAI Officiel)<br><br></li></ul><div><strong>Horaires d\'ouverture</strong> :<br>Du lundi au vendredi, 8h00 à 18h00.<br><br></div><div><strong>Rejoignez-nous pour une formation d\'excellence au carrefour de l\'art et de l\'innovation !</strong></div>', NULL, 1, '2025-05-04 20:33:41'),
(6, 6, 'Informations et démarches administratives', '<div>Toutes les informations nécessaires pour vos démarches administratives.</div>', NULL, NULL, NULL, 1, NULL),
(7, 7, 'Election délégues de niveaux', 'Participez aux élections des délégués de niveaux pour représenter vos camarades.', NULL, NULL, NULL, 1, NULL),
(8, 8, 'Election du bureau des clubs et associations', 'Rejoignez le bureau des clubs et associations pour dynamiser la vie étudiante.', NULL, NULL, NULL, 1, NULL),
(9, 9, 'Election du Bureau de l\'association des étudiants', 'Élisez vos représentants au sein de l\'association des étudiants.', NULL, NULL, NULL, 1, NULL),
(10, 10, 'Conseil de discipline', 'Le Conseil de discipline veille au respect des règles au sein de l\'IBAI.', NULL, NULL, NULL, 1, NULL),
(11, 11, 'Conseil d\'institut', 'Le Conseil d\'institut est une instance clé pour les décisions stratégiques.', NULL, NULL, NULL, 1, NULL),
(12, 12, 'Le Centre Médico-Social (CMS)', 'Le CMS offre des services de santé et de soutien aux étudiants.', NULL, NULL, NULL, 1, NULL),
(13, 13, 'Bon reflexes', 'Adoptez les bons réflexes pour assurer votre sécurité et celle des autres.', NULL, NULL, NULL, 1, NULL),
(14, 14, 'Bourses et aide sociale', 'Découvrez les aides financières disponibles pour les étudiants.', NULL, NULL, NULL, 1, NULL),
(15, 15, 'Bourse de l\'excellence', 'Postulez pour la bourse de l\'excellence et récompensez vos efforts académiques.', NULL, NULL, NULL, 1, NULL),
(16, 16, 'Programme WorkStudy', 'Combinez études et travail grâce au programme WorkStudy.', NULL, NULL, NULL, 1, NULL),
(18, 18, 'Activités sportives et culturelles', 'Découvrez les activités sportives et culturelles proposées par l\'IBAI.', NULL, NULL, NULL, 1, NULL),
(19, 19, 'Prospectus', 'Téléchargez le prospectus pour en savoir plus sur nos programmes.', NULL, NULL, NULL, 1, NULL),
(20, 20, 'Présentation et Tronc commun (Formation Initiale)', 'Découvrez le tronc commun des formations initiales.', NULL, NULL, NULL, 1, NULL),
(21, 21, 'Mentions et parcours (Formation Initiale)', 'Explorez les mentions et parcours disponibles en formation initiale.', NULL, NULL, NULL, 1, NULL),
(22, 22, 'Evaluations (Formation Initiale)', 'Apprenez-en plus sur les évaluations en formation initiale.', NULL, NULL, NULL, 1, NULL),
(23, 23, 'Diplômes (Formation Initiale)', 'Découvrez les diplômes délivrés en formation initiale.', NULL, NULL, NULL, 1, NULL),
(24, 24, 'Présentation et Tronc commun (Formation Continue)', 'Présentation des formations continues et à distance.', NULL, NULL, NULL, 1, NULL),
(25, 25, 'Mentions et parcours (Formation Continue)', 'Explorez les mentions et parcours en formation continue.', NULL, NULL, NULL, 1, NULL),
(26, 26, 'Evaluations (Formation Continue)', 'Apprenez-en plus sur les évaluations en formation continue.', NULL, NULL, NULL, 1, NULL),
(27, 27, 'Diplômes (Formation Continue)', 'Découvrez les diplômes délivrés en formation continue.', NULL, NULL, NULL, 1, NULL),
(28, 28, 'Présentation (3e cycle)', 'Présentation des programmes de 3e cycle.', NULL, NULL, NULL, 1, NULL),
(29, 29, 'Concours d\'entrée en première année', 'Informations sur le concours d\'entrée en première année.', NULL, NULL, NULL, 1, NULL),
(30, 30, 'Etudes de dossier', 'Découvrez les modalités d\'admission par études de dossier.', NULL, NULL, NULL, 1, NULL),
(31, 31, 'Appel à candidatures (3e cycle)', 'Participez à l\'appel à candidatures pour les programmes de 3e cycle.', NULL, NULL, NULL, 1, NULL),
(32, 29, 'Concours d\'entrée en troisième année', 'Informations sur le concours d\'entrée en troisième année.', NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250225141124', '2025-02-25 14:11:53', 347),
('DoctrineMigrations\\Version20250225143406', '2025-02-25 14:34:19', 118),
('DoctrineMigrations\\Version20250301215110', '2025-03-01 21:51:25', 57),
('DoctrineMigrations\\Version20250301220912', '2025-03-01 22:09:18', 246),
('DoctrineMigrations\\Version20250327174905', '2025-03-27 17:49:19', 68),
('DoctrineMigrations\\Version20250330102835', '2025-03-30 10:29:11', 116),
('DoctrineMigrations\\Version20250401210633', '2025-04-01 21:06:47', 58),
('DoctrineMigrations\\Version20250406121656', '2025-04-06 12:17:06', 149),
('DoctrineMigrations\\Version20250427221705', '2025-04-27 22:18:09', 293);

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

DROP TABLE IF EXISTS `formation`;
CREATE TABLE IF NOT EXISTS `formation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenu1` longtext COLLATE utf8mb4_unicode_ci,
  `sigle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publier` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  `image1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contenu2` longtext COLLATE utf8mb4_unicode_ci,
  `image2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unite_pedagogique_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_404021BFD6F94D98` (`unite_pedagogique_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `formation`
--

INSERT INTO `formation` (`id`, `nom`, `contenu1`, `sigle`, `publier`, `updated_at`, `image1`, `contenu2`, `image2`, `unite_pedagogique_id`) VALUES
(1, 'Humanités numériques', '<div>Approches culturelles, critiques et technologiques appliquées aux environnements numériques.</div>', 'HUNU', 1, '2025-04-06 12:32:49', 'semainaire-art-ia-67f2747151e62371641323.jpg', NULL, NULL, 1),
(2, 'Arts plastiques et visuels', 'Exploration des techniques artistiques traditionnelles et contemporaines pour développer une expression personnelle.', 'APV', 1, '2025-04-06 14:26:10', NULL, NULL, NULL, 2),
(3, 'Design graphique et communication visuelle', 'Méthodologie du design visuel, création numérique, branding, typographie et interfaces numériques.', 'DGCV', 1, '2025-04-06 14:26:10', NULL, NULL, NULL, 3),
(4, 'Architecture et patrimoine', 'Formation axée sur la conception architecturale, la restauration du patrimoine, l’urbanisme et les paysages culturels.', 'AP', 1, '2025-04-06 14:26:10', NULL, NULL, NULL, 4),
(5, 'e-Tourisme et valorisation du patrimoine', 'Utilisation des technologies numériques pour valoriser le patrimoine et dynamiser le tourisme culturel.', 'ETVP', 1, '2025-04-06 14:26:10', NULL, NULL, NULL, 5),
(6, 'Fondamentaux des arts, technologies et humanités', 'Tronc commun couvrant les bases artistiques, techniques, méthodologiques et théoriques.', 'FATH', 1, '2025-04-06 14:26:10', NULL, NULL, NULL, 6),
(7, 'Innovation et pratiques expérimentales', 'Pédagogie par projet, fablab, ateliers interdisciplinaires et expérimentations numériques.', 'IPE', 1, '2025-04-06 14:26:10', NULL, NULL, NULL, 7),
(8, 'Technologies créatives', '<h1>L\'art et l\'innovation au service de la créativité.</h1><div><br></div>', 'TECRE', 0, '2025-04-17 21:37:29', 'hq720-68017499d2558986840610.jpg', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `galerie`
--

DROP TABLE IF EXISTS `galerie`;
CREATE TABLE IF NOT EXISTS `galerie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_galerie_id` int NOT NULL,
  `artiste_id` int DEFAULT NULL,
  `titre` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `media` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publier` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_9E7D15909F5040EE` (`type_galerie_id`),
  KEY `IDX_9E7D159021D25844` (`artiste_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `lien`
--

DROP TABLE IF EXISTS `lien`;
CREATE TABLE IF NOT EXISTS `lien` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `offre`
--

DROP TABLE IF EXISTS `offre`;
CREATE TABLE IF NOT EXISTS `offre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_entreprise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `piece_jointe`
--

DROP TABLE IF EXISTS `piece_jointe`;
CREATE TABLE IF NOT EXISTS `piece_jointe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `actualite_id` int DEFAULT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `contenu_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_AB5111D4A2843073` (`actualite_id`),
  KEY `IDX_AB5111D43C1CC488` (`contenu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `piece_jointe`
--

INSERT INTO `piece_jointe` (`id`, `actualite_id`, `file_name`, `updated_at`, `contenu_id`) VALUES
(1, 1, 'bouyguestelecom-facture-20250227-67e5c3283642d950097901.pdf', '2025-03-27 21:29:12', NULL),
(2, 1, 'bouyguestelecom-facture-20250309-67e5c328370e8400537596.pdf', '2025-03-27 21:29:12', NULL),
(3, 1, 'lnkd-invoice-78168729998-signed-67e5c6b20cb82840721331.pdf', '2025-03-27 21:44:18', NULL),
(4, NULL, 'statuts-mia-1-680eb529f3ecc458337725.pdf', '2025-04-27 22:52:26', NULL),
(5, NULL, 'facture-machine-a-cafe-680eb55e171e5854305891.pdf', '2025-04-27 22:53:18', NULL),
(6, NULL, 'lettre-de-motivation-management-edf-enedis-680eb594381fe139832510.pdf', '2025-04-27 22:54:12', 6),
(7, 6, 'facture-machine-a-cafe-1-680eb60b9e629062797888.pdf', '2025-04-27 22:56:11', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `type_artiste`
--

DROP TABLE IF EXISTS `type_artiste`;
CREATE TABLE IF NOT EXISTS `type_artiste` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `actif` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type_artiste`
--

INSERT INTO `type_artiste` (`id`, `titre`, `actif`) VALUES
(1, 'Peintre', 1),
(2, 'Graphiste', 1);

-- --------------------------------------------------------

--
-- Structure de la table `type_contenu`
--

DROP TABLE IF EXISTS `type_contenu`;
CREATE TABLE IF NOT EXISTS `type_contenu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type_contenu`
--

INSERT INTO `type_contenu` (`id`, `titre`) VALUES
(1, 'Mot du directeur'),
(3, 'Présentation de l\'IBAI'),
(4, 'Organisation et contact'),
(6, 'Informations et démarches administratives'),
(7, 'Election délégues de niveaux'),
(8, 'Election du bureau des clubs et associations'),
(9, 'Election du Bureau de l\'association des étudiants de l\'IBAI'),
(10, 'Conseil de discipline'),
(11, 'Conseil d\'institut'),
(12, 'Le Centre Médico-Social (CMS)'),
(13, 'Bon reflexes'),
(14, 'Bourses et aide sociale'),
(15, 'Bourse de l\'excellence'),
(16, 'Programme WorkStudy'),
(18, 'Activités sportives et culturelles'),
(19, 'Prospectus'),
(20, 'Présentation et Tronc commun (Formation Initiale)'),
(21, 'Mentions et parcours (Formation Initiale)'),
(22, 'Evaluations (Formation Initiale)'),
(23, 'Diplômes (Formation Initiale)'),
(24, 'Présentation et Tronc commun (Formation Continue)'),
(25, 'Mentions et parcours (Formation Continue)'),
(26, 'Evaluations (Formation Continue)'),
(27, 'Diplômes (Formation Continue)'),
(28, 'Présentation (3e cycle)'),
(29, 'Concours d\'entrée en première année'),
(30, 'Etudes de dossier'),
(31, 'Appel à candidatures (3e cycle)'),
(32, 'Concours d\'entrée en troisième année');

-- --------------------------------------------------------

--
-- Structure de la table `type_galerie`
--

DROP TABLE IF EXISTS `type_galerie`;
CREATE TABLE IF NOT EXISTS `type_galerie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `actif` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type_galerie`
--

INSERT INTO `type_galerie` (`id`, `titre`, `actif`) VALUES
(1, 'Peinture', 1),
(2, 'Sculpture', 1);

-- --------------------------------------------------------

--
-- Structure de la table `unite_pedagogique`
--

DROP TABLE IF EXISTS `unite_pedagogique`;
CREATE TABLE IF NOT EXISTS `unite_pedagogique` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sigle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contenu1` longtext COLLATE utf8mb4_unicode_ci,
  `image1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publier` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  `contenu2` longtext COLLATE utf8mb4_unicode_ci,
  `image2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `unite_pedagogique`
--

INSERT INTO `unite_pedagogique` (`id`, `nom`, `sigle`, `contenu1`, `image1`, `publier`, `updated_at`, `contenu2`, `image2`) VALUES
(1, 'Département des arts et humanités numériques', 'DAHN', '<div><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br></div><div>Why do we use it?<br><br></div><div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div><div>&nbsp;<br>Where does it come from?<br>&nbsp;<br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</div>', 'arts-et-humanites-numeriques-67eff808d1b4b637589367.jpg', 1, '2025-04-06 12:39:41', '<div><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br></div><div>Why do we use it?<br><br></div><div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div><div>&nbsp;<br>Where does it come from?<br>&nbsp;<br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</div>', 'concours-entree-ibai-67f2760d681d7940846726.jpg'),
(2, 'Département d’arts plastiques', 'DAP', '<div>Formation en arts plastiques et visuels.</div>', 'arts-plastiques-67eff81e3a9f8663595834.jpg', 1, '2025-04-04 15:17:50', '<div>Développement des compétences en peinture, sculpture et dessin.</div>', NULL),
(3, 'Département de design et graphismes', 'DDG', '<div>Enseignement du design et du graphisme.</div>', 'design-et-graphismes-67eff832ea17b636868564.jpg', 1, '2025-04-04 15:18:10', '<div>Exploration des techniques de communication visuelle.</div>', NULL),
(4, 'Département des métiers d’art de bâtir, d’architecture, d’urbanisme et de paysage', 'MABAUP', '<div>Formation aux métiers de l\'architecture et de l\'urbanisme.</div>', 'art-batir-architecture-urbanisme-paysage-67eff8479c93d561700618.jpg', 1, '2025-04-04 15:18:31', '<div>Approche interdisciplinaire du paysage et de la construction.</div>', NULL),
(5, 'Département de e-tourisme et patrimoines', 'e-TP', '<div>Tourisme numérique et valorisation du patrimoine.</div>', 'e-tourisme-et-patrimoines-67eff862686a4233132654.jpg', 1, '2025-04-04 15:18:58', '<div>Utilisation des technologies pour la préservation du patrimoine culturel.</div>', NULL),
(6, 'Département des enseignements techniques et fondamentaux de bases', 'DETFB', '<div>Formation technique et fondamentale.</div>', 'enseignements-techniques-et-fondamentaux-de-bases-67eff8804804b723268999.jpg', 1, '2025-04-04 15:19:28', '<div>Acquisition des compétences de base en sciences et techniques.</div>', NULL),
(7, 'Centre d’expérimentation et d’innovation', 'CEI', '<div>Innovation et expérimentation dans divers domaines.</div>', 'centre-innovation-expertisation-67eff892d4cc0536944419.jpg', 1, '2025-04-04 15:19:46', '<div>Mise en place de projets expérimentaux et innovants.</div>', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `unite_recherche`
--

DROP TABLE IF EXISTS `unite_recherche`;
CREATE TABLE IF NOT EXISTS `unite_recherche` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenu1` longtext COLLATE utf8mb4_unicode_ci,
  `image1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contenu2` longtext COLLATE utf8mb4_unicode_ci,
  `image2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publier` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  `sigle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `unite_recherche`
--

INSERT INTO `unite_recherche` (`id`, `nom`, `contenu1`, `image1`, `contenu2`, `image2`, `publier`, `updated_at`, `sigle`) VALUES
(1, 'Centre de recherche en arts et innovation appliquées aux territoires, à la ville et à l\'environnement', '<div>Centre de recherche en arts et innovation appliquées aux territoires, à la ville et à l\'environnement</div>', 'lmce4dc2ff68-7-680e51e2d992e412282005.jpg', NULL, NULL, 1, '2025-04-27 15:48:50', 'CREATIVE');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `artiste`
--
ALTER TABLE `artiste`
  ADD CONSTRAINT `FK_9C07354F3CD18E61` FOREIGN KEY (`type_artiste_id`) REFERENCES `type_artiste` (`id`);

--
-- Contraintes pour la table `contenu`
--
ALTER TABLE `contenu`
  ADD CONSTRAINT `FK_89C2003FC54C8C93` FOREIGN KEY (`type_id`) REFERENCES `type_contenu` (`id`);

--
-- Contraintes pour la table `formation`
--
ALTER TABLE `formation`
  ADD CONSTRAINT `FK_404021BFD6F94D98` FOREIGN KEY (`unite_pedagogique_id`) REFERENCES `unite_pedagogique` (`id`);

--
-- Contraintes pour la table `galerie`
--
ALTER TABLE `galerie`
  ADD CONSTRAINT `FK_9E7D159021D25844` FOREIGN KEY (`artiste_id`) REFERENCES `artiste` (`id`),
  ADD CONSTRAINT `FK_9E7D15909F5040EE` FOREIGN KEY (`type_galerie_id`) REFERENCES `type_galerie` (`id`);

--
-- Contraintes pour la table `piece_jointe`
--
ALTER TABLE `piece_jointe`
  ADD CONSTRAINT `FK_AB5111D43C1CC488` FOREIGN KEY (`contenu_id`) REFERENCES `contenu` (`id`),
  ADD CONSTRAINT `FK_AB5111D4A2843073` FOREIGN KEY (`actualite_id`) REFERENCES `actualite` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
