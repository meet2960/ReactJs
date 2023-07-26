// ? Tic Tac Toe Game

import React, { useState } from "react";
const Game = () => {
  const displayBox = Array(9).fill(0);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState();
  function handleClick(index) {
    // * if squares[index] have data, don't do anything
    if (squares[index] || findWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    if (nextTurn) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setNextTurn(!nextTurn);
    console.log("Original Array : ", squares);
    console.log("Dummy Array : ", nextSquares);
  }

  const findWinner = (squares) => {
    const checkMatch = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < checkMatch.length; i++) {
      const [a, b, c] = checkMatch[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const winner = findWinner(squares);
  // * Check every element of array, if all elements in array are not null then set draw
  const draw = squares.every((items, index) => items !== null) && !winner;
  let status;

  
  if (winner) {
    status = "Winner: " + winner;
  } else if (draw) {
    status = "Draw";
  }

  return (
    <React.Fragment>
      {/* <div className="container-fluid bg px-0">
        <div className="drop">
          <div className="container d-flex justify-content-center align-items-center vh-100">
            <div>
              <h1 className="text-center mb-4">Tic Tac Toe</h1>
              <div className="row justify-content-center">
                <div className="col-lg-5 bs p-5 rounded-3">
                  <div className="container">
                    <div className="row g-3">
                      {displayBox.map((items, index) => {
                        return (
                          <div
                            className="col-lg-4 d-flex justify-content-center"
                            key={index}
                          >
                            <Box
                              value={squares[index]}
                              onSquareClick={() => handleClick(index)}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <h1 className="text-center mt-3 mb-0">{status}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid px-0 tic-tac">
        <div className="back-bg">
          <div>
            <div className="sub-heading">Current Player : </div>
            <div className="box-layout my-5">
              {displayBox &&
                displayBox.map((items, index) => (
                  <React.Fragment>
                    <div
                      id={`box${index + 1}`}
                      className="box"
                      key={index}
                      value={squares[index]}
                      onClick={() => handleClick(index)}
                    >
                      {squares[index]}
                    </div>
                  </React.Fragment>
                ))}
            </div>
            <div className="sub-heading">{status}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
