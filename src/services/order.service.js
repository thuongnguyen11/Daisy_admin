import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "./api-url";

const getOrders = () => {
    return axios.get(API_URL + 'admin/orders/', { headers: authHeader() });
};

const getOrderById = (id) => {
    return axios.get(API_URL + 'admin/orders/' + id, { headers: authHeader() });
};

const updateOrderStatus = ({ id, status }) => {
    return axios.post(API_URL + 'admin/orders/update', { id, status }, { headers: authHeader() });
};

const orderService = {
    getOrders,
    updateOrderStatus,
    getOrderById,
};

export default orderService;