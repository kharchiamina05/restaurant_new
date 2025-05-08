import React from "react";
import "../App.css";
import { useCart } from "../CartContext";
import BottomNav from "../components/BottomNav";

function Cart() {
  const {
    cartItems,
    addToCart,
    decreaseItemQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div>
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p>{item.price} DZD × {item.quantity}</p>
                <div className="quantity-buttons">
                  <button onClick={() => decreaseItemQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {total} DZD</h3>
      {cartItems.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <BottomNav />
    </div>
  );
}

export default Cart;
