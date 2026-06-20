import axios from 'axios';

const API = `${import.meta.env.VITE_API_URL}/notes`;

const getConfig = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    return {
        headers: {
            Authorization: `Bearer ${user.token || ''}`
        }
    };
};

export const getNotes = () => axios.get(API, getConfig());
export const createNote = (data) => axios.post(API, data, getConfig());
export const updateNote = (id, data) => axios.put(`${API}/${id}`, data, getConfig());
export const deleteNote = (id) => axios.delete(`${API}/${id}`, getConfig());