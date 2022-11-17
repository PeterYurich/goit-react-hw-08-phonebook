import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, deleteContact, addContact } from "./contactsOperations";

const handleRejected = (state, action) => {
    state.error = action.payload;
    state.items = [];
    state.status = null;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        error: null,
        status: null
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.status = "fetching";
        },
        [fetchContacts.fulfilled](state, { payload }) {
            state.error = null;
            state.items = payload;
            state.status = null;
        },
        [fetchContacts.rejected]: handleRejected,

        [deleteContact.pending](state, { payload }) {
            console.log(payload)
        },
        [deleteContact.pending](state, action) {
            state.status = `${action.meta.arg}`
        },
        [deleteContact.fulfilled](state, { payload }) {
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === payload.id);
            state.items.splice(index, 1);
            state.status = null;
        },
        [deleteContact.rejected]: handleRejected,

        [addContact.pending](state) {
            state.status = "adding";
        },
        [addContact.fulfilled](state, { payload }) {
            state.error = null;
            state.items.push(payload)
            state.status = null;
        },
        [addContact.rejected]: handleRejected,

    }
})

export const contactsReducer = contactsSlice.reducer;