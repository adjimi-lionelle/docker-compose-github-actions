<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250401210633 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE formation ADD image1 VARCHAR(255) DEFAULT NULL, ADD contenu2 LONGTEXT DEFAULT NULL, ADD image2 VARCHAR(255) DEFAULT NULL, CHANGE image sigle VARCHAR(255) DEFAULT NULL, CHANGE description contenu1 LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE unite_pedagogique ADD contenu2 LONGTEXT DEFAULT NULL, ADD image2 VARCHAR(255) DEFAULT NULL, CHANGE description contenu1 LONGTEXT DEFAULT NULL, CHANGE image image1 VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE unite_recherche ADD sigle VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE unite_pedagogique ADD description LONGTEXT DEFAULT NULL, ADD image VARCHAR(255) DEFAULT NULL, DROP contenu1, DROP image1, DROP contenu2, DROP image2');
        $this->addSql('ALTER TABLE formation ADD description LONGTEXT DEFAULT NULL, ADD image VARCHAR(255) DEFAULT NULL, DROP sigle, DROP contenu1, DROP image1, DROP contenu2, DROP image2');
        $this->addSql('ALTER TABLE unite_recherche DROP sigle');
    }
}
