// import React from "react";
// import SignupForm from "./components/signupForm";

// function App() {
//   return (
//     <div className="App">
//       <SignupForm />
//     </div>
//   );
// }

// export default App;

// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signupForm";
import MainPage from "./components/main";
import ReviewForm from "./components/review";
import Accessories from "./components/accessories";
import Cart from "./components/cart";
import Wishlist from "./components/wishlist";
import Checkout from "./components/address";
import OrderSummary from "./components/payment";
import Delivery from "./components/delivery";
import Orders from "./components/delivery_orders";
import AdminDashboard from "./components/admin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/review" element={<ReviewForm />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/address" element={<Checkout />} />
        <Route path="/checkout" element={<OrderSummary />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/deliver_orders" element={<Orders />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
