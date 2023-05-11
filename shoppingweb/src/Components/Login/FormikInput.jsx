import React from "react";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control"];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  if (touched && !errors) {
    classes.push("is-valid");
  }
  return classes.join(" ");
};

export function FormikInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  type = "text",
  isRequired = false,
  extraText,
  ...props
}) {
  return (
    <React.Fragment>
      <input
        type={type}
        className={getFieldCSSClasses(touched[field.name], errors[field.name])}
        {...field}
        {...props}
      />
    </React.Fragment>
  );
}
