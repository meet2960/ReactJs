import React from "react";
import homeDice from "../assets/images/dices_home.png";
import { useNavigate } from "react-router";
const StartGame = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-3">
      <div className="flex items-center h-screen">
        <div>
          <img
            src={homeDice}
            alt="dice_img"
            className="h-auto max-w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-black text-8xl font-bold">DICE GAME</h1>
          <div className="flex justify-end mt-3">
            <button
              type="button"
              className="transition ease-in-out duration-300 box-border py-2 px-10 rounded border border-slate-950 bg-slate-950 text-white hover:bg-white hover:text-slate-900  hover:border hover:border-slate-950 "
              onClick={() => navigate("/game")}
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
