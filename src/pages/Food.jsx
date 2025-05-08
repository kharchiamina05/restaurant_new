import React from "react";
import BottomNav from "../components/BottomNav";
import "../App.css";
import { Link } from "react-router-dom";

const foodItems = [
  {
    id: 1,
    name: "Chakhchoukha",
    image: "/images/food1.jpg",
    price: 450,
    views: 45,
  },
  {
    id: 2,
    name: "Trida",
    image: "/images/food2.jpg",
    price: 500,
    views: 72,
  },
  {
    id: 3,
    name: "Brik",
    image: "/images/food3.jpg",
    price: 600,
    views: 34,
  },
  {
    id: 4,
    name: "Bourek",
    image: "/images/food4.jpg",
    price: 200,
    views: 88,
  },
  {
    id: 5,
    name: "Hmis",
    image: "/images/food5.jpg",
    price: 250,
    views: 21,
  },
  {
    id: 6,
    name: "Dolma",
    image: "/images/food6.jpg",
    price: 950,
    views: 19,
  },
  {
    id: 7,
    name: "Chakhchoukhat Dfer",
    image: "/images/food7.jpg",
    price: 500,
    views: 29,
  },
  {
    id: 8,
    name: "Couscous",
    image: "/images/food8.jpg",
    price: 550,
    views: 15,
  },
  {
    id: 9,
    name: "Rechta",
    image: "/images/food9.jpg",
    price: 450,
    views: 60,
  },
  {
    id: 10,
    name: "Tlitli",
    image: "/images/food10.jpg",
    price: 600,
    views: 25,
  },
  {
    id: 11,
    name: "Chorba",
    image: "/images/food11.jpg",
    price: 350,
    views: 38,
  },
  {
    id: 12,
    name: "Garantita",
    image: "/images/food12.jpg",
    price: 150,
    views: 44,
  },
  {
    id: 13,
    name: "Mhadjeb",
    image: "/images/food13.jpg",
    price: 100,
    views: 50,
  },
  {
    id: 14,
    name: "Tadjine Zitoune",
    image: "/images/food14.jpg",
    price: 700,
    views: 20,
  },
  {
    id: 15,
    name: "Mtewem",
    image: "/images/food15.jpg",
    price: 950,
    views: 10,
  },
];
function Food() {
  return (
    <div className="category-page">
      <div className="food_hook">
      <p> From Our Kitchen to Your Soul </p>
          <p>“Spice Up Your Day with a Taste of Algerian Tradition  It's More Than Food”</p>
          <p> <strong>It's a Feeling.</strong></p>
      </div>
      <div className="product-grid">
        {foodItems.map(item => (
          <Link to={`/food/${item.id}`} key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <p><strong>{item.name}</strong></p>
              <p>{item.price} DZD</p>
              <p>{item.views} views</p>
            </div>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}

export default Food;