import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "./api-url";

const getCategories = () => {
    return axios.get(API_URL + 'categories', { headers: authHeader() });
};

const createCategory = ({ name, desc }) => {
    return axios.post(API_URL + 'admin/categories/create', { name, desc }, { headers: authHeader() });
};

const updateCategory = ({ id, name, desc }) => {
    return axios.post(API_URL + 'admin/categories/update', { id, name, desc }, { headers: authHeader() });
};

const categoryService = {
    getCategories,
    createCategory,
    updateCategory
};

export default categoryService;