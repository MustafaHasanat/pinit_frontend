import { createSlice, configureStore } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: { sidebarIsOpened: false },
    reducers: {
        setSidebarIsOpen(state, action) {
            state.sidebarIsOpened = action.payload;
        },
    },
});

const navbarSlice = createSlice({
    name: "navbar",
    initialState: { searchTerm: "" },
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        sidebarReducer: sidebarSlice.reducer,
        navbarReducer: navbarSlice.reducer,
    },
});

export const sidebarActions = sidebarSlice.actions;
export const navbarActions = navbarSlice.actions;
export default store;
