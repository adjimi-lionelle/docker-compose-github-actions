<?php

namespace App\Controller\Admin;

use App\Entity\Artiste;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use Vich\UploaderBundle\Form\Type\VichFileType;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;

class ArtisteCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Artiste::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('typeArtiste', 'Type d\'artiste'),
            TextField::new('nom', 'Nom'),
            TextField::new('prenom', 'Prénom'),
            TextField::new('nomArtiste', 'Nom d’artiste')->setRequired(false),
            TextEditorField::new('description', 'Description')->setRequired(false),

            Field::new('photoFile', 'Photo')
                ->setFormType(VichFileType::class)
                ->onlyOnForms(),

            ImageField::new('photo', 'Photo')
                ->setBasePath('/media/cache/resolve/thumbnail_800x570/uploads/artistes')
                ->hideOnForm(),

            BooleanField::new('publier', 'Publier'),
        ];
    }
}
