import React from "react";

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <img
            src={`/images/dice_${currentDice}.png`}
            alt="dice_image"
            className="h-auto max-w-full cursor-pointer"
            onClick={() => roleDice()}
          />
          <p className="text-center text-2xl my-3">Click on Dice to Roll</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RoleDice;
