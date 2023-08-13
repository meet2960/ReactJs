import axios from "axios";

export function getRequest(url) {
  // console.log("Axios Calling");
  return axios.get(url);
}

export function postRequest(url, payload, headers) {
  console.log("Inside Axios PostRequest");
  return axios.post(url, payload, headers);
}