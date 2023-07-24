import React, { useState } from "react";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  errorMsg,
  setErrorMsg,
}) => {
  const numberArray = [1, 2, 3, 4, 5, 6];
  const handleNumberSelect = (items) => {
    setSelectedNumber(items);
    setErrorMsg("");
  };
  return (
    <div>
      <div className="flex">
        {numberArray &&
          numberArray.map((items, index) => (
            <React.Fragment key={index}>
              <div
                className={`h-20 w-20 border-2 mx-2 border-slate-950 text-2xl grid place-items-center font-semibold cursor-pointer ${
                  items === selectedNumber ? "bg-slate-800 text-white" : ""
                } `}
                onClick={() => handleNumberSelect(items)}
              >
                {items}
              </div>
            </React.Fragment>
          ))}
      </div>
      <div className="flex items-center justify-between mt-5">
        <p className="text-red-500 text-end text-xl">{errorMsg}</p>
        <p className="text-xl text-end">Select Number</p>
      </div>
    </div>
  );
};

export default NumberSelector;
