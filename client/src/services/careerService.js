import apiClient from './apiClient';

// Public endpoints
export const getJobs = () => apiClient.get('/career');
export const getJobBySlug = (slug) => apiClient.get(`/career/${slug}`);
export const applyForJob = (data) => apiClient.post('/career/apply', data, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

// Admin endpoints
export const getAdminJobs = () => apiClient.get('/career/admin/all');
export const createJob = (data) => apiClient.post('/career', data);
export const updateJob = (id, data) => apiClient.put(`/career/${id}`, data);
export const deleteJob = (id) => apiClient.delete(`/career/${id}`);
export const getApplications = () => apiClient.get('/career/admin/applications');
export const getApplicationsCountByJob = () => apiClient.get('/career/admin/applications/count');
