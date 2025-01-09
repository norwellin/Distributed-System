import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getItems = () => apiClient.get("");
export const addItem = (item) => apiClient.post("", item);
export const toupdateItem = (name, item) => apiClient.put(`/${name}`, item);
export const deleteItem = (name) => apiClient.delete(`/${name}`);
