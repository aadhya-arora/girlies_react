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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
