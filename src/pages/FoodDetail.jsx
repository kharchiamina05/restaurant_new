import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import CartContext from "../CartContext";

const foodData = [
  {
    id: 1,
    name: "Chakhchoukha",
    image: "/images/food1.jpg",
    price: 450,
    ingredients: "Chiken, Meat, Chickpeas, Zucchini, Carrots, Turnip, Pumpkin",
  },
  {
    id: 2,
    name: "Trida",
    image: "/images/food2.jpg",
    price: 500,
    ingredients: "Chiken, Meat, Chickpeas, Zucchini, Carrots, Turnip, Pumpkin, Ras El Hanout, Hard boiled eggs",
  },
  {
    id: 3,
    name: "Brik",
    image: "/images/food3.jpg",
    price: 600,
    ingredients: "Egg, Tuna, Potato, Cheese, Hrissa",
  },
  {
    id: 4,
    name: "Bourek",
    image: "/images/food4.jpg",
    price: 200,
    ingredients: "Egg, Meat, Potato, cheese, Hrissa",
  },
  {
    id: 5,
    name: "Hmis",
    image: "/images/food5.jpg",
    price: 250,
    ingredients: "Tomato, Green Peppers, Red Peppers, Garlic, Olive Oil",
  },
  {
    id: 6,
    name: "Dolma",
    image: "/images/food6.jpg",
    price: 950,
    ingredients: "Zucchini, Potato, Meat, Rice",
  },
  {
    id: 7,
    name: "Chakhchoukhat Dfer",
    image: "/images/food7.jpg",
    price: 500,
    ingredients: "Meat, Chiken, Zucchini, Carrots",
  },
  {
    id: 8,
    name: "Couscous",
    image: "/images/food8.jpg",
    price: 550,
    ingredients: "Meat, Chiken, Zucchini, Carrots, Turnip",
  },
  {
    id: 9,
    name: "Rechta",
    image: "/images/food9.jpg",
    price: 450,
    ingredients: "Meat, Chiken, Zucchini, Turnip, Hard boiled eggs",
  },
  {
    id: 10,
    name: "Tlitli",
    image: "/images/food10.jpg",
    price: 600,
    ingredients: "Meat, Chiken, Zucchini, Turnip, Hard boiled eggs",
  },
  {
    id: 11,
    name: "Chorba",
    image: "/images/food11.jpg",
    price: 350,
    ingredients: "Meat, Chiken, Frik, Chickpeas",
  },
  {
    id: 12,
    name: "Garantita",
    image: "/images/food12.jpg",
    price: 150,
  },
  {
    id: 13,
    name: "Mhadjeb",
    image: "/images/food13.jpg",
    price: 100,
  },
  {
    id: 14,
    name: "Tadjine Zitoune",
    image: "/images/food14.jpg",
    price: 700,
    ingredients: "Olives, Meat, Chiken, Carrots",
  },
  {
    id: 15,
    name: "Mtewem",
    image: "/images/food15.jpg",
    price: 950,
    ingredients: "Meat, Chickpeas",
  },
];

function FoodDetail() {
  const { id } = useParams();
  const food = foodData.find((item) => item.id === parseInt(id));
  const { addToCart, getItemCount, getItemSoldCount } = useContext(CartContext);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  if (!food) {
    return <p>Food item not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart(food);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { text: comment, stars: rating }]);
      setComment("");
    }
  };

  return (
    <div className="food-detail">
      <img src={food.image} alt={food.name} className="food-image-large" />
      <div className="food-info">
        <h2 className="food-name">{food.name}</h2>
        {food.ingredients && <p className="food-description">{food.ingredients}</p>}
        <p className="food-price"><strong>{food.price} DZD</strong></p>
        <p className="sold-count">Sold: {getItemSoldCount(food.id)}</p>

        <div className="add-to-cart-section">
          <span className="quantity-badge">{getItemCount(food.id)}</span> {/* ✅ Always fresh */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>

        <div className="rating-section">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "selected" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <h3>COMMENTS</h3>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-input"
          />
          <button type="submit" className="comment-submit">Send</button>
        </form>

        <ul className="comments-list">
          {comments.map((c, index) => (
            <li key={index}>
              {"★".repeat(c.stars)} - {c.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FoodDetail;
