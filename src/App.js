import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import UserProvider from "./global/UserContext";
import Profile from "./pages/Profile";
import Verify from "./pages/Verify";
import Auth from "./components/Auth";
import Verification from "./components/Verification";
import PreAuth from "./components/PreAuth";
import Sell from "./pages/Sell";

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;