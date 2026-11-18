import axios from "../api/axiosInstance";
import { UniteRecherche } from "../interfaces/UniteRechercheInterface";

const API_URL = "/unite_recherches";

export const UniteRechercheService = {
    // 📌 Récupérer toutes les unités de recherche avec pagination
    getUnitesRecherche: async (page: number = 1, itemsPerPage: number = 10, order: 'ASC' | 'DESC' = 'DESC') => {
        const res = await axios.get(`${API_URL}?pagination=true&publier=true&page=${page}&itemsPerPage=${itemsPerPage}&order[nom]=${order}`);
        return {
            data: res.data["member"] as UniteRecherche[],
            total: res.data["totalItems"],
        };
    },

    // 📌 Récupérer toutes les unités de recherche sans pagination
    getAllUnitesRecherche: async () => {
        const res = await axios.get(`${API_URL}?pagination=false`);
        return {
            data: res.data["member"] as UniteRecherche[],
            total: res.data["totalItems"],
        };
    },

    // 📌 Récupérer une unité de recherche par ID
    getUniteRecherche: async (uniteRechercheId: number) => {
        const res = await axios.get(`${API_URL}/${uniteRechercheId}`);
        return res.data as UniteRecherche;
    },

    // 📌 Ajouter une nouvelle unité de recherche
    addUniteRecherche: async (uniteRecherche: Partial<UniteRecherche>) => {
        const res = await axios.post(API_URL, uniteRecherche);
        return res.data as UniteRecherche;
    },

    // 📌 Mettre à jour une unité de recherche
    updateUniteRecherche: async (uniteRecherche: UniteRecherche) => {
        const res = await axios.put(`${API_URL}/${uniteRecherche.id}`, uniteRecherche);
        return res.data as UniteRecherche;
    },

    // 📌 Supprimer une unité de recherche
    deleteUniteRecherche: async (uniteRechercheId: number) => {
        const res = await axios.delete(`${API_URL}/${uniteRechercheId}`);
        return res.data;
    },

    // 📌 Upload d'une image pour une unité de recherche
    uploadUniteRechercheImage: async (formData: FormData, uniteRechercheId?: number) => {
        const url = uniteRechercheId ? `${API_URL}/${uniteRechercheId}` : `${API_URL}`;
        const res = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data as UniteRecherche;
    },
};
