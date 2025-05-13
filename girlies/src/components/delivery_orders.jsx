import React, { useEffect, useState } from "react";
import "./delivery_orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5100/orders-data")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched orders:", data);
        setOrders(data.orders || []);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
  }, []);

  const handleDeliver = async (e, orderId) => {
    e.target.style.backgroundColor = "green";
    e.target.style.color = "white";
    e.target.textContent = "Delivered";

    try {
      const res = await fetch("http://localhost:5100/mark-delivered", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      const result = await res.json();
      console.log("Delivery update result:", result);

      if (res.ok) {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderId)
        );
      } else {
        console.error("Failed to deliver order:", result.message);
        alert("Failed to mark order as delivered.");
      }
    } catch (err) {
      console.error("Error while marking as delivered:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="body">
        <h2 className="h2">Orders</h2>
        <div id="orders_del">
          {orders.map((order, index) => (
            <div className="order_del" key={index}>
              <p>
                <strong>Items:</strong>{" "}
                {order.items
                  .map((i) => i.name || i.id || JSON.stringify(i))
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
                {new Date(order.createdAt).toLocaleString()}
              </p>
              <button
                className="deliver-btn"
                onClick={(e) => handleDeliver(e, order._id)}
              >
                Deliver
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
