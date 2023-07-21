import React, { useState } from "react";
const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const generatePassword = (checkboxData, length) => {
    let charset = "",
      generatedPassword = "";
    const selectedOption = checkboxData.filter((items, index) => items.state);
    if (selectedOption.length === 0) {
      setErrorMsg("Select atleast one Option");
      setPassword("");
      return;
    }
    selectedOption.forEach((items) => {
      switch (items.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;

        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Include Numbers":
          charset += "0123456789";
          break;

        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;

        default:
          break;
      }
    });
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    console.log("Random Password", generatedPassword);
    setPassword(generatedPassword);
    setErrorMsg("");
  };
  return { password, errorMsg, generatePassword };
};

export default usePasswordGenerator;
