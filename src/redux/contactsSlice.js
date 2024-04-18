import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: "filters",
    initialState: {
        items: [],
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
