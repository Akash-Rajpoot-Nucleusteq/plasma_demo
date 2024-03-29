import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const postRequest = (
  api,
  payloads,
  headers,
  succesCallback,
  errorCallback
) => {
  axios
    .post(BASE_URL + api, payloads, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        username: headers,
      },
    })
    .then((res) => {
      if (res?.status === 200 || res?.status === 201) {
        succesCallback(res);
      }
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export const getRequest = (api, headers, succesCallback, errorCallback) => {
  axios
    .get(BASE_URL + api, {
      headers: {
        "Content-Type": "application/json",
        username: headers,
      },
    })
    .then((res) => {
      if (res?.status === 200) {
        succesCallback(res);
      }
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export const putRequest = (
  api,
  payloads,
  headers,
  succesCallback,
  errorCallback
) => {
  axios
    .put(BASE_URL + api, payloads, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        username: headers,
      },
    })
    .then((res) => {
      if (res?.status === 200 || res?.status === 204) {
        succesCallback(res);
      }
    })
    .catch((error) => {
      errorCallback(error);
    });
};
export const deleteRequest = (api, headers, successCallback, errorCallback) => {
  axios
    .delete(BASE_URL + api, {
      headers: {
        "Content-Type": "application/json",
        username: headers,
      },
    })
    .then((res) => {
      if (res?.status === 200 || res?.status === 204) {
        successCallback(res);
      }
    })
    .catch((error) => {
      errorCallback(error);
    });
};
