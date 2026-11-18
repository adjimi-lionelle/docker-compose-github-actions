import { UnitePedagogique } from "./UnitePedagogiqueInterface";

export interface Formation {
    id?: number;
    nom: string;
    unitePedagogique: UnitePedagogique;
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
