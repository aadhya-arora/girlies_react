import React, { useState } from "react";
import "./signup.css";
import VideoFile from "./backgrounds/NEELE NEELE AMBAR PE.mp4";
import Girlies from "./main/Girlies.png";
import Necklace from "./main/newcklace.png";
import Nonu from "./main/nonu.jpg";
import Jewellery from "./main/jewellery.jpg";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    sign_as: "admin",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePhone = () => {
    if (formData.phone.length !== 10) {
      setError("Phone Number must be 10 digits.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone()) return;

    try {
      const res = await fetch("http://localhost:5100/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Network error");
      const data = await res.json();

      alert(data.message);
      if (data.redirect) {
        window.location.href = data.redirect;
      }
    } catch (err) {
      console.error("❌ Signup failed:", err);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="page-wrapper">
      <video autoPlay muted loop id="backvid">
        <source src={VideoFile} type="video/mp4" />
      </video>

      <div className="signupform-container">
        <form
          onSubmit={handleSubmit}
          id="signup-form"
          style={{ borderRadius: "30px" }}
        >
          <div className="login-2">
            <p id="title1">SIGNUP</p>
            <div className="name3">
              <div id="FIRSTNAME">
                <p className="p">
                  <b>Name</b>
                </p>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div id="LASTNAME">
                <p className="p">
                  <b>Email</b>
                </p>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="text"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <p className="phone">
              <b>Phone Number</b>
            </p>
            <input
              type="tel"
              placeholder="9027xxxxxx"
              id="input"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 10);
                handleChange(e);
              }}
              onBlur={validatePhone}
              required
            />

            {error && (
              <div id="error" className="error-message">
                {error}
              </div>
            )}

            <p className="pass">
              <b>Password</b>
            </p>
            <input
              type="password"
              placeholder="Enter your Password"
              className="email-1"
              name="password"
              required
              maxLength="8"
              minLength="8"
              value={formData.password}
              onChange={handleChange}
            />

            <p className="sign_as">
              <b>Sign Up as</b>
            </p>
            <select
              id="sign_as"
              name="sign_as"
              value={formData.sign_as}
              onChange={handleChange}
            >
              <option value="admin">Admin</option>
              <option value="delivery">Delivery Partner</option>
              <option value="buyer">Buyer</option>
            </select>

            <br />
            <button id="animated-button" type="submit">
              <svg viewBox="0 0 24 24" className="arr-2">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">
                <b>SIGNUP</b>
              </span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>

            <br />
            <span className="eveee">
              Already have an account?
              <Link to="/login" style={{ textDecoration: "none" }}>
                <b>LOGIN</b>
              </Link>
            </span>
          </div>
        </form>

        <div id="carousel">
          <div className="carousel-track">
            <img src={Girlies} alt="Girlies" />
            <img src={Necklace} alt="Necklace" />
            <img src={Nonu} alt="Nonu" />
            <img src={Jewellery} alt="Jewellery" />
            <img src={Girlies} alt="Girlies" />
            <img src={Necklace} alt="Necklace" />
            <img src={Nonu} alt="Nonu" />
            <img src={Jewellery} alt="Jewellery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
