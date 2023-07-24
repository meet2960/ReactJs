import React from "react";

const TotalScore = ({ score }) => {
  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="text-black text-8xl font-semibold">{score}</h1>
        <p className="text-2xl">Total Score</p>
      </div>
    </React.Fragment>
  );
};

export default TotalScore;
