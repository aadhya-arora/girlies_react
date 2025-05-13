import React from "react";
import { useNavigate } from "react-router-dom";
import "./delivery.css";

const Delivery = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="del_nav">
        <a className="heading_del">Delivery</a>
        <a href="help.html" className="contact_del">
          Contact Us
        </a>
        <a href="explore.html" className="about">
          About Us
        </a>
        <a href="#" className="order">
          Orders
        </a>
      </nav>

      <div className="delivery-container">
        <div className="del_text">
          <p className="ready_text">Ready To Deliver Our Orders?</p>
          <p className="lorem_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
            <br />
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo
            <br />
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
          <button
            className="button"
            onClick={() => navigate("/deliver_orders")}
          >
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Deliver Orders</span>
            </span>
          </button>
        </div>
        <div className="boy"></div>
      </div>
    </div>
  );
};

export default Delivery;
