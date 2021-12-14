import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

import DashboardService from "../services/dashboard.service";

export const getStatistics = createAsyncThunk(
    "dashboard/getStatistics",
    async (_, thunkAPI) => {
        try {
            const response = await DashboardService.getStatistics();
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
    statistics: null,
    loading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    extraReducers: {
        [getStatistics.pending]: (state, action) => {
            state.loading = true;
        },
        [getStatistics.fulfilled]: (state, action) => {
            state.statistics = action.payload;
            state.loading = false;
        },
        [getStatistics.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

const { reducer } = dashboardSlice;
export default reducer;