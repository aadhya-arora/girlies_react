import React from "react";
import "./help.css";
import handImage from "./backgrounds/hand.png"; // Ensure this path is valid relative to your file system

const ContactUs = () => {
  const subscribe = async (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;

    try {
      const res = await fetch("http://localhost:5100/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
      } else {
        alert(data.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred while subscribing.");
    }
  };

  return (
    <div className="body_help">
      <section className="hero_help">
        <img
          src={handImage}
          alt="Contact Us - Fashion Hub"
          className="hero-image_help"
        />
        <div className="hero-overlay_help">
          <h1>We're here for all your snooze questions</h1>
        </div>
      </section>

      <div className="parent">
        <section className="contact-info_help">
          <p>📞 Call us at: +91 891567-8901</p>
          <p>🕒 Available from Monday to Friday, 9 AM - 6 PM</p>
          <p>
            📧 Mail us even on weekends and get response within LESS THAN 5
            hours
          </p>

          <hr />

          <h3>After Hours?</h3>
          <p>Mail us @customersupport@girlies.com</p>
        </section>

        <div className="card_help">
          <span className="card__title_help">Newsletter</span>
          <p className="card__content_help">
            Get the latest fashion trends and discount offer updates by
            subscribing to our Girlies Newsletter!
          </p>
          <form className="card__form_help" onSubmit={subscribe}>
            <input
              required
              type="email"
              placeholder="your email"
              className="input_help"
            />
            <button className="card__button_help" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
