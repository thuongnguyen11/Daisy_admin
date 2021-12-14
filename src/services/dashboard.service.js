import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "./api-url";

const getStatistics = () => {
    return axios.get(API_URL + 'admin/statistics/', { headers: authHeader() });
};
const dishService = {
    getStatistics
};

export default dishService;