import axios from "axios";

const API_URL = "http://localhost:3000/api/experiencias";

export const getAllExperiencias = () => axios.get(API_URL);
export const createExperiencia = (data) => axios.post(API_URL, data);
export const updateExperiencia = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteExperiencia = (id) => axios.delete(`${API_URL}/${id}`);
