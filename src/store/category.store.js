import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

import CategoryService from "../services/category.service";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI) => {
        try {
            const response = await CategoryService.getCategories();
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            if (error?.response?.status === 401) {
                toast.error('Có lỗi xảy ra, vui lòng thử lại!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const createCategory = createAsyncThunk(
    "categories/createCategory",
    async ({ name, desc }, thunkAPI) => {
        try {
            const response = await CategoryService.createCategory({ name, desc });
            toast.success('Tạo mới thành công!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            if (error?.response?.status === 401) {
                toast.error('Có lỗi xảy ra, vui lòng thử lại!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const updateCategory = createAsyncThunk(
    "categories/updateCategory",
    async ({ id, name, desc }, thunkAPI) => {
        try {
            const response = await CategoryService.updateCategory({ id, name, desc });
            toast.success('Cập nhật thành công!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            if (error?.response?.status === 401) {
                toast.error('Có lỗi xảy ra, vui lòng thử lại!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
);


const initialState = {
    categories: [],
    loading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.categories = action.payload;
            state.loading = false;
        },
        [getCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [updateCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [updateCategory.fulfilled]: (state, action) => {
            const index = state.categories.findIndex(c => c.id === action.payload.id);
            state.categories[index] = action.payload;
            state.loading = false;
        },
        [updateCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [createCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [createCategory.fulfilled]: (state, action) => {
            state.categories.push(action.payload);
            state.loading = false;
        },
        [createCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

const { reducer } = dashboardSlice;
export default reducer;