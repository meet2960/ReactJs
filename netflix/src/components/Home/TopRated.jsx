import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getLatestMovies } from "../../reducers/home/action";
import SmallCard from "../Common/SmallCard";
const TopRated = () => {
  const dispatch = useDispatch();
  const { topRated } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getLatestMovies());
  }, []);

  return (
    <div className="container mt-10 text-white">
      <h3 className="text-4xl px-3 font-semibold mb-5">Top Rated</h3>
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          {topRated &&
            topRated.length !== 0 &&
            topRated.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <SmallCard items={items} index={index} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
