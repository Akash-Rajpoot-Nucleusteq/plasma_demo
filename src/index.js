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
import AuthProvider, { useAuth } from "./components/routing/AuthProvider.jsx";
import { router } from "./utility/Routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
