import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import List from "./List";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/acasa" element={<Home />} />
      <Route path="/produse" element={<List />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
