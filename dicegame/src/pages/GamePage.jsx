import React, { useState } from "react";
import TotalScore from "../components/TotalScore";
import NumberSelector from "../components/NumberSelector";
import RoleDice from "../components/RoleDice";
import Rules from "../components/Rules";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setErrorMsg("Please select any number");
      return;
    }
    const randomDiceNumber = generateRandomNumber(1, 7);
    console.log("Random Dice Number", randomDiceNumber);
    setCurrentDice((prevDice) => randomDiceNumber);

    if (selectedNumber === randomDiceNumber) {
      setScore((prevScore) => prevScore + randomDiceNumber);
    } else {
      setScore((prevScore) => prevScore - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <div className="container mx-auto px-3">
      <div className="flex items-center justify-between my-7">
        <TotalScore score={score} />
        <NumberSelector
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-12/12 md:w-8/12 lg:w-6/12 xl:w-3/12">
          <RoleDice currentDice={currentDice} roleDice={roleDice} />
          <div className="flex flex-col">
            <button
              type="button"
              className="mt-3 transition ease-in-out duration-300 box-border py-2 px-10 rounded border border-slate-950 bg-white text-slate-900 hover:bg-slate-950 hover:text-white  hover:border hover:border-slate-950 "
              onClick={() => resetScore()}
            >
              Reset
            </button>
            <button
              type="button"
              className="mt-3 transition ease-in-out duration-300 box-border py-2 px-10 rounded border border-slate-950 bg-slate-950 text-white hover:bg-white hover:text-slate-900  hover:border hover:border-slate-950"
              onClick={() => setShowRules((prevShow) => !prevShow)}
            >
              {showRules ? "Hide" : "Show"} Rules
            </button>
          </div>
        </div>
      </div>
      {showRules ? <Rules /> : null}
    </div>
  );
};

export default GamePage;
