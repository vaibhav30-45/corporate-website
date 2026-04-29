import apiClient from "./apiClient";

export const getBlogs = async () => {
    try {
        const response = await apiClient.get("/blog");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAdminBlogs = async () => {
    try {
        const response = await apiClient.get("/blog/admin/all");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getBlogBySlug = async (slug) => {
    try {
        const response = await apiClient.get(`/blog/${slug}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createBlog = async (blogData) => {
    try {
        const response = await apiClient.post("/blog", blogData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateBlog = async (id, blogData) => {
    try {
        const response = await apiClient.put(`/blog/${id}`, blogData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteBlog = async (id) => {
    try {
        const response = await apiClient.delete(`/blog/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
