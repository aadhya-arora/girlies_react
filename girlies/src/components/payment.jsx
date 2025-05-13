import React, { useEffect, useState } from "react";
import "./payment.css";

const OrderSummary = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(150);
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

    if (uniqueItems.length === 0) return;

    setCart(uniqueItems);
    const sub = uniqueItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const calculatedTax = sub * 0.03;
    const totalPrice = sub + calculatedTax + shipping;

    setSubtotal(sub);
    setTax(calculatedTax);
    setTotal(totalPrice);
  }, []);

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    const orderData = {
      items: cart.map((item) => `${item.name} (x${item.quantity || 1})`),
      total: `${total.toFixed(2)} INR`,
      paymentMethod,
    };

    try {
      console.log("📦 Sending order:", orderData); // optional for debugging

      const response = await fetch("http://localhost:5100/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Server error");
      }

      alert(data.message || "Order placed successfully.");
      localStorage.removeItem("cart");
      localStorage.removeItem("cartItems");
      window.location.href = "/"; // ✅ make sure this route exists
    } catch (err) {
      console.error("❌ Order error:", err);
      alert("Failed to place order: " + err.message);
    }
  };

  return (
    <div className="orderSummary">
      <div className="order_sum">
        <h1 className="sum">Order Summary</h1>

        <div id="payment-cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div className="payment-item" key={index}>
                <p>
                  <strong>{item.name}</strong> — {item.quantity || 1} ×{" "}
                  {item.price} INR
                </p>
              </div>
            ))
          )}
        </div>

        <div className="summary">
          <p>
            Subtotal: <span id="subtotal">{subtotal} INR</span>
          </p>
          <p>
            Estimated Tax: <span id="tax">{tax.toFixed(2)} INR</span>
          </p>
          <p>
            Shipping: <span id="shipping">{shipping} INR</span>
          </p>
          <p>
            <strong>
              Total: <span id="total">{total.toFixed(2)} INR</span>
            </strong>
          </p>
        </div>

        <div className="payment-method">
          <h3>Select Payment Method:</h3>
          {["credit-card", "upi", "cod"].map((method) => (
            <label key={method}>
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              {method === "credit-card"
                ? "Credit/Debit Card"
                : method === "upi"
                ? "UPI"
                : "Cash on Delivery"}
            </label>
          ))}
        </div>

        <button
          className="placeOrder"
          onClick={handlePlaceOrder}
          disabled={cart.length === 0 || loading}
        >
          {loading ? "Placing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
