import { PieceJointe } from "./PieceJointeInterface";
import { TypeContenu } from "./TypeContenuInterface";

export interface Contenu {
    id?: number;
    title: string;
    contenu1?: string;
    image1?: string;
    image1Thumbnail?: string;
    contenu2?: string;
    image2?: string;
    image2Thumbnail?: string;
    piecesJointes: PieceJointe[]
    typeContenu?: TypeContenu;
    publier: boolean;
    updatedAt?: string;
  }