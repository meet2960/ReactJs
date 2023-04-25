import { createSlice } from "@reduxjs/toolkit";
const initialStateValues = {
  formFields: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: initialStateValues,
  reducers: {
    handleAddInputField: (state, action) => {
      state.formFields.push({
        category: "inputfield",
        type: "text",
        data: "",
        label: "",
        placeholder: "",
        name: "textBox",
        required: true,
      });
    },
    handleInputFieldsChange: (state, action) => {
      // console.log(action.payload);
      state.formFields[action.payload.index][action.payload.name] =
        action.payload.value;
    },
    handleDeleteFeilds: (state, action) => {
      state.formFields.splice(action.payload.index, 1);
    },
  },
});
export const formReducer = formSlice.reducer;
export const {
  handleAddInputField,
  handleInputFieldsChange,
  handleDeleteFeilds,
} = formSlice.actions;
