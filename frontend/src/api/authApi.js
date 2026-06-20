import axios from 'axios';

const API = `${import.meta.env.VITE_API_URL}/auth`;

export const registerUser = async (data) => {
   return axios.post(`${API}/register`, data);
};

export const loginUser = async (data) => {
   return axios.post(`${API}/login`, data);
};