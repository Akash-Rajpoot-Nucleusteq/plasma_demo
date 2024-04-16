import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./assets/css/app.css";
import "react-datepicker/dist/react-datepicker.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/lnr-icon.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./utility/Routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
