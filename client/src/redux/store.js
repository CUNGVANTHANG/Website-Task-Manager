import { configureStore } from '@reduxjs/toolkit'; // configureStore dùng để tạo Redux store
import authReducer from './slices/authSlide'; // authReducer quản lý trạng thái xác thực người dùng
import { apiSlice } from './slices/apiSlice'; // apiSlice logic liên quan đến API

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true, // Bật chế độ phát triển của Redux
});

export default store;
