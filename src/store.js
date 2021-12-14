import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/auth.store';
import orderReducer from './store/order.store';
import dishReducer from './store/dish.store';
import dashboardReducer from './store/dashboard.store';
import categoryReducer from './store/category.store';

const reducer = {
    auth: authReducer,
    orders: orderReducer,
    dishes: dishReducer,
    dashboard: dashboardReducer,
    categories: categoryReducer,
};

export const store = configureStore({
    reducer
});