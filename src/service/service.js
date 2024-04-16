import axios from "axios";
import { BASE_URL } from "./URLs";

export const postRequest = async (
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
            withCredentials: true,
        })
        .then((res) => {
            if (res?.status === 200 || res?.status === 201) {
                succesCallback(res);
            } else {
                throw new Error("Invalid response status: " + response?.status);
            }
        })
        .catch((error) => {
            errorCallback(error);
        });
};

export const getRequest = async (api, headers, succesCallback, errorCallback) => {
    axios
        .get(BASE_URL + api, {
            headers: {
                "Content-Type": "application/json",
                username: headers,
            },
            withCredentials: true,
        })
        .then((res) => {
            if (res?.status === 200) {
                succesCallback(res);
            } else {
                throw new Error("Invalid response status: " + response?.status);
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
            withCredentials: true,
        })
        .then((res) => {
            if (res?.status === 200 || res?.status === 204) {
                succesCallback(res);
            } else {
                throw new Error("Invalid response status: " + response?.status);
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
            withCredentials: true,
        })
        .then((res) => {
            if (res?.status === 200 || res?.status === 204) {
                successCallback(res);
            } else {
                throw new Error("Invalid response status: " + response?.status);
            }
        })
        .catch((error) => {
            errorCallback(error);
        });
};