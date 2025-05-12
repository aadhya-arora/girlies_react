import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./address.css";

const Checkout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    house: "",
    area: "",
    landmark: "",
    city: "",
    pin: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const username = localStorage.getItem("username");

    if (!username) {
      alert("User not logged in.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5100/save-address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, name: username }),
      });

      const result = await response.json();
      alert(result.message);
      navigate("/checkout"); // optional
    } catch (error) {
      console.error("Error saving address:", error);
      alert("Failed to save address.");
    }
  };

  return (
    <div>
      <nav className="navCheck">
        <span
          className="material-symbols-outlined arrow"
          onClick={() => navigate("/cart")}
        >
          arrow_back
        </span>
        <div className="headingCheck">Checkout</div>
      </nav>

      <div className="details-boxCheck">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Name</label>
          <input
            type="text"
            id="nameCheck"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /> */}

          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobileCheck"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />

          <label htmlFor="house">
            Flat, House No., Building, Company, Apartment
          </label>
          <input
            type="text"
            id="houseCheck"
            name="house"
            value={formData.house}
            onChange={handleChange}
          />

          <label htmlFor="area">Area, Street, Sector, Village</label>
          <input
            type="text"
            id="areaCheck"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />

          <label htmlFor="landmark">Landmark</label>
          <input
            type="text"
            id="landmarkCheck"
            name="landmark"
            placeholder="E.g. near apollo hospital"
            value={formData.landmark}
            onChange={handleChange}
          />

          <div className="city-pin-row">
            <div className="input-group">
              <label htmlFor="city">Town/City</label>
              <input
                type="text"
                id="cityCheck"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="pin">Pincode</label>
              <input
                type="text"
                id="pinCheck"
                name="pin"
                placeholder="6-digit Pincode"
                value={formData.pin}
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="state">State</label>
          <input
            type="text"
            id="stateCheck"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />

          <button type="submit" className="buttonCheck">
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
