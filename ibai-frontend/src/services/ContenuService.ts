import axios from "../api/axiosInstance";
import { Contenu } from "../interfaces/ContenuInterface";

const API_URL = "/contenus";

export const ContenuService = {
    getContenus: async (page: number = 1, itemsPerPage: number = 9, order: 'ASC' | 'DESC' = 'DESC') => {
        const res = await axios.get(
            `${API_URL}?pagination=true&publier=true&page=${page}&itemsPerPage=${itemsPerPage}&order[dateContenu]=${order}`
        );
        return {
            data: res.data["member"] as Contenu[],
            total: res.data["totalItems"],
        };
    },

    getAllContenus: async () => {
        const res = await axios.get(`${API_URL}?pagination=false`);
        return {
            data: res.data["member"] as Contenu[],
            total: res.data["totalItems"],
        };
    },

    getContenu: async (contenuId: number) => {
        const res = await axios.get(`${API_URL}/${contenuId}`);
        return res.data as Contenu;
    },

    addContenu: async (contenu: Partial<Contenu>) => {
        const res = await axios.post(API_URL, contenu);
        return res.data as Contenu;
    },

    updateContenu: async (contenu: Contenu) => {
        const res = await axios.put(`${API_URL}/${contenu.id}`, contenu);
        return res.data as Contenu;
    },

    deleteContenu: async (contenuId: number) => {
        const res = await axios.delete(`${API_URL}/${contenuId}`);
        return res.data;
    },

    uploadContenu: async (formData: FormData, contenuId?: number) => {
        const url = contenuId ? `${API_URL}/${contenuId}` : `${API_URL}`;
        const res = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data as Contenu;
    },
};
