import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, deleteContact, addContact } from "./contactsOperations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.items = [];
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [fetchContacts.rejected]: handleRejected,

        [deleteContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === payload.id);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,


        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload)
        },
        [addContact.rejected]: handleRejected,

    }
})

export const contactsReducer = contactsSlice.reducer;