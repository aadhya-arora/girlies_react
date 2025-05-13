import React, { useState } from "react";
import "./review.css";
import video from "./backgrounds/NEELE NEELE AMBAR PE.mp4";
import review2 from "./backgrounds/review2.avif";
import { Link } from "react-router-dom";
const ReviewForm = () => {
  const [fullname, setFullname] = useState("");
  const [review, setReview] = useState("");
  const [improvement, setImprovement] = useState("");
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullname,
      review,
      improvement,
      rating,
    };

    try {
      const response = await fetch("http://localhost:5100/submit-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
      setFullname("");
      setReview("");
      setImprovement("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="review-page">
      <video autoPlay muted loop id="backvid2">
        <source src={video} type="video/mp4" />
      </video>

      <header>Girlies</header>

      <form id="review-form" onSubmit={handleSubmit}>
        <div className="review">
          <nav className="head">
            <Link to="/main" className="head-1">
              "Loved It? Let Us Know!"
            </Link>
          </nav>

          <div className="review-box">
            <div className="review-info">
              <p className="name-5">Name</p>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="email5"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />

              <p className="name-5">Your Review</p>
              <input
                type="text"
                placeholder="What are your thoughts about us?"
                className="email5"
                required
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />

              <p className="name-5">Improvement</p>
              <input
                type="text"
                placeholder="What can we improve?"
                className="email5"
                required
                value={improvement}
                onChange={(e) => setImprovement(e.target.value)}
              />

              <p className="name-5">"Give Us a STAR (If We Earned It 😉)"</p>
              <div className="rating_review">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined like_review"
                    style={{
                      color: i < rating ? "gold" : "black",
                      fontVariationSettings: `'FILL' ${i < rating ? 1 : 0}`,
                    }}
                    onClick={() => handleStarClick(i)}
                  >
                    star
                  </span>
                ))}
              </div>

              <button type="submit" className="submit">
                Submit
              </button>
            </div>

            <img src={review2} className="review-img" alt="Review Visual" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
