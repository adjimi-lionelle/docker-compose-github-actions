import { PieceJointe } from "./PieceJointeInterface";

export interface Actualite {
    id?: number;
    titre: string;
    description?: string;
    dateActualite: string;
    details?: string;
    image?: string;
    imageThumbnail?: string;
    piecesJointes: PieceJointe[]
    publier: boolean;
    updatedAt?: string;
  }