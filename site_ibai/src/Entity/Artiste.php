<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Doctrine\Orm\Filter\BooleanFilter;

#[ORM\Entity]
#[ApiResource]
#[ApiFilter(OrderFilter::class, properties: ['nom' => 'ASC'])]
#[ApiFilter(SearchFilter::class, properties: ['nom' => 'ipartial'])]
#[ApiFilter(BooleanFilter::class, properties: ['publier'])]
#[Vich\Uploadable]
class Artiste
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: TypeArtiste::class)]
    #[ORM\JoinColumn(nullable: false)]
    private TypeArtiste $typeArtiste;

    #[ORM\Column(type: "string", length: 255)]
    private string $nom;

    #[ORM\Column(type: "string", length: 255)]
    private string $prenom;

    #[ORM\Column(type: "string", length: 255, nullable: true)]
    private ?string $nomArtiste = null;

    #[ORM\Column(type: "text", nullable: true)]
    private ?string $description = null;

    #[Vich\UploadableField(mapping: 'artiste_images', fileNameProperty: 'photo')]
    private ?File $photoFile = null;

    #[ORM\Column(type: "string", nullable: true)]
    private ?string $photo = null;

    private ?string $photoThumbnail = null;

    #[ORM\Column(type: "boolean", options: ["default" => false])]
    private bool $publier = false;

    #[ORM\Column(type: "datetime", nullable: true)]
    private ?\DateTime $updatedAt = null;

    public function setPhotoFile(?File $photoFile = null): void
    {
        $this->photoFile = $photoFile;
        if ($photoFile) {
            $this->updatedAt = new \DateTime();
        }
    }

    public function getPhotoFile(): ?File
    {
        return $this->photoFile;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNomArtiste(): ?string
    {
        return $this->nomArtiste;
    }

    public function setNomArtiste(?string $nomArtiste): static
    {
        $this->nomArtiste = $nomArtiste;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): static
    {
        $this->photo = $photo;

        return $this;
    }

    public function isPublier(): ?bool
    {
        return $this->publier;
    }

    public function setPublier(bool $publier): static
    {
        $this->publier = $publier;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTime $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getTypeArtiste(): ?TypeArtiste
    {
        return $this->typeArtiste;
    }

    public function setTypeArtiste(?TypeArtiste $typeArtiste): static
    {
        $this->typeArtiste = $typeArtiste;

        return $this;
    }

    public function __toString()
    {
        return $this->nom . " " . $this->prenom . " (". $this->nomArtiste . ")";
    }

    /**
     * Get the value of photoThumbnail
     */ 
    public function getPhotoThumbnail()
    {
        return $this->photoThumbnail;
    }

    /**
     * Set the value of photoThumbnail
     *
     * @return  self
     */ 
    public function setPhotoThumbnail($photoThumbnail)
    {
        $this->photoThumbnail = $photoThumbnail;

        return $this;
    }
}
