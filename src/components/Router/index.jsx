import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import RegistrationForm from "../forms/RegisterForm";
import Booking from "../pages/Booking";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Route>
    </Routes>
  );
};

export default Router;