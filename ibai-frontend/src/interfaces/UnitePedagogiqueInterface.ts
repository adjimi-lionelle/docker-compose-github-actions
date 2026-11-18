import { Formation } from "./FormationInterface";

export interface UnitePedagogique {
    id?: number;
    nom: string;
    formations: Formation[];
    sigle?: string;
    contenu1?: string;
    image1?: string;
    image1Thumbnail?: string;
    contenu2?: string;
    image2?: string;
    image2Thumbnail?: string;
    publier: boolean;
    updatedAt?: string;
}
