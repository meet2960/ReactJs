import { createSlice } from "@reduxjs/toolkit";
const initialStateValues = {
  formFields: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: initialStateValues,
  reducers: {
    // ! For InputField
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
    // ! For DropDown Button
    handleAddSelectField: (state, action) => {
      state.formFields.push({
        category: "selectField",
        name: "dropdown",
        type: "dropdown",
        label: "",
        options: [],
      });
    },
    handleAddSelectedOptionField: (state, action) => {
      state.formFields[action.payload.index].options = [
        ...state.formFields[action.payload.index].options,
        action.payload.value,
      ];
    },
    handleDeleteSelectedOptionField: (state, action) => {
      state.formFields[action.payload.index].options.pop();
    },
    // ! For RadioButton Fields
    handleAddRadioField: (state, action) => {
      state.formFields.push({
        category: "radioField",
        type: "radio",
        label: "",
        name: "",
        options: [],
      });
    },
    handleAddRadioOptionField: (state, action) => {},
    // !To Delete Field based on its Index
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
  handleAddSelectField,
  handleAddSelectedOptionField,
  handleDeleteSelectedOptionField,
  handleAddRadioField,
} = formSlice.actions;
