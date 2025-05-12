import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VideoFile from "./backgrounds/NEELE NEELE AMBAR PE.mp4";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5100/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("username", formData.username);
        alert(data.message);
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="page-wrapper">
      <video autoPlay muted loop id="backvid">
        <source src={VideoFile} type="video/mp4" />
      </video>
      <div className="login-form">
        <header className="header">LOGIN</header>
        <form onSubmit={handleSubmit}>
          <div className="login-1">
            <p className="name-1">Username</p>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="email"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <p className="name-1">Password</p>
            <input
              type="password"
              placeholder="Enter your Password"
              className="email"
              maxLength="8"
              minLength="8"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <br />
            <button className="animated-button2" type="submit">
              <span className="text2">Login</span>
            </button>

            <span className="signup-text">
              Don’t have an account?
              <b>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  {" "}
                  SIGNUP
                </Link>
              </b>
            </span>
          </div>
        </form>

        <div id="error1" style={{ color: "red", textAlign: "center" }}>
          {error}
        </div>
      </div>
    </div>
  );
};

export default Login;
