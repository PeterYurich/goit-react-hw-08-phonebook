import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, deleteContact, addContact } from "./contactsOperations";

const handlePending = state => {
    // console.log('contacts.rejected')
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
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
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,

        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,


        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload)
        },
        [addContact.rejected]: handleRejected,

    }
})

export const contactsReducer = contactsSlice.reducer;