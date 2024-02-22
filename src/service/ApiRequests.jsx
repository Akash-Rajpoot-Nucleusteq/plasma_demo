import axios from "axios";
import { BASE_URL } from "./URLs";

export function postRequest(url, data, header) {
    return axios.post(BASE_URL + url, data, header);
}
export function getRequest(url) {
    return axios.get(BASE_URL + url);
}