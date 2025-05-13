import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./images/undraw_empty-cart_574u.png";
import "./wishlist.css";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  // Dropdown setup
  useEffect(() => {
    const dropdown = document.querySelector(".dropdown4");
    const dropbtn = dropdown.querySelector(".dropbtn4");

    const handleDropdownClick = (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    };

    const handleDocumentClick = (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    };

    dropbtn.addEventListener("click", handleDropdownClick);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      dropbtn.removeEventListener("click", handleDropdownClick);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Remove from wishlist
  const handleRemove = (indexToRemove) => {
    const updatedWishlist = wishlistItems.filter((_, i) => i !== indexToRemove);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Move to cart
  const handleMoveToCart = async (item, index) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = cart.some(
      (cartItem) => cartItem.name === item.name
    );

    if (!isAlreadyInCart) {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      try {
        await fetch("http://localhost:5100/cart/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        });
      } catch (err) {
        console.error("Failed to add to DB:", err);
      }
    }

    handleRemove(index);
    alert(`${item.name} moved to cart!`);
  };

  return (
    <div className="wishlist-format">
      <nav className="header4">
        <div className="dropdown4">
          <button className="dropbtn4">
            <span className="material-symbols-outlined">Menu</span>
          </button>
          <div className="dropdown-content4">
            <a href="/">Home</a>
            <a href="/Accessories">Accessories</a>
            <a href="/sunglasses">Sunglasses</a>
            <a href="/frag">Fragrance</a>
          </div>
        </div>

        <div className="header-text4">Wishlist</div>

        <a className="login4" href="/help">
          <span className="material-symbols-outlined">person</span>
          <div className="tooltip4">
            <div className="triangle4"></div>
            <div className="content-box4">Contact</div>
          </div>
        </a>

        <a className="home4" href="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
          <div className="tooltip4">
            <div className="triangle4"></div>
            <div className="content-box4">Cart</div>
          </div>
        </a>

        <a className="home4" href="/">
          <span className="material-symbols-outlined">home</span>
          <div className="tooltip4">
            <div className="triangle4"></div>
            <div className="content-box2">Home</div>
          </div>
        </a>
      </nav>

      {wishlistItems.length === 0 ? (
        <>
          <div className="empty41">
            <img src={EmptyCart} alt="Empty Wishlist" />
            <p className="empty_text41">
              Your wishlist looks a little too empty right now
              <br />
              <br />
              Don’t leave it hanging like that!
              <br />
              Start adding your favorite items 😉
              <br />
              <br />
              Tap "Start Shopping" and make it yours! 🛍️
            </p>
          </div>

          <button className="go_cart4" onClick={() => navigate("/Accessories")}>
            <span> Start Shopping </span>
          </button>
        </>
      ) : (
        <div className="wishlist-container">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-card">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price} INR</p>
                <button
                  className="remove-wishlist"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
                <br />
                <button
                  className="move-to-cart"
                  onClick={() => handleMoveToCart(item, index)}
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
