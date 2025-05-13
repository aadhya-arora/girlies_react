import React, { useEffect, useState } from "react";
import "./admin.css"; // Uses your uploaded admin styles
import profile from "./backgrounds/logo.jpg";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [delivered, setDelivered] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5100/delivered-orders")
      .then((res) => res.json())
      .then((data) => {
        setDelivered(data.delivered || []);
        console.log("Delivered orders fetched:", data.delivered);
      })
      .catch((err) => console.error("Failed to load delivered orders:", err));

    fetch("http://localhost:5100/orders-data")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        console.log("Orders fetched:", data.orders);
      })
      .catch((err) => console.error("Failed to load orders:", err));

    fetch("http://localhost:5100/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data || []);
        console.log("Reviews fetched:", data);
      })
      .catch((err) => console.error("Failed to load reviews:", err));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <nav className="navbar">
        <div className="profile">
          <img src={profile} className="profile-pic" alt="Admin" />
          <h1 className="text-light">Girlies</h1>
        </div>
        <div className="social-links">
          <a href="#delivered_orders">
            <span className="icon-name">Delivered Orders</span>
          </a>
          <a href="#pending_orders">
            <span className="icon-name">Pending Orders</span>
          </a>
          <a href="#reviews">
            <span className="icon-name">Reviews</span>
          </a>
          <Link to="/signup">
            <span className="icon-name">Log Out</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          marginLeft: "260px",
          padding: "2rem",
          width: "100%",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        <section id="delivered_orders">
          <h2 className="h2_admin">Delivered Orders</h2>
          {delivered.length === 0 ? (
            <p>No delivered orders found.</p>
          ) : (
            delivered.map((order, index) => (
              <div
                key={index}
                className="order_admin"
                style={{ marginBottom: "1rem" }}
              >
                <p>
                  <strong>Items:</strong>{" "}
                  {order.items
                    ?.map((i) => i.name || i.id || JSON.stringify(i))
                    .join(", ")}
                </p>
                <p>
                  <strong>Total:</strong> ₹{order.total}
                </p>
                <p>
                  <strong>Payment Method:</strong> {order.paymentMethod}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            ))
          )}
        </section>

        <section id="pending_orders">
          <h2 className="h2_admin">Orders Yet To Be Delivered</h2>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order, index) => (
              <div
                key={index}
                className="order_admin"
                style={{ marginBottom: "1rem" }}
              >
                <p>
                  <strong>Items:</strong>{" "}
                  {order.items
                    ?.map((i) => i.name || i.id || JSON.stringify(i))
                    .join(", ")}
                </p>
                <p>
                  <strong>Total:</strong> ₹{order.total}
                </p>
                <p>
                  <strong>Payment Method:</strong> {order.paymentMethod}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            ))
          )}
        </section>

        {/* Reviews Section */}
        <section style={{ marginTop: "3rem" }} id="reviews">
          <h2 className="h2_admin">User Submitted Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews found.</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Review</th>
                  <th>Improvement</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((r, i) => (
                  <tr key={i}>
                    <td>{r.fullname}</td>
                    <td>{r.review}</td>
                    <td>{r.improvement}</td>
                    <td>{r.rating}/5</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
