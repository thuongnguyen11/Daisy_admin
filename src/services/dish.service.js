import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "./api-url";

const getDishes = () => {
    return axios.get(API_URL + 'dishes/', { headers: authHeader() });
};

const getDishById = (id) => {
    return axios.get(API_URL + 'dishes/' + id, { headers: authHeader() });
};

const createDish = ({ name, desc, price, images, category }) => {
    return axios.post(API_URL + 'admin/dishes/create', { name, desc, price, images, category }, { headers: authHeader() });
};

const updateDish = ({ id, name, desc, price, images, category }) => {
    return axios.post(API_URL + 'admin/dishes/update', { id, name, desc, price, images, category }, { headers: authHeader() });
};

const dishService = {
    getDishes,
    getDishById,
    createDish,
    updateDish,
};

export default dishService;