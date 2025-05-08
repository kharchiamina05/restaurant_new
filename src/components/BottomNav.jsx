import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaStar, FaShoppingCart, FaUser } from "react-icons/fa";
import { useCart } from "../CartContext";
import "../App.css";

function BottomNav() {
  const location = useLocation();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bottom-nav">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <FaHome />
      </Link>
      <Link to="/review" className={location.pathname === "/review" ? "active" : ""}>
        <FaStar />
      </Link>
      <Link to="/cart" className={location.pathname === "/cart" ? "active cart-link" : "cart-link"}>
        <FaShoppingCart />
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>} {}
      </Link>
      <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
        <FaUser />
      </Link>
    </nav>
  );
}

export default BottomNav;
