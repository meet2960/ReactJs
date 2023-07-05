import React, { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks";
import { Row, Col } from "reactstrap";
import { setCityValue } from "../Redux/current/currentSlice";
import { fetchCurrentWeather } from "../Redux/current/action";
import { RootState } from "../Redux/store";

const InputWeather = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const addCity = (e: React.SyntheticEvent) => {
    // console.log("E", e);
    if (city.length > 3) {
      dispatch(setCityValue(city));
      dispatch(fetchCurrentWeather(city));
    } else {
      console.log("Please enter city");
    }
  };
  /*   const { weatherData, actionsLoading } = useAppSelector((state) => ({
    weatherData: state.currentWeather.weatherData,
    actionsLoading: state.common.actionsLoading,
  })); */
  const weatherData = useAppSelector(
    (state: RootState) => state.currentWeather.weatherData
  );
  console.log("Weather info", weatherData);
  return (
    <section>
      <Row className="mt-5">
        <Col lg={6}>
          <input
            type="text"
            placeholder="Enter City"
            className="form-control"
            value={city}
            onChange={handleChange}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={(e) => addCity(e)}
          >
            Add City
          </button>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <h3>Details Appear Here</h3>
        {/* {weatherInfo?.name} */}
        {/* <h3>{actionsLoading ? "HI" : "Loader"}</h3> */}
        {weatherData && weatherData?.name}
      </Row>
    </section>
  );
};

export default InputWeather;
