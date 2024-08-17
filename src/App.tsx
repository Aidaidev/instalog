import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPass";
import ResetPassword from "./components/Auth/ResetPass";
import Profile from "./components/Auth/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <div className="header-nav">
            <Link className="link" to="/login">
              Войти
            </Link>

            <Link className="link" to="/register">
              Регистрация
            </Link>
          </div>
          <div className="">
            <Profile />
          </div>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
