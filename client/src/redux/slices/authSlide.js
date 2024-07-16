import { createSlice } from '@reduxjs/toolkit'; // createSlice tạo 1 slice cho xác thực

// Trạng thái ban đầu user lấy từ localStorage.
const initialState = {
    user: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,

    isSidebarOpen: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            // Lưu thông tin người dùng vào localStorage
            state.user = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            // Xóa thông tin người dùng khỏi localStorage
            state.user = null;
            localStorage.removeItem('userInfo');
        },
        setOpenSidebar: (state, action) => {
            // Trạng thái mở/đóng sidebar
            state.isSidebarOpen = action.payload;
        },
    },
});

export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;

export default authSlice.reducer;
