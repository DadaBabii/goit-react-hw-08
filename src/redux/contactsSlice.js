import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectContacts, selectNameFilter } from "./selectors";

const contacts_INITIAL_STATES = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: contacts_INITIAL_STATES,
  // Об'єкт редюсерів

  extraReducers: (builder) => {
    builder

      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// selectFilteredContacts;
// selectContacts;
//   const filteredContacts = visibleContacts.filter((item) =>
//     item.name.toLowerCase().includes(selectNameFilter.toLowerCase())

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (visibleContacts, nameFilter) => {
    return visibleContacts.filter((item) =>
      item.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
