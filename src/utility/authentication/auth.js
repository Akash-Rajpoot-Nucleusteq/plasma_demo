import { Navigate } from "react-router";
import {
  CLIENT_MANAGER,
  EMPLOYEE,
  MANAGER,
  RECRUITER,
  RECRUITER_MANAGER,
} from "../../assets/common/constants";

export const doLogin = (data) => {
  if (determineUserRole(data.email) !== 'Unknown Role') {
    let userData = { ...data, role: determineUserRole(data.email) };
    localStorage.setItem("data", JSON.stringify(userData));
    return true;
  } else {
    return false;
  }
};

export const determineUserRole = (email) => {
  if (email === "recruiter.manager@nucleusteq.com") {
    return RECRUITER_MANAGER;
  } else if (email === "recruiter@nucleusteq.com") {
    return RECRUITER;
  } else if (email === "manager@nucleusteq.com") {
    return MANAGER;
  } else if (email === "client@nucleusteq.com") {
    return CLIENT_MANAGER;
  } else if (email === "employee@nucleusteq.com") {
    return EMPLOYEE;
  } else {
    return "Unknown Role";
  }
};

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data === null) {
    return false;
  } else {
    return true;
  }
};

export const doLogout = () => {
  localStorage.removeItem("data");
};

export const getCurrentUserDetails = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return undefined;
  }
};
