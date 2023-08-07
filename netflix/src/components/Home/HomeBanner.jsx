import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTrending } from "../../reducers/home/action";
import { textTruncate } from "../../utils/textTruncte";
const HomeBanner = () => {
  const dispatch = useDispatch();
  const { currentTrending } = useSelector((state) => state.home);
  const randomTitleIndex = Math.round(
    Math.random() * currentTrending.length - 1
  );
  useEffect(() => {
    dispatch(getCurrentTrending());
  }, [dispatch]);
  return (
    <React.Fragment>
      <div
        className="home__banner flex justify-center items-center"
        style={{
          backgroundColor: `rgba:(0,0,0,0.5)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${currentTrending[randomTitleIndex]?.backdrop_path}")`,
        }}
      >
        <div className="fade">
          <div className="container">
            <div className="details w-full lg:w-2/3">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-7xl mb-5">
                {currentTrending[randomTitleIndex]?.title ||
                  currentTrending[randomTitleIndex]?.name ||
                  currentTrending[randomTitleIndex]?.original_name}
              </h1>
              <div className="mb-5">
                <button className="btn-secondary md:py-4 md:px-8 me-3">
                  Play
                </button>
                <button className="btn-secondary md:py-4 md:px-8">
                  My List
                </button>
              </div>
              <p className="text-justify text-sm md:text-lg">
                {textTruncate(currentTrending[randomTitleIndex]?.overview, 160)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBanner;
