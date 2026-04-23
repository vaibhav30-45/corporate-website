import apiClient from './apiClient';

export const authService = {

    login: async (email, password) => {
        try {
            const response = await apiClient.post('/auth/login', {
                email,
                password,
            });

            // Store token in localStorage
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
            }

            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('authToken');
    },

    getToken: () => {
        return localStorage.getItem('authToken');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('authToken');
    },


    clearAuth: () => {
        localStorage.removeItem('authToken');
    },
};

export default authService;
