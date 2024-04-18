import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestAddContact, requestContacts, requestDeleteContact } from "../services/api";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const data = await requestContacts();
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const data = await requestAddContact(contact);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const data = await requestDeleteContact(contactId);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
