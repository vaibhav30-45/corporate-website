import apiClient from './apiClient';

// Career / Job service functions
export const getJobs = () => apiClient.get('/jobs');
export const getJobById = (id) => apiClient.get(`/jobs/${id}`);
export const createJob = (data) => apiClient.post('/jobs', data);
export const updateJob = (id, data) => apiClient.put(`/jobs/${id}`, data);
export const deleteJob = (id) => apiClient.delete(`/jobs/${id}`);
export const applyForJob = (id, data) => apiClient.post(`/jobs/${id}/apply`, data);
