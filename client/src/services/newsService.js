import apiClient from "./apiClient";

export const getAllNews = async () => {
    try {
        const response = await apiClient.get("/news");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAdminNews = async () => {
    try {
        const response = await apiClient.get("/news/admin/all");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getNewsBySlug = async (slug) => {
    try {
        const response = await apiClient.get(`/news/${slug}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createNews = async (newsData) => {
    try {
        const response = await apiClient.post("/news", newsData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateNews = async (id, newsData) => {
    try {
        const response = await apiClient.put(`/news/${id}`, newsData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteNews = async (id) => {
    try {
        const response = await apiClient.delete(`/news/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
