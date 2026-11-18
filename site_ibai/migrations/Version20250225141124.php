<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250225141124 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE actualite (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(2048) NOT NULL, description LONGTEXT DEFAULT NULL, date_actualite DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, details VARCHAR(255) DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, publier TINYINT(1) DEFAULT 0 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE agenda (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(2048) NOT NULL, description LONGTEXT DEFAULT NULL, date_evenement DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, details VARCHAR(255) DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, publier TINYINT(1) DEFAULT 0 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE artiste (id INT AUTO_INCREMENT NOT NULL, type_id INT NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, nom_artiste VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, photo VARCHAR(255) DEFAULT NULL, publier TINYINT(1) DEFAULT 0 NOT NULL, INDEX IDX_9C07354FC54C8C93 (type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contenu (id INT AUTO_INCREMENT NOT NULL, type_id INT NOT NULL, title VARCHAR(2048) NOT NULL, contenu1 LONGTEXT DEFAULT NULL, image1 VARCHAR(255) DEFAULT NULL, contenu2 LONGTEXT DEFAULT NULL, image2 VARCHAR(255) DEFAULT NULL, publier TINYINT(1) DEFAULT 0 NOT NULL, INDEX IDX_89C2003FC54C8C93 (type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE formation (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(2048) NOT NULL, description LONGTEXT DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, publier TINYINT(1) DEFAULT 0 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE galerie (id INT AUTO_INCREMENT NOT NULL, type_galerie_id INT NOT NULL, artiste_id INT DEFAULT NULL, titre VARCHAR(2048) NOT NULL, description LONGTEXT DEFAULT NULL, image VARCHAR(255) NOT NULL, publier TINYINT(1) DEFAULT 0 NOT NULL, INDEX IDX_9E7D15909F5040EE (type_galerie_id), INDEX IDX_9E7D159021D25844 (artiste_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lien (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(2048) NOT NULL, url VARCHAR(2048) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE offre (id INT AUTO_INCREMENT NOT NULL, nom_entreprise VARCHAR(255) NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, telephone VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, details LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_artiste (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(2048) NOT NULL, actif TINYINT(1) DEFAULT 0 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_contenu (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(2048) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_galerie (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(2048) NOT NULL, actif TINYINT(1) DEFAULT 0 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE unite_pedagogique (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(2048) NOT NULL, sigle VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, publier TINYINT(1) DEFAULT 0 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE unite_recherche (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(2048) NOT NULL, contenu1 LONGTEXT DEFAULT NULL, image1 VARCHAR(255) DEFAULT NULL, contenu2 LONGTEXT DEFAULT NULL, image2 VARCHAR(255) DEFAULT NULL, publier TINYINT(1) DEFAULT 0 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE artiste ADD CONSTRAINT FK_9C07354FC54C8C93 FOREIGN KEY (type_id) REFERENCES type_artiste (id)');
        $this->addSql('ALTER TABLE contenu ADD CONSTRAINT FK_89C2003FC54C8C93 FOREIGN KEY (type_id) REFERENCES type_contenu (id)');
        $this->addSql('ALTER TABLE galerie ADD CONSTRAINT FK_9E7D15909F5040EE FOREIGN KEY (type_galerie_id) REFERENCES type_galerie (id)');
        $this->addSql('ALTER TABLE galerie ADD CONSTRAINT FK_9E7D159021D25844 FOREIGN KEY (artiste_id) REFERENCES artiste (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE artiste DROP FOREIGN KEY FK_9C07354FC54C8C93');
        $this->addSql('ALTER TABLE contenu DROP FOREIGN KEY FK_89C2003FC54C8C93');
        $this->addSql('ALTER TABLE galerie DROP FOREIGN KEY FK_9E7D15909F5040EE');
        $this->addSql('ALTER TABLE galerie DROP FOREIGN KEY FK_9E7D159021D25844');
        $this->addSql('DROP TABLE actualite');
        $this->addSql('DROP TABLE agenda');
        $this->addSql('DROP TABLE artiste');
        $this->addSql('DROP TABLE contenu');
        $this->addSql('DROP TABLE formation');
        $this->addSql('DROP TABLE galerie');
        $this->addSql('DROP TABLE lien');
        $this->addSql('DROP TABLE offre');
        $this->addSql('DROP TABLE type_artiste');
        $this->addSql('DROP TABLE type_contenu');
        $this->addSql('DROP TABLE type_galerie');
        $this->addSql('DROP TABLE unite_pedagogique');
        $this->addSql('DROP TABLE unite_recherche');
    }
}
