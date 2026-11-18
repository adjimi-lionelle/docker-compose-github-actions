<?php

namespace App\Controller\Admin;

use App\Entity\Agenda;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use Vich\UploaderBundle\Form\Type\VichFileType;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

class AgendaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Agenda::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('titre', 'Titre'),
            TextareaField::new('details', 'Texte court / Résumé')
            ->setRequired(true)
            ->setFormTypeOption('attr', [
                'maxlength' => 1000, // Limite à 255 caractères
                'oninput' => "document.getElementById('details-count').textContent = this.value.length + '/100'"
            ])
            ->setHelp('<span id="details-count">0/100</span> caractères saisis'),
            DateTimeField::new('dateEvenement', 'Date de l\'événement')
                ->setFormat('dd/MM/yyyy'),

                Field::new('imageFile', 'Fichier image')
                ->setFormType(VichFileType::class)
                ->onlyOnForms(),

            ImageField::new('image', 'Image')
                ->setBasePath('/media/cache/resolve/thumbnail_800x570/uploads/agendas')
                ->hideOnForm(),

            BooleanField::new('publier', 'Publier'),
        ];
    }
}
