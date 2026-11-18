import axios from "../api/axiosInstance";
import { UnitePedagogique } from "../interfaces/UnitePedagogiqueInterface";

const API_URL = "/unite_pedagogiques";

export const UnitePedagogiqueService = {
    // 📌 Récupérer toutes les unités pédagogiques avec pagination
    getUnitesPedagogiques: async (page: number = 1, itemsPerPage: number = 10, order: 'ASC' | 'DESC' = 'DESC') => {
        const res = await axios.get(`${API_URL}?pagination=true&publier=true&page=${page}&itemsPerPage=${itemsPerPage}&order[nom]=${order}`);
        return {
            data: res.data["member"] as UnitePedagogique[],
            total: res.data["totalItems"],
        };
    },

    // 📌 Récupérer toutes les unités pédagogiques sans pagination
    getAllUnitesPedagogiques: async () => {
        const res = await axios.get(`${API_URL}?pagination=false`);
        return {
            data: res.data["member"] as UnitePedagogique[],
            total: res.data["totalItems"],
        };
    },

    // 📌 Récupérer une unité pédagogique par ID
    getUnitePedagogique: async (unitePedagogiqueId: number) => {
        const res = await axios.get(`${API_URL}/${unitePedagogiqueId}`);
        return res.data as UnitePedagogique;
    },

    // 📌 Ajouter une nouvelle unité pédagogique
    addUnitePedagogique: async (unitePedagogique: Partial<UnitePedagogique>) => {
        const res = await axios.post(API_URL, unitePedagogique);
        return res.data as UnitePedagogique;
    },

    // 📌 Mettre à jour une unité pédagogique
    updateUnitePedagogique: async (unitePedagogique: UnitePedagogique) => {
        const res = await axios.put(`${API_URL}/${unitePedagogique.id}`, unitePedagogique);
        return res.data as UnitePedagogique;
    },

    // 📌 Supprimer une unité pédagogique
    deleteUnitePedagogique: async (unitePedagogiqueId: number) => {
        const res = await axios.delete(`${API_URL}/${unitePedagogiqueId}`);
        return res.data;
    },

    // 📌 Upload d'une image pour une unité pédagogique
    uploadUnitePedagogiqueImage: async (formData: FormData, unitePedagogiqueId?: number) => {
        const url = unitePedagogiqueId ? `${API_URL}/${unitePedagogiqueId}` : `${API_URL}`;
        const res = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data as UnitePedagogique;
    },
};
