import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";
import { Login } from "./views/Login";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
