import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import "../App.css";
import { useCart } from "../CartContext";

const initialDrinks = [
  { id: 1, name: "Coffee", image: "/images/coffee.jpg", price: 150 },
  { id: 2, name: "Tea", image: "/images/tea.jpg", price: 100 },
  { id: 3, name: "Water", image: "/images/ifri.png", price: 50 },
  { id: 4, name: "Selecto", image: "/images/selecto.jpg", price: 200 },
  { id: 5, name: "Hamoud", image: "/images/hamoud.jpg", price: 200 },
  { id: 6, name: "Lben", image: "/images/lben.jpg", price: 100 },
];

function Drink() {
  const { addToCart, getItemSoldCount } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    const item = initialDrinks.find((d) => d.id === id);
    addToCart(item);
  };

  return (
    <div className="category-page">
      <header className="category-header">
        <h1><strong>DRINKS</strong></h1>
      </header>

      <div className="drink-list">
        {initialDrinks.map((drink) => (
          <div className="drink-item" key={drink.id}>
            <img src={drink.image} alt={drink.name} className="drink-image" />
            <div className="drink-info">
              <h3>{drink.name}</h3>
              <p className="drink-price">{drink.price} DZD</p>
              <p className="sold-count">Sold: {getItemSoldCount(drink.id)}</p> {/* ✅ Show sold count */}
            </div>
            <div className="drink-controls">
              <span className="quantity-badge">{quantities[drink.id] || 0}</span>
              <button onClick={() => handleAddToCart(drink.id)} className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}

export default Drink;