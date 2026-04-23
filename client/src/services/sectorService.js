import apiClient from './apiClient';

// Sector service functions
export const getSectors = () => apiClient.get('/sectors');
export const getSectorById = (id) => apiClient.get(`/sectors/${id}`);
export const createSector = (data) => apiClient.post('/sectors', data);
export const updateSector = (id, data) => apiClient.put(`/sectors/${id}`, data);
export const deleteSector = (id) => apiClient.delete(`/sectors/${id}`);
