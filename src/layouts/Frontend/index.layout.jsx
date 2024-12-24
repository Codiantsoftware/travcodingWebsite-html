import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/frontend/scss/main.scss";

function FrontendLayout() {
  return <Outlet />;
}

export default FrontendLayout;
