import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import "../App.css";
import { useCart } from "../CartContext";

const dessertItems = [
  { id: 1, name: "Baghrir", image: "/images/dessert1.jpg", price: 60, views: 45 },
  { id: 2, name: "Lham Lahlou", image: "/images/dessert2.jpg", price: 400, views: 72 },
  { id: 3, name: "Kalb Louz", image: "/images/dessert3.jpg", price: 100, views: 34 },
  { id: 4, name: "Zlabiya", image: "/images/dessert4.jpg", price: 80, views: 88 },
  { id: 5, name: "Khfaf", image: "/images/dessert5.jpg", price: 60, views: 21 },
  { id: 6, name: "Ktayef", image: "/images/dessert6.jpg", price: 100, views: 19 },
  { id: 7, name: "Mhalbi", image: "/images/dessert7.jpg", price: 150, views: 29 },
  { id: 8, name: "Tamina", image: "/images/dessert8.jpg", price: 200, views: 15 },
];

function Dessert() {
  const { addToCart, getItemSoldCount } = useCart();
  const [quantities, setQuantities] = useState(Array(dessertItems.length).fill(0));

  const handleAddToCart = (index) => {
    const updated = [...quantities];
    updated[index]++;
    setQuantities(updated);
    const item = dessertItems[index];
    addToCart(item);
  };

  return (
    <div className="category-page">
      <header className="category-header">
        <div className="dessert-hook">
          <p>Sweeten Your Day with a Taste of Algeria</p>
          <p>Every Bite is Pure Happiness</p>
        </div>
      </header>

      <div className="drink-grid">
        {dessertItems.map((item, index) => (
          <div key={item.id} className="drink-card">
            <img src={item.image} alt={item.name} className="drink-image" />
            <div className="drink-info">
              <p>{item.name}</p>
              <p className="drink-price">{item.price} DZD</p>
              <p className="sold-count">Sold: {getItemSoldCount(item.id)}</p> {/* ✅ Show sold count */}
              <div className="drink-actions">
                <span className="drink-badge">{quantities[index]}</span>
                <button className="drink-add-btn" onClick={() => handleAddToCart(index)}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}

export default Dessert;
