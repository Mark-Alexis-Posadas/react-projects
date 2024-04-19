import { useState } from "react";

export default function Ratings() {
  const [rating, setRating] = useState(
    () => localStorage.getItem("rating") || 0
  );
  const [hover, setHover] = useState(0);
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <button
            type="button"
            key={index}
            className={`text-5xl ${
              index <= (hover || rating) ? "text-yellow-400" : "off"
            }`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </>
  );
}
