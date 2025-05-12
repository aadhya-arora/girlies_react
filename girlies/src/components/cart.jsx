import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const itemsFromAccessories =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemsFromWishlist = JSON.parse(localStorage.getItem("cart")) || [];

    const combined = [...itemsFromAccessories, ...itemsFromWishlist];

    const uniqueItems = combined.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.name === item.name)
    );

    setCartItems(uniqueItems);
  }, []);

  useEffect(() => {
    const subtotalCalc = cartItems.reduce((sum, item) => sum + item.price, 0);
    const taxCalc = Math.round(subtotalCalc * 0.1); // 10% tax
    setSubtotal(subtotalCalc);
    setTax(taxCalc);
    setTotal(subtotalCalc + taxCalc);
  }, [cartItems]);

  const handleRemoveItem = async (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);

    // Update both storages to keep them clean
    const oldCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const oldWishlistCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemToRemove = cartItems[indexToRemove];

    const newCartItems = oldCartItems.filter(
      (item) => item.name !== itemToRemove.name
    );
    const newWishlistCart = oldWishlistCart.filter(
      (item) => item.name !== itemToRemove.name
    );

    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    localStorage.setItem("cart", JSON.stringify(newWishlistCart));

    // Optional: notify backend
    await fetch("http://localhost:5100/cart/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemToRemove),
    });
  };

  return (
    <>
      <nav className="header8">
        <div className="dropdown8">
          <button className="dropbtn8">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="dropdown-content8">
            <a href="/">Home</a>
            <a href="/accessories">Accessories</a>
            <a href="/sunglasses">Sunglasses</a>
            <a href="/frag">Fragnance</a>
          </div>
        </div>
        <div className="header-text8">Girlies</div>
        <a className="login8" href="/help">
          <span className="material-symbols-outlined">person</span>
          <div className="tooltip">
            <div className="triangle"></div>
            <div className="content-box">Contact</div>
          </div>
        </a>
        <a className="home8" href="/wishlist">
          <span className="material-symbols-outlined">favorite</span>
          <div className="tooltip">
            <div className="triangle"></div>
            <div className="content-box2">Wishlist</div>
          </div>
        </a>
        <a className="home8" href="/">
          <span className="material-symbols-outlined">home</span>
          <div className="tooltip">
            <div className="triangle"></div>
            <div className="content-box2">Home</div>
          </div>
        </a>
      </nav>

      <header className="navigation8">
        <a href="/accessories" className="goto">
          Accessories
        </a>
        <a href="/frag" className="goto">
          Fragnance & Beauty
        </a>
        <a href="/sunglasses" className="goto">
          Sunglasses & Scarves
        </a>
      </header>
      {cartItems.length === 0 && (
        <div className="bag8">
          <div className="text8">
            <h1>Shopping Bag</h1>
            <hr className="line8" />
            <h3 className="empty8">Your Shopping Bag is empty</h3>
            <h4 className="empty-login8">
              Sign in to see your previously added items
            </h4>
            <button
              className="shop"
              onClick={() => (window.location.href = "/wishlist")}
            >
              Go to Wishlist
            </button>

            <div className="gift-box">
              <div className="gift"></div>
              <p className="gift-text">
                Every purchase comes in an iconic <br />
                Blue Box crowned with a <br /> white satin ribbon
              </p>
            </div>
          </div>

          <div className="help">
            <h2 className="need-help">Need Help?</h2>
            <hr className="help-line" />
            <div className="service">
              <h3>At your service</h3>
              <p>
                We invite you to call us for assistance or provide your
                information so we can contact you.
              </p>
              <p>Call us at +91-8595405644</p>
            </div>
            <div className="service">
              <h3>Returns</h3>
              <p>
                Girlies offers complimentary return shipping for items in
                saleable condition within 7 days of purchase.
              </p>
            </div>
            <div className="service">
              <h3>Secured Transactions</h3>
              <p>
                We use secure encryption technologies when transferring and
                receiving customer information.
              </p>
            </div>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-container">
          <h1 className="Shopp">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p id="empty-cart-message">Your Shopping Cart is empty.</p>
          ) : (
            <>
              <div id="cart-items">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} width="100" />
                    <div>
                      <p>{item.name}</p>
                      <p>{item.price} INR</p>
                      <button
                        className="remove-item"
                        onClick={() => handleRemoveItem(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-summary">
                <p>
                  Subtotal: <span id="subtotal">{subtotal} INR</span>
                </p>
                <p>
                  Estimated Tax: <span id="tax">{tax} INR</span>
                </p>
                <p>
                  Estimated Total: <span id="total">{total} INR</span>
                </p>
                <button id="checkout-btn" onClick={() => navigate("/address")}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <hr className="end" />
      <footer>
        <div class="footer8">
          <div class="customer-service">
            <h4>Customer Service</h4>
            <a>Contact Us</a>
            <a>Frequently asked Questions</a>
          </div>

          <div class="our-company">
            <h4>Our Company</h4>
            <a>World Of Girlies</a>
            <a>Sustainability</a>
            <a>Website Policies</a>
            <a>Global Servicing</a>
          </div>

          <div class="masion">
            <h4>Our Masion</h4>
            <a>Corporate information</a>
            <a>Press</a>
          </div>

          <div class="date">
            <h3 class="stay">Stay Up to Date</h3>
            <div class="connect">
              <div class="set8">
                <a
                  href="https://wa.me/7626929633"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    class="fa fa-whatsapp link08"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>

              <div class="set8">
                <a
                  href="https://www.instagram.com/aadhu2708/"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    class="fa fa-instagram link28"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>

              <div class="set8">
                <a
                  href="https://www.facebook.com/profile.php?id=61550942587569"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    class="fa fa-facebook link18"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>

              <div class="set8">
                <a
                  href="https://x.com/aadhu_2708"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    class="fa fa-twitter link8"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr class="half" />

        <div class="second-half">
          <div class="subscribe">
            <p class="heading8">Subscribe To Our Newsletter</p>
            <input
              class="input-box81"
              type="email"
              placeholder="Enter your Email"
            />
            <button class="sign">Subscribe</button>
          </div>

          <iframe
            title="Cart footer"
            class="location81"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751352098304!2d76.65720287536413!3d30.51608647468947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1723729429946!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
};

export default Cart;
