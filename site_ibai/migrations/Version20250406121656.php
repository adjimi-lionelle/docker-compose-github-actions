<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250406121656 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE formation ADD unite_pedagogique_id INT NOT NULL');
        $this->addSql('ALTER TABLE formation ADD CONSTRAINT FK_404021BFD6F94D98 FOREIGN KEY (unite_pedagogique_id) REFERENCES unite_pedagogique (id)');
        $this->addSql('CREATE INDEX IDX_404021BFD6F94D98 ON formation (unite_pedagogique_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE formation DROP FOREIGN KEY FK_404021BFD6F94D98');
        $this->addSql('DROP INDEX IDX_404021BFD6F94D98 ON formation');
        $this->addSql('ALTER TABLE formation DROP unite_pedagogique_id');
    }
}
