import weatherApi from "./weatherApi";
import { weatherSlice } from "./currentSlice";
import { startCall, endCall, catchError } from "../common/commonSlice";
const { actions } = weatherSlice;
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const fetchCurrentWeather = (payload: any) => (dispatch: any) => {
  dispatch(startCall({}));
  return weatherApi
    .get(`weather?q=${payload}&appid=${API_KEY}&units=metric`)
    .then((response: any) => {
      console.log("Response Object is", response);
      if (response.status === 200) {
        console.log("City Found");
        dispatch(actions.setWeather(response.data));
        dispatch(endCall({}));
        return response;
      }
      dispatch(catchError({ message: response.data.message }));
      dispatch(endCall({}));
      return response;
    })
    .catch((e) => {
      dispatch(actions.setCityNotFoundError(e.response.data.message));
      dispatch(catchError({ message: e.response.data.message }));
      // dispatch(endCall({}));
      console.log("Error in City Found", e);
    });
};
