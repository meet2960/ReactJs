import axios from "axios";

export function getRequest(url) {
    console.log("Axios Calling");
    return axios.get(url);
}