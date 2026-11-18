import axios from "../api/axiosInstance";
import { Formation } from "../interfaces/FormationInterface";

const API_URL = "/formations";

export const FormationService = {
    // 📌 Récupérer toutes les formations avec pagination
    getFormations: async (page: number = 1, itemsPerPage: number = 10, order: 'ASC' | 'DESC' = 'DESC') => {
        const res = await axios.get(`${API_URL}?pagination=true&publier=true&page=${page}&itemsPerPage=${itemsPerPage}&order[nom]=${order}`);
        return {
            data: res.data["member"] as Formation[],
            total: res.data["totalItems"],
        };
    },

    // 📌 Récupérer toutes les formations sans pagination
    getAllFormations: async () => {
        const res = await axios.get(`${API_URL}?pagination=false`);
        return {
            data: res.data["member"] as Formation[],
            total: res.data["totalItems"],
        };
    },

    // 📌 Récupérer une formation par ID
    getFormation: async (formationId: number) => {
        const res = await axios.get(`${API_URL}/${formationId}`);
        return res.data as Formation;
    },

    // 📌 Ajouter une nouvelle formation
    addFormation: async (formation: Partial<Formation>) => {
        const res = await axios.post(API_URL, formation);
        return res.data as Formation;
    },

    // 📌 Mettre à jour une formation
    updateFormation: async (formation: Formation) => {
        const res = await axios.put(`${API_URL}/${formation.id}`, formation);
        return res.data as Formation;
    },

    // 📌 Supprimer une formation
    deleteFormation: async (formationId: number) => {
        const res = await axios.delete(`${API_URL}/${formationId}`);
        return res.data;
    },

    // 📌 Upload d'une image pour une formation
    uploadFormationImage: async (formData: FormData, formationId?: number) => {
        const url = formationId ? `${API_URL}/${formationId}` : `${API_URL}`;
        const res = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data as Formation;
    },
};
