import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Chinese: [
    { name: "Kung Pao Chicken", rating: "4/5" },
    { name: "Dumplings", rating: "3.5/5" },
    { name: "Chow Mein", rating: "4.5/5" },
    { name: "Ma Po Tofu", rating: "3/5" },
    { name: "Yangzhou Fried Rice", rating: "4/5" }
  ],

  Mexican: [
    { name: "Pozole", rating: "4/5" },
    { name: "Chiles en nogada", rating: "4/5" },
    { name: "Enchiladas", rating: "4/5" },
    { name: "Tostadas", rating: "4/5" },
    { name: "Mole", rating: "4/5" }
  ],
  Indian: [
    { name: "Pongal", rating: "4/5" },
    { name: "Masala Dosa", rating: "4.5/5" },
    { name: "Parata", rating: "3/5" },
    { name: "Chicken Biryani", rating: "3.5/5" },
    { name: "Bisibele Bath", rating: "4/5" }
  ],
  American: [
    { name: "Apple Pie", rating: "4/5" },
    { name: "Hamburger", rating: "4.5/5" },
    { name: "Fries", rating: "3/5" },
    { name: "Hominy Grits", rating: "3.5/5" },
    { name: "Pizza", rating: "4/5" }
  ],
  Italian: [
    { name: "Lasagna", rating: "4/5" },
    { name: "Gelato", rating: "4.5/5" },
    { name: "Focaccia", rating: "3/5" },
    { name: "Spaghetti alla Carbonara", rating: "3.5/5" },
    { name: "Cicchetti", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Indian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        <span className="role">🍲</span> Great Meals{" "}
      </h1>
      <p style={{ fontSize: "large", color: "white" }}>
        {" "}
        Checkout my favorite meals in the world. Select a taste from below...{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#4B5563",
              borderRadius: "2rem",
              padding: "0.5rem 1rem",
              border: "1.75px solid #111827",
              margin: "1rem 1rem",
              color: "white"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid white",
                width: "94%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                color: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
