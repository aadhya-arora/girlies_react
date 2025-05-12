import React, { useState } from "react";
import "./acc.css";
import Vid from "./backgrounds/acc.webm";
import { Link } from "react-router-dom";
import n2 from "./Neckpieces/n2.jpeg";
import w1 from "./watches/w1.webp";
import b1 from "./Bags/b1.jpg";
import e1 from "./Earrings/e1.webp";
import n1 from "./Neckpieces/n1.jpeg";
import n9 from "./Neckpieces/n9.png";
import n4 from "./Neckpieces/n4.jpg";
import n5 from "./Neckpieces/n5.jpg";
import n6 from "./Neckpieces/n6.webp";
import n7 from "./Neckpieces/n7.jpg";
import n8 from "./Neckpieces/n8.webp";
import w2 from "./watches/w2.webp";
import w3 from "./watches/w3.webp";
import w4 from "./watches/w4.jpg";
import w5 from "./watches/w5.webp";
import w6 from "./watches/w6.jpg";
import w7 from "./watches/w7.webp";
import w8 from "./watches/w8.webp";
const AccessoriesHeader = () => {
  const [neckExpanded, setNeckExpanded] = useState(false);
  const [watchExpanded, setWatchExpanded] = useState(false);
  const [bagExpanded, setBagExpanded] = useState(false);
  const [earExpanded, setEarExpanded] = useState(false);
  const [liked, setLiked] = useState({});

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleAddToCart = async (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    try {
      await fetch("http://localhost:5100/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error("Failed to sync item to DB:", error);
    }

    alert(`${item.name} added to cart!`);
  };

  const handleNeckExpand = () => {
    setNeckExpanded(true);
  };
  const handleNeckCollapse = () => {
    setNeckExpanded(false);
  };

  const handleEarExpand = () => {
    setEarExpanded(true);
  };
  const handleEarCollapse = () => {
    setEarExpanded(false);
  };

  const handleBagExpand = () => {
    setBagExpanded(true);
  };
  const handleBagCollapse = () => {
    setBagExpanded(false);
  };

  const handleWatchExpand = () => {
    setWatchExpanded(true);
  };
  const handleWatchCollapse = () => {
    setWatchExpanded(false);
  };
  const handleLikeToggle = (itemName) => {
    setLiked((prev) => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  const handleLike = (name, price, img) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.some((item) => item.name === name)) {
      alert(`${name} is already in your wishlist.`);
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      price,
      image: img,
    };

    wishlist.push(newItem);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(`${name} added to wishlist!`);
  };

  const handleSubscribe = () => {
    alert("You have subscribed to our newsletter successfully");
  };

  return (
    <>
      <header className="header5">
        <div className="dropdown2">
          <button className="dropbtn2">
            <span className="material-symbols-outlined"> menu </span>
          </button>
          <div className="dropdown-content2">
            <Link to="/">Home</Link>
            <a href="#">Fragnance</a>
            <a href="#">Sunglasses</a>
            <Link to="/wishlist">Wishlist</Link>
            <a href="/cart">Cart</a>
          </div>
        </div>
        <div className="intro">Accessories</div>
        <div id="search-bar"></div>
      </header>
      <div className="banner2">
        <div className="banner2-text">Discover your style</div>
      </div>
      <section className="slideshow">
        <video autoplay muted loop className="vid">
          <source src={Vid} />
        </video>
      </section>

      <div id="option">
        <div className="heading">Our Variety🎀</div>
        <br />
        <p style={{ textAlign: "center", fontSize: "19px", fontWeight: "600" }}>
          "Your Style, Your Story – Find Your Perfect Look."
        </p>

        <div className="variety">
          <a href="#neck" style={{ textDecoration: "none" }}>
            <div className="Neckpieces">
              <img src={n2} className="neck-img" />
              <p className="neckpiece-title">Neckpieces</p>
            </div>
          </a>
          <a href="#watches" style={{ textDecoration: "none" }}>
            <div className="Watches">
              <img src={w1} className="watch-img" />
              <p className="watch-title">Watches</p>
            </div>
          </a>
          <a href="#Bag" style={{ textDecoration: "none" }}>
            <div className="bags">
              <img src={b1} className="bag-img" alt="Handbag" />
              <p className="bag-title">Handbags</p>
            </div>
          </a>

          <a href="#Ear" style={{ textDecoration: "none" }}>
            <div className="earrings">
              <img src={e1} className="earring-img" />
              <p className="ear-title">Earrings</p>
            </div>
          </a>
        </div>
      </div>

      <section
        id="neck"
        style={{
          height: neckExpanded ? "1060px" : "auto",
        }}
      >
        <div className="heading-1" id="neckpieces">
          NECKPIECES
        </div>
        <div className="disp">
          <div className="display1">
            <div className="dis1">
              <span
                className={`material-symbols-outlined like ${
                  liked["Delicate Blue Neckpiece"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("Delicate Blue Neckpiece", 4200, n1);
                  handleLikeToggle("Delicate Blue Neckpiece");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="irridescent-blue-lacerta-neckpiece">
              Irridescent Blue Lacerta <br />
              Neckpiece
            </p>
            <p className="price">4,200 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Irridescent blue lacerta neckpiece",
                  price: 4200,
                  image: n1, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="display1">
            <div className="dis2">
              <span
                className={`material-symbols-outlined like ${
                  liked["beauteous-beady-neckpiece"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLikeToggle("beauteous-beady-neckpiece");
                  handleLike("beauteous-beady-neckpiece", 3200, n2);
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="beauteous-beady-neckpiece">
              Beauteous Beady <br />
              Neckpiece
            </p>
            <p className="price">3,200 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Beauteous beady neckpiece",
                  price: 3200,
                  image: n2, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="display1">
            <div className="dis3">
              <span
                className={`material-symbols-outlined like ${
                  liked["delicate-blue-neckpiece"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLikeToggle("delicate-blue-neckpiece");
                  handleLike("delicate-blue-neckpiece", 4740, n9);
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="delicate-blue-neckpiece">
              Delicate Blue
              <br />
              Neckpiece
            </p>
            <p className="price">4,740 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Delicate Blue Neckpiece",
                  price: 4740,
                  image: n9,
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="dis4">
              <span
                className={`material-symbols-outlined like ${
                  liked["delicate-emerald-neckpiece"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("delicate-emerald-neckpiece", 24270, n4);
                  handleLikeToggle("delicate-emerald-neckpiece");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="delicate-emerald-neckpiece">
              Delicate Emerald <br />
              Neckpiece
            </p>
            <p className="price">24,270 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: " Delicate Emerald Neckpiece",
                  price: 24270,
                  image: n4,
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <button
          className="cta"
          style={{ display: neckExpanded ? "none" : "flex" }}
          onClick={handleNeckExpand}
        >
          <span className="hover-underline-animation"> View More </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>

        <div id="more" style={{ display: neckExpanded ? "flex" : "none" }}>
          <div className="display1">
            <div className="dis5">
              <span
                className={`material-symbols-outlined like ${
                  liked["enchanting-delicate-neckpiece"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("enchanting-delicate-neckpiece", 5080, n5);
                  handleLikeToggle("enchanting-delicate-neckpiece");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="enchanting-delicate-neckpiece">
              Enchanting Delicate
              <br />
              Neckpiece
            </p>
            <p className="price">5,080 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Enchanting Delicate Neckpiece",
                  price: 5080,
                  image: n5,
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="dis6">
              <span
                className={`material-symbols-outlined like ${
                  liked["pink-sapphire-double-heart-neckpiece"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("pink-sapphire-double-heart-neckpiece", 9577, n6);
                  handleLikeToggle("pink-sapphire-double-heart-neckpiece");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="pink-sapphire-double-heart-neckpiece">
              Pink Sapphire Double Heart Neckpiece
            </p>
            <p className="price">9,577 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: " Pink Sapphire Double Heart Neckpiece",
                  price: 9577,
                  image: n6, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="dis7">
              <span
                className={`material-symbols-outlined like ${
                  liked["delicate-waves-diamond-neckpiece"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("delicate-waves-diamond-neckpiece", 10115, n7);
                  handleLikeToggle("delicate-waves-diamond-neckpiece");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="delicate-waves-diamond-neckpiece">
              Delicate Waves Diamond Neckpiece
            </p>
            <p className="price">10,115 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: " Delicate Waves Diamond Neckpiece",
                  price: 10115,
                  image: n7, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      classname="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="dis8">
              <span
                className={`material-symbols-outlined like ${
                  liked["glamorous-infinity-heart-neckpiece"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("glamorous-infinity-heart-neckpiece", 3500, n8);
                  handleLikeToggle("glamorous-infinity-heart-neckpiece");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="glamorous-infinity-heart-neckpiece">
              Glamorous Infinity Heart Neckpiece
            </p>
            <p className="price">3,500 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: " Glamorous Infinity Heart Neckpiece",
                  price: 3500,
                  image: n8, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <button
          className="cta4"
          style={{ display: neckExpanded ? "flex" : "none" }}
          onClick={handleNeckCollapse}
        >
          <span className="hover-underline-animation"> Show Less </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </section>

      <section
        id="watches"
        style={{ height: watchExpanded ? "1060px" : "auto" }}
      >
        <div className="heading-2">WATCHES</div>
        <div className="disp">
          <div className="display1">
            <div className="wat1">
              <span
                className={`material-symbols-outlined like ${
                  liked["fancy-leather-strap-watch"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("fancy-leather-strap-watch", 5490, w1);
                  handleLikeToggle("fancy-leather-strap-watch");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="fancy-leather-strap-watch">
              Fancy Leather Strap <br />
              Watch
            </p>
            <p className="price">5,490 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Fancy Leather Strap Watch",
                  price: 5490,
                  image: w1, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="wat2">
              <span
                className={`material-symbols-outlined like ${
                  liked["rose-gold-bracelet-watch"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("rose-gold-bracelet-watch", 2490, w2);
                  handleLikeToggle("rose-gold-bracelet-watch");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="rose-gold-bracelet-watch">
              Rose Gold Bracelet <br />
              Watch
            </p>
            <p className="price">2,490 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Rose Gold Bracelet Watch",
                  price: 2490,
                  image: w2, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="wat3">
              <span
                className={`material-symbols-outlined like ${
                  liked["acnos-fancy-bracelet-watch"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("acnos-fancy-bracelet-watch", 6700, w3);
                  handleLikeToggle("acnos-fancy-bracelet-watch");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="acnos-fancy-bracelet-watch">
              Acnos Fancy Bracelet <br />
              Watch
            </p>
            <p className="price">6,700 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Acnos Fancy Bracelet Watch",
                  price: 6700,
                  image: w3, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="wat4">
              <span
                className={`material-symbols-outlined like ${
                  liked["stylish-hearty-watch"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("stylish-hearty-watch", 1940, w4);
                  handleLikeToggle("stylish-hearty-watch");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2">
              Stylish Hearty <br />
              Watch
            </p>
            <p className="price">1,940 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Stylish Hearty Watch",
                  price: 1940,
                  image: w4, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <button
          className="cta1"
          style={{ display: watchExpanded ? "none" : "flex" }}
          onClick={handleWatchExpand}
        >
          <span className="hover-underline-animation"> View More </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>

        <div id="more2" style={{ display: watchExpanded ? "flex" : "none" }}>
          <div className="display1">
            <div className="wat5">
              <span
                className={`material-symbols-outlined like ${
                  liked["selegant-greeny-watch"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("elegant-greeny-watch", 7320, w5);
                  handleLikeToggle("elegant-greeny-watch");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="elegant-greeny-watch">
              Elegant Greeny <br />
              Watch
            </p>
            <p className="price">7,320 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Elegant Greeny Watch",
                  price: 7320,
                  image: w5, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="wat6">
              <span
                className={`material-symbols-outlined like ${
                  liked["delicate-in-black-watch"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("delicate-in-black-watch", 1200, w6);
                  handleLikeToggle("delicate-in-black-watch");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="delicate-in-black-watch">
              Delicate in Black <br />
              Watch
            </p>
            <p className="price">1,200 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Delicate in Black Watch",
                  price: 1200,
                  image: w6, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="wat7">
              <span
                className={`material-symbols-outlined like ${
                  liked["old-style-delicate-watch"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("old-style-delicate-watch", 25000, w7);
                  handleLikeToggle("old-style-delicate-watch");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="old-style-delicate-watch">
              Old style Delicate <br />
              Watch
            </p>
            <p className="price">25,000 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Old style Delicate Watch",
                  price: 25000,
                  image: w7, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="display1">
            <div className="wat8">
              <span
                className={`material-symbols-outlined like ${
                  liked["alluring-hearty-watch"] ? "filled" : ""
                }`}
                onClick={() => {
                  handleLike("alluring-hearty-watch", 4300, w8);
                  handleLikeToggle("alluring-hearty-watch");
                }}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="alluring-hearty-watch">
              Alluring Hearty <br />
              Watch
            </p>
            <p className="price">4,300 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Alluring Hearty Watch",
                  price: 4300,
                  image: w8, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <button
          className="cta5"
          style={{ display: watchExpanded ? "flex" : "none" }}
          onClick={handleWatchCollapse}
        >
          <span className="hover-underline-animation"> Show Less </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </section>

      <section id="Bag" style={{ height: bagExpanded ? "1060px" : "auto" }}>
        <div className="heading-1" id="handbags">
          HANDBAGS
        </div>
        <div className="disp">
          <div className="display1">
            <div className="b1">
              <span
                className={`material-symbols-outlined like ${
                  liked["black-flower-embroidered-handbag"] ? "filled" : ""
                }`}
                onClick={() =>
                  handleLikeToggle("black-flower-embroidered-handbag")
                }
              >
                favorite
              </span>
            </div>
            <p className="text2" id="black-flower-embroidered-handbag">
              Black Flower Embroidered Handbag
            </p>
            <p className="price">4,200 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Black Flower Embroidered Handbag",
                  price: 4200,
                  image: n2, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="b2">
              <span
                className={`material-symbols-outlined like ${
                  liked["alluring-pink-handbag"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("alluring-pink-handbag")}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="alluring-pink-handbag">
              Alluring Pink <br />
              Handbag
            </p>
            <p className="price">2,850 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Balluring Pink Handbag",
                  price: 2850,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="b3">
              <span
                className={`material-symbols-outlined like ${
                  liked["formal-in-grey-handbag"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("formal-in-grey-handbag")}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="formal-in-grey-handbag">
              Formal In Grey <br />
              Handbag
            </p>
            <p className="price">2,050 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Formal In Grey Handbag",
                  price: 2050,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="b4">
              <span
                className={`material-symbols-outlined like ${
                  liked["faux-leather-burgandy-handbag"] ? "filled" : ""
                }`}
                onClick={() =>
                  handleLikeToggle("faux-leather-burgandy-handbag")
                }
              >
                favorite
              </span>
            </div>
            <p className="text2" id="faux-leather-burgandy-handbag">
              Faux Leather Burgandy Slingbag
            </p>
            <p className="price">1000 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Faux Leather Burgandy Slingbag",
                  price: 1000,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <button
          className="cta2"
          style={{ display: bagExpanded ? "none" : "flex" }}
          onClick={handleBagExpand}
        >
          <span className="hover-underline-animation"> View More </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>

        <div id="more3" style={{ display: bagExpanded ? "flex" : "none" }}>
          <div className="display1">
            <div className="b5">
              <span
                className={`material-symbols-outlined like ${
                  liked["mini-crossbody-handbag"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("mini-crossbody-handbag")}
              >
                favorite
              </span>
            </div>
            <p className="text2">
              Mini Crossbody <br />
              Handbag
            </p>
            <p className="price">1050 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Mini Crossbody Handbag",
                  price: 1050,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="display1">
            <div className="b6">
              <span
                className={`material-symbols-outlined like ${
                  liked["elegant-in-white-handbag"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("elegant-in-white-handbag")}
              >
                favorite
              </span>
            </div>
            <p className="text2">
              Elegant In White
              <br />
              Handbag
            </p>
            <p className="price">2050 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Elegant In White Handbag",
                  price: 2050,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="display1">
            <div className="b7">
              <span
                className={`material-symbols-outlined like ${
                  liked["cheetah-printed-handbag"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("cheetah-printed-handbag")}
              >
                favorite
              </span>
            </div>
            <p className="text2">
              Cheetah Printed <br />
              Handbag
            </p>
            <p className="price">2,500 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Cheetah Printed Handbag",
                  price: 2500,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="b8">
              <span
                className={`material-symbols-outlined like ${
                  liked["fargo-leatherette-handbag"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("fargo-leatherette-handbag")}
              >
                favorite
              </span>
            </div>
            <p className="text2">
              Fargo Leatherette
              <br />
              Handbag
            </p>
            <p className="price">999 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Fargo Leatherette Handbag",
                  price: 999,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <button
          className="cta6"
          style={{ display: bagExpanded ? "flex" : "none" }}
          onClick={handleBagCollapse}
        >
          <span className="hover-underline-animation"> Show Less </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </section>

      <section id="Ear" style={{ height: earExpanded ? "1060px" : "auto" }}>
        <div className="heading-2" id="earrings">
          EARRINGS
        </div>
        <div className="disp">
          <div className="display1">
            <div className="e1">
              <span
                className={`material-symbols-outlined like ${
                  liked["beautiful-in-white-butterfly-earrings"] ? "filled" : ""
                }`}
                onClick={() =>
                  handleLikeToggle("beautiful-in-white-butterfly-earrings")
                }
              >
                favorite
              </span>
            </div>
            <p className="text2" id="beautiful-in-white-butterfly-earrings">
              Beautiful In White Butterfly Earrings
            </p>
            <p className="price">1,050 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Beautiful In White Butterfly Earrings",
                  price: 1050,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="e2">
              <span
                className={`material-symbols-outlined like ${
                  liked["delicate-blue-hue-earrings"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("delicate-blue-hue-earrings")}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="delicate-blue-hue-earrings">
              Delicate Blue Hue
              <br />
              Earrings
            </p>
            <p className="price">950 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Delicate Blue Hue Earrings",
                  price: 950,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="e3">
              <span
                className={`material-symbols-outlined like ${
                  liked["elegant-star-zirconia-stud-earring"] ? "filled" : ""
                }`}
                onClick={() =>
                  handleLikeToggle("elegant-star-zirconia-stud-earring")
                }
              >
                favorite
              </span>
            </div>
            <p className="text2" id="elegant-star-zirconia-stud-earring">
              Elegant Star Zirconia Stud Earring
            </p>
            <p className="price">1,250 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Elegant Star Zirconia Stud Earring",
                  price: 1250,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="display1">
            <div className="e4">
              <span
                className={`material-symbols-outlined like ${
                  liked["elegant-emerald-gold-earrings"] ? "filled" : ""
                }`}
                onClick={() =>
                  handleLikeToggle("elegant-emerald-gold-earrings")
                }
              >
                favorite
              </span>
            </div>
            <p className="text2 elegant-emerald-gold-earrings">
              Elegant Emerald Gold <br />
              Earrings
            </p>
            <p className="price">1,050 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Elegant Emerald Gold <br />Earrings",
                  price: 1050,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <button
          className="cta3"
          style={{ display: earExpanded ? "none" : "flex" }}
          onClick={handleEarExpand}
        >
          <span className="hover-underline-animation"> View More </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>

        <div id="more4" style={{ display: earExpanded ? "flex" : "none" }}>
          <div className="display1">
            <div className="e5">
              <span
                className={`material-symbols-outlined like ${
                  liked["gold-lining-lower-earrings"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("gold-lining-lower-earrings")}
              >
                favorite
              </span>
            </div>
            <p className="text2">
              Gold Lining Flower <br />
              Earrings
            </p>
            <p className="price">2,050 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Gold Lining Flower Earrings",
                  price: 2050,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="e6">
              <span
                className={`material-symbols-outlined like ${
                  liked["arizonal-blue-studded-earrings"] ? "filled" : ""
                }`}
                onClick={() =>
                  handleLikeToggle("arizonal-blue-studded-earrings")
                }
              >
                favorite
              </span>{" "}
            </div>
            <p className="text2" id="arizonal-blue-studded-earrings">
              Arizonal Blue Studded Earrings
            </p>
            <p className="price">3,050 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Arizonal Blue Studded Earrings",
                  price: 3050,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="e7">
              <span
                className={`material-symbols-outlined like ${
                  liked["multicolored-brass-and-pearl-earrings"] ? "filled" : ""
                }`}
                onClick={() =>
                  handleLikeToggle("multicolored-brass-and-pearl-earrings")
                }
              >
                favorite
              </span>
            </div>
            <p className="text2" id="multicolored-brass-and-pearl-earrings">
              Multicolored Brass And Pearl Earrings
            </p>
            <p className="price">1,070 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Multicolored Brass And Pearl Earrings",
                  price: 1070,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className="display1">
            <div className="e8">
              <span
                className={`material-symbols-outlined like ${
                  liked["soho-designer-drop-earrings"] ? "filled" : ""
                }`}
                onClick={() => handleLikeToggle("soho-designer-drop-earrings")}
              >
                favorite
              </span>
            </div>
            <p className="text2" id="soho-designer-drop-earrings">
              Soho Designer Drop
              <br />
              Earrings
            </p>
            <p className="price">2,500 INR</p>
            <button
              className="addto"
              onClick={() =>
                handleAddToCart({
                  name: "Soho Designer Drop Earrings",
                  price: 2500,
                  image: { n2 }, // or correct image path
                })
              }
            >
              <span>Add to cart</span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <defs></defs>
                  <g id="cart">
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="10.07"
                      className="cls-1"
                    ></circle>
                    <circle
                      r="1.91"
                      cy="20.59"
                      cx="18.66"
                      className="cls-1"
                    ></circle>
                    <path
                      d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                      className="cls-1"
                    ></path>
                    <polyline
                      points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                      className="cls-1"
                    ></polyline>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <button
          className="cta7"
          style={{ display: earExpanded ? "flex" : "none" }}
          onClick={handleEarCollapse}
        >
          <span className="hover-underline-animation"> Show Less </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </section>

      <footer className="footer2">
        <div className="footer-heading">Connect</div>
        <hr className="line" />
        <div className="foot">
          <div className="c-hub">
            <p className="c-heading">Contact Hub</p>
            <a className="c-content">Contact Us</a>
            <a className="c-content">Find Us</a>
          </div>

          <div className="c-hub">
            <p className="c-heading">Services</p>
            <a className="c-content">Track your order</a>
            <a className="c-content">Make a return</a>
            <a className="c-content">Faq</a>
            <a className="c-content">Servicing and warranty</a>
            <a className="c-content">Sitemap</a>
            <a className="c-content">Catalog</a>
            <a className="c-content">Instruction manual</a>
          </div>

          <div className="c-hub">
            <p className="c-heading">Our maison</p>
            <a className="c-content">Corporate information</a>
            <a className="c-content">Press</a>
          </div>

          <div className="c-hub">
            <p className="c-heading1">Stay up to date</p>
            <div className="connect">
              <div className="set">
                <a
                  href="https://wa.me/7626929633"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-whatsapp link0"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>
              <div className="set">
                <a
                  href="https://www.instagram.com/aadhu2708/"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-instagram link2"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>

              <div className="set">
                <a
                  href="https://www.facebook.com/profile.php?id=61550942587569"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-facebook link1"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>

              <div className="set">
                <a
                  href="https://x.com/aadhu_2708"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa fa-twitter link"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr className="line" />
        <div className="mapping">
          <div className="newsletter">
            <p className="n-heading">Subscribe to our newsletter</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-email2"
            />
            <button className="sign-up" onClick={handleSubscribe}>
              Subscribe
            </button>
            <div className="copy">
              <i className="fa fa-copyright fa-lg">
                Girlies India 2024.All rights reserved
              </i>
            </div>
          </div>
          <iframe
            title="Girlies map"
            className="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751352098304!2d76.65720287536413!3d30.51608647468947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1723729429946!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
};

export default AccessoriesHeader;
