export interface Agenda {
  id?: number;
  titre: string;
  dateEvenement: string;
  details?: string;
  image?: string;
  imageThumbnail?: string;
  publier: boolean;
  updatedAt?: string;
}