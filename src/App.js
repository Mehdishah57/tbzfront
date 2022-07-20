import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CategoryProvider from "./global/CategoryContext";
import UserProvider from "./global/UserContext";
import Verification from "./components/Verification";
import PreAuth from "./components/PreAuth";
import Auth from "./components/Auth";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import CountryProvider from "./global/CountryContext";

function App() {
  return (
    <UserProvider>
      <CategoryProvider>
        <CountryProvider>
          <Navbar />
          <Routes>
            <Route path="/profile" element={<Verification Component={Profile} />} />
            <Route path="/sell" element={<Verification Component={Sell} />} />
            <Route path="/signup" element={<PreAuth Component={Signup} />} />
            <Route path="/login" element={<PreAuth Component={Login} />} />
            <Route path="/verify" element={<Auth Component={Verify} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </CountryProvider>
      </CategoryProvider>
    </UserProvider>
  );
}

export default App;