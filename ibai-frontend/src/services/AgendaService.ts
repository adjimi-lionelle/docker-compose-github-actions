import axios from "../api/axiosInstance";
import { Agenda } from "../interfaces/AgendaInterface";

const API_URL = "/agendas";

export const AgendaService = {
    getAgendas: async (page: number = 1, itemsPerPage: number = 9, order: 'ASC' | 'DESC' = 'DESC') => {
        const res = await axios.get(
            `${API_URL}?pagination=true&publier=true&page=${page}&itemsPerPage=${itemsPerPage}&order[dateActualite]=${order}`
        );
        return {
            data: res.data["member"] as Agenda[],
            total: res.data["totalItems"],
        };
    },

    getAllAgendas: async () => {
        const res = await axios.get(`${API_URL}?pagination=false`);
        return {
            data: res.data["hydra:member"] as Agenda[],
            total: res.data["hydra:totalItems"],
        };
    },

    getAgenda: async (agendaId: number) => {
        const res = await axios.get(`${API_URL}/${agendaId}`);
        return res.data as Agenda;
    },

    addAgenda: async (agenda: Partial<Agenda>) => {
        const res = await axios.post(API_URL, agenda);
        return res.data as Agenda;
    },

    updateAgenda: async (agenda: Agenda) => {
        const res = await axios.put(`${API_URL}/${agenda.id}`, agenda);
        return res.data as Agenda;
    },

    deleteAgenda: async (agendaId: number) => {
        const res = await axios.delete(`${API_URL}/${agendaId}`);
        return res.data;
    },

    uploadAgenda: async (formData: FormData, agendaId?: number) => {
        const url = agendaId ? `${API_URL}/${agendaId}` : `${API_URL}`;
        const res = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data as Agenda;
    },
};
