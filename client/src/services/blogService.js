import apiClient from './apiClient';

// Blog service functions
export const getBlogs = () => apiClient.get('/blogs');
export const getBlogById = (id) => apiClient.get(`/blogs/${id}`);
export const createBlog = (data) => apiClient.post('/blogs', data);
export const updateBlog = (id, data) => apiClient.put(`/blogs/${id}`, data);
export const deleteBlog = (id) => apiClient.delete(`/blogs/${id}`);
