<?php

namespace App\Controller\Admin;

use App\Entity\Actualite;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use Vich\UploaderBundle\Form\Type\VichFileType;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class ActualiteCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Actualite::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('titre', 'Titre'),
            TextareaField::new('details', 'Texte court / Résumé')
            ->setRequired(true)
            ->setFormTypeOption('attr', [
                'maxlength' => 255, // Limite à 255 caractères
                'oninput' => "document.getElementById('details-count').textContent = this.value.length + '/255'"
            ])
            ->setHelp('<span id="details-count">0/255</span> caractères saisis'),
            TextEditorField::new('description', 'Description / Texte long')->setRequired(true)->setFormTypeOption('attr', ['style' => 'height: 400px;']),
            DateTimeField::new('dateActualite', 'Date de l\'actualité')->setFormat('dd/MM/yyyy'),

            Field::new('imageFile', 'Fichier image')
                ->setFormType(VichFileType::class)
                ->onlyOnForms(),

            ImageField::new('image', 'Image')
                ->setBasePath('/media/cache/resolve/thumbnail_800x570/uploads/actualites')
                ->hideOnForm(),
            CollectionField::new('piecesJointes', 'Pièces Jointes')
                ->useEntryCrudForm(PieceJointeCrudController::class)
                ->setFormTypeOptions(['by_reference' => false]),

            BooleanField::new('publier', 'Publier'),
        ];
    }
}
