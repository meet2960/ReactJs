import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <header className="fixed z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-2 items-center py-8">
            <div>
              <figure className="w-[150px]">
                <img
                  src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg"
                  alt=""
                  className=""
                />
              </figure>
            </div>
            <div className="flex justify-end"></div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
