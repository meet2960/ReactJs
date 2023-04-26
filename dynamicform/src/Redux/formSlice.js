import { createSlice } from "@reduxjs/toolkit";
const initialStateValues = {
  formFields: [],
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState: initialStateValues,
  reducers: {
    // ! For InputField
    handleAddInputField: (state, action) => {
      state.formFields.push({
        category: "inputField",
        type: "text",
        data: "",
        label: "",
        placeholder: "",
        name: "textBox",
        required: true,
      });
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
    // ? Common Functions
    // ! Input for all the input based fields
    handleInputFieldsChange: (state, action) => {
      // console.log(action.payload);
      state.formFields[action.payload.index][action.payload.name] =
        action.payload.value;
    },
    // ! Add Options in DropDown and Radiobutton
    handleAddInputOptionField: (state, action) => {
      state.formFields[action.payload.index].options = [
        ...state.formFields[action.payload.index].options,
        action.payload.value,
      ];
    },
    // ! Delete Options from DropDown and RadioButton
    handleDeleteSelectedOptionField: (state, action) => {
      state.formFields[action.payload.index].options.pop();
    },
    // !To Delete Field based on its Index
    handleDeleteFeilds: (state, action) => {
      state.formFields.splice(action.payload.index, 1);
    },
    // ! Take Generated Form Data
    handleFormDataChange: (state, action) => {
      console.log("Inside Form Data Change");
    },
  },
});
export const formReducer = formSlice.reducer;
export const {
  handleAddInputField,
  handleInputFieldsChange,
  handleDeleteFeilds,
  handleAddSelectField,
  handleDeleteSelectedOptionField,
  handleAddRadioField,
  handleAddInputOptionField,
  handleFormDataChange,
} = formSlice.actions;
