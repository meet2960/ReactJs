import axios from "../../api/axios";

export function getRequest(url) {
  return axios.get(url);
}

export function postRequest(url, payload, headers = {}) {
  return axios.post(url, payload, headers);
}

export function getRequestWithParams(url, queryParams) {
  return axios.get(url, {
    params: queryParams,
  });
}

export function patchRequest(url, payload, headers = {}) {
  return axios.patch(url, payload, headers);
}

export function deleteRequest(url) {
  return axios.delete(url);
}

export function deleteRequestWithParams(url, payload) {
  return axios.delete(url, { data: payload });
}
