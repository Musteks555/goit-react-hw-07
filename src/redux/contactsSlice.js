import { createSelector, createSlice } from "@reduxjs/toolkit";

import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectContacts, selectNameFilter } from "./selectors";

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
};

const handleFulfilled = (state) => {
    state.loading = false;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "filters",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)

            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)

            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                handleFulfilled(state);
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected),
});

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, valueFilter) => {
    if (valueFilter) {
        return contacts.filter((contact) => contact.name.toLowerCase().includes(valueFilter.toLowerCase()));
    } else {
        return contacts;
    }
});

export const contactsReducer = contactsSlice.reducer;
