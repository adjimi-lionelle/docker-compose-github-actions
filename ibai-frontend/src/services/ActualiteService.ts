import axios from "../api/axiosInstance";
import { Actualite } from "../interfaces/ActualiteInterface";

const API_URL = "/actualites";

export const ActualiteService = {
    getActualites: async (page: number = 1, itemsPerPage: number = 9, order: 'ASC' | 'DESC' = 'DESC') => {
        const res = await axios.get(
            `${API_URL}?pagination=true&publier=true&page=${page}&itemsPerPage=${itemsPerPage}&order[dateActualite]=${order}`
        );
        return {
            data: res.data["member"] as Actualite[],
            total: res.data["totalItems"],
        };
    },

    getAllActualites: async () => {
        const res = await axios.get(`${API_URL}?pagination=false`);
        return {
            data: res.data["member"] as Actualite[],
            total: res.data["totalItems"],
        };
    },

    getActualite: async (actualiteId: number) => {
        const res = await axios.get(`${API_URL}/${actualiteId}`);
        return res.data as Actualite;
    },

    addActualite: async (actualite: Partial<Actualite>) => {
        const res = await axios.post(API_URL, actualite);
        return res.data as Actualite;
    },

    updateActualite: async (actualite: Actualite) => {
        const res = await axios.put(`${API_URL}/${actualite.id}`, actualite);
        return res.data as Actualite;
    },

    deleteActualite: async (actualiteId: number) => {
        const res = await axios.delete(`${API_URL}/${actualiteId}`);
        return res.data;
    },

    uploadActualite: async (formData: FormData, actualiteId?: number) => {
        const url = actualiteId ? `${API_URL}/${actualiteId}` : `${API_URL}`;
        const res = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data as Actualite;
    },
};
