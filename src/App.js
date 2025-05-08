import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Food from "./pages/Food";
import FoodDetail from "./pages/FoodDetail";
import Drink from "./pages/Drink";
import Dessert from "./pages/Dessert";
import Review from "./pages/Review";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Food />} />
      <Route path="/food/:id" element={<FoodDetail />} />
      <Route path="/drink" element={<Drink />} />
      <Route path="/dessert" element={<Dessert />} />
      <Route path="/review" element={<Review />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
