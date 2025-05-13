import React from "react";
import "./main.css"; // Assuming the CSS is in App.css or similar
import { FaWhatsapp, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import maal from "./backgrounds/maal.png";
import video from "./backgrounds/1110.mp4";
import perfumeo from "./backgrounds/perfumeo.png";
import ainak from "./backgrounds/ainak2 (1).png";
import potrait from "./backgrounds/potrait video.mp4";
import profile from "./backgrounds/logo.jpg";
import Girlies from "./main/Girlies.png";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        id="backvid"
        src={video}
        type="video/mp4"
        height="100%"
      ></video>

      <div id="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="brand-options">
            <div className="brand-logo"></div>
            <div className="box-quote">
              "Elegance That Never Goes Out Of Style"
            </div>
            <div id="welcome-msg"></div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="profile">
          <img src={profile} className="profile-pic" alt="Girlies Logo" />
          <h1 className="text-light">Girlies</h1>
        </div>
        <div className="media-links">
          <div className="set_main">
            <a
              href="https://wa.me/7626929633"
              style={{ textDecoration: "none" }}
            >
              <FaWhatsapp className="link0_main" style={{ fontSize: "24px" }} />
            </a>
          </div>
          <div className="set_main">
            <a
              href="https://x.com/aadhu_2708"
              style={{ textDecoration: "none" }}
            >
              <FaTwitter className="link_main" style={{ fontSize: "24px" }} />
            </a>
          </div>
          <div className="set_main">
            <a
              href="https://www.instagram.com/aadhu2708/"
              style={{ textDecoration: "none" }}
            >
              <FaInstagram
                className="link2_main"
                style={{ fontSize: "24px" }}
              />
            </a>
          </div>
          <div className="set_main">
            <a
              href="https://www.facebook.com/profile.php?id=61550942587569"
              style={{ textDecoration: "none" }}
            >
              <FaFacebook className="link1_main" style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
        <div className="social-links">
          <a href="#front">
            <span
              className="material-symbols-outlined icon"
              style={{ fontSize: "24px" }}
            >
              home
            </span>
            <span className="icon-name">Home</span>
          </a>
          <a href="#Explore">
            <span
              className="material-symbols-outlined icon1"
              style={{ fontSize: "24px" }}
            >
              search
            </span>
            <span className="icon-name">Explore</span>
          </a>
          <a href="#abt">
            <span
              className="material-symbols-outlined icon"
              style={{ fontSize: "24px" }}
            >
              people
            </span>
            <span className="icon-name">About</span>
          </a>
          <Link to="/help">
            <span
              className="material-symbols-outlined icon2"
              style={{ fontSize: "24px" }}
            >
              box
            </span>
            <span className="icon-name">Contact</span>
          </Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fa fa-bars"> </i>
          </button>
          <div className="dropdown-content">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/review">Review Page</Link>
          </div>
        </div>
      </nav>

      <section id="Explore">
        <p className="title1">Crafted Perfection</p>
        <p className="t1">Experience Our Design Showcase</p>

        <div id="wappper">
          <Link to="/accessories" style={{ textDecoration: "none" }}>
            <div className="card">
              <img src={maal} alt="Accessories" />
              <div className="info">
                <h1>Accessories</h1>
                <p className="info-p">
                  "The Finishing Touch to Every Outfit – Discover Accessories
                  That Speak Volumes."
                </p>
              </div>
            </div>
          </Link>

          <a href="/frag.html" style={{ textDecoration: "none" }}>
            <div className="card">
              <img src={perfumeo} alt="Fragrance & Makeup" />
              <div className="info">
                <h1>Fragrance & Makeup</h1>
                <p className="info-p">
                  "Elevate Your Aura: Fragrance and Makeup to Define Your Unique
                  Essence."
                </p>
              </div>
            </div>
          </a>

          <a href="/sunglasses.html" style={{ textDecoration: "none" }}>
            <div className="card">
              <img src={ainak} alt="Sunglasses & Scarves" />
              <div className="info">
                <h1>Sunglasses & Scarves</h1>
                <p className="info-p">
                  "Sun, Style, and Sophistication: Shield Your Eyes, Elevate
                  Your Look!"
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section id="abt">
        <div className="dedibas">
          Introducing GIRLIES
          <p className="dedibas-p">
            Founded in 2015, GIRLIES was born out of a passion for discovering
            and delivering the finest in fashion, beauty, and cosmetics. What
            started as a dream to curate a collection of high-quality, on-trend
            products has grown into a vibrant destination for those who value
            both luxury and individuality. <br />
            <br />
            <br />
            Our mission is simple to inspire and enhance your unique beauty with
            products that not only meet the highest standards of quality but
            also celebrate the diversity of style and personality. We carefully
            select every item in our collection to ensure it aligns with our
            commitment to excellence, offering you the latest trends and
            timeless classics.
          </p>
        </div>

        <div className="chotewali">
          <video src={potrait} muted autoPlay loop width="300px"></video>
        </div>

        <div className="kamini">
          <img src={Girlies} alt="Girlies" />
        </div>
      </section>

      <a href="#">
        <button className="animated-button">
          <span className="text">EXPLORE</span>
        </button>
      </a>

      <hr className="part" />
      <footer className="footer1">
        <div className="footer-heading1">Connect</div>
        <hr className="line1" />
        <div className="foot1">
          <div className="c-hub1">
            <p className="c-heading1">Contact Hub</p>
            <a className="c-content1">Contact Us</a>
            <a className="c-content1">Find Us</a>
          </div>

          <div className="c-hub1">
            <p className="c-heading1">Services</p>
            <a className="c-content1">FAQ</a>
            <a className="c-content1">Track your order</a>
            <a className="c-content1">Make a return</a>
            <a className="c-content1">Servicing and warranty</a>
            <a className="c-content1">Catalog</a>
            <a className="c-content1">Instruction manual</a>
          </div>

          <div className="c-hub1">
            <p className="c-heading1">Our Maison</p>
            <a className="c-content1">Press</a>
            <a className="c-content1">Corporate information</a>
          </div>

          <div className="c-hub1">
            <p className="c-heading1">Stay up to date</p>
            <div className="connect1">
              <a
                href="https://wa.me/7626929633"
                style={{ textDecoration: "none" }}
              >
                <FaWhatsapp className="link0" style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://x.com/aadhu_2708"
                style={{ textDecoration: "none" }}
              >
                <FaTwitter className="link" style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://www.instagram.com/aadhu2708/"
                style={{ textDecoration: "none" }}
              >
                <FaInstagram className="link2" style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550942587569"
                style={{ textDecoration: "none" }}
              >
                <FaFacebook className="link1" style={{ fontSize: "24px" }} />
              </a>
            </div>
          </div>
        </div>

        <hr className="line1" />
        <div className="mapping1">
          <div className="newsletter1">
            <p className="n-heading1">Subscribe to our newsletter</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-email2"
            />
            <button className="sign-up">Subscribe</button>
            <div className="copy">
              <i className="fa fa-copyright fa-lg">
                Girlies India 2024.All rights reserved
              </i>
            </div>
          </div>
          <iframe
            title="Girlies Store Location"
            className="location1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.174971799996!2d76.65720287502891!3d30.5160910960714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1746442245297!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
