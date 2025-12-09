import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getTasks = async () => {
    const response = await api.get('/tasks/');
    return response.data;
};

export const getTask = async (id) => {
    const response = await api.get(`/tasks/${id}`);
    return response.data;
};

export const createTask = async (taskData) => {
    const response = await api.post('/tasks/', taskData);
    return response.data;
};

export const updateTask = async (id, taskData) => {
    const response = await api.patch(`/tasks/${id}`, taskData);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
};

export default api;