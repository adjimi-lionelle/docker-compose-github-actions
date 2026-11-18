<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250427221705 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE piece_jointe ADD contenu_id INT DEFAULT NULL, CHANGE actualite_id actualite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE piece_jointe ADD CONSTRAINT FK_AB5111D43C1CC488 FOREIGN KEY (contenu_id) REFERENCES contenu (id)');
        $this->addSql('CREATE INDEX IDX_AB5111D43C1CC488 ON piece_jointe (contenu_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE piece_jointe DROP FOREIGN KEY FK_AB5111D43C1CC488');
        $this->addSql('DROP INDEX IDX_AB5111D43C1CC488 ON piece_jointe');
        $this->addSql('ALTER TABLE piece_jointe DROP contenu_id, CHANGE actualite_id actualite_id INT NOT NULL');
    }
}
