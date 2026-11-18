<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250225143406 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite ADD updated_at DATETIME DEFAULT NULL, CHANGE date_actualite date_evenement DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL');
        $this->addSql('ALTER TABLE agenda ADD updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE artiste ADD updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE contenu ADD updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE formation ADD updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE galerie ADD updated_at DATETIME DEFAULT NULL, CHANGE image media VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE unite_pedagogique ADD updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE unite_recherche ADD updated_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite DROP updated_at, CHANGE date_evenement date_actualite DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL');
        $this->addSql('ALTER TABLE galerie DROP updated_at, CHANGE media image VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE agenda DROP updated_at');
        $this->addSql('ALTER TABLE formation DROP updated_at');
        $this->addSql('ALTER TABLE unite_recherche DROP updated_at');
        $this->addSql('ALTER TABLE unite_pedagogique DROP updated_at');
        $this->addSql('ALTER TABLE artiste DROP updated_at');
        $this->addSql('ALTER TABLE contenu DROP updated_at');
    }
}
