import React from "react";

const Rules = () => {
  const rulesList = [
    "First Select any Number from the list.",
    "Now Click on Dice Image.",
    "After clicking on Dice image, if the selected number is equal to Dice Number then you will get same points as of Dice.",
    "But if your guess went wrong then two point will be dedcuted on each wrong guess.",
  ];
  return (
    <React.Fragment>
      <div className="bg-slate-100 p-10 my-5 rounded">
        <h3 className="text-xl mb-3 font-semibold">How to Play Dice Game ?</h3>
        <ul className="list-decimal text-lg">
          {rulesList &&
            rulesList.map((items, index) => (
              <React.Fragment key={index}>
                <li>{items}</li>
              </React.Fragment>
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Rules;
