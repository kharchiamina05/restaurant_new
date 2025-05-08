import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import "../App.css";

function Review() {
  const [userReviews, setUserReviews] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setUserReviews([...userReviews, input]);
      setInput("");
    }
  };

  return (
    <div className="review-page">
      <h2 className="page-title">Your Reviews</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="comment-input"
          placeholder="Write a review..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="comment-submit" type="submit">Submit</button>
      </form>
      <ul className="comments-list">
        {userReviews.map((review, i) => (
          <li key={i}>{review}</li>
        ))}
      </ul>
      <BottomNav />
    </div>
  );
}

export default Review;