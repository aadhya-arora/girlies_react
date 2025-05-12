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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
