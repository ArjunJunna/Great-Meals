import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  Chinese: [
    { name: "Kung Pao Chicken",description:"A spicy, stir-fried Chinese dish made with cubes of chicken, peanuts, vegetables, and chili peppers.",rating: "4/5" },
    { name: "Dumplings",description:"It consist of pieces of dough wrapped around a filling, or of dough with no filling. ",rating: "3.5/5" },
    { name: "Chow Mein",description:"It's stir-fried noodles with vegetables and sometimes meat or tofu.", rating: "4.5/5" },
    { name: "Ma Po Tofu",description:"It consists of tofu set in a spicy sauce, typically a thin, oily, and bright red suspension, based on douban and douchi, along with minced meat, traditionally beef.", rating: "3/5" },
    { name: "Yangzhou Fried Rice",description:"It is a popular Chinese-style wok fried rice dish.", rating: "4/5" }
  ],

  Mexican: [
    { name: "Pozole",description:"It is made from hominy with meat, and can be seasoned and garnished with shredded lettuce or cabbage, chile peppers, onion, garlic, radishes, avocado, salsa or limes.", rating: "4/5" },
    { name: "Chiles en nogada",description:"Poblano chiles stuffed with picadillo topped with a walnut-based cream sauce, called nogada, pomegranate seeds and parsley.", rating: "4/5" },
    { name: "Enchiladas",description:"It is a corn tortilla rolled around a filling and covered with a savory sauce.", rating: "4/5" },
    { name: "Tostadas",description:"A flat or bowl-shaped tortilla that is deep fried or toasted.", rating: "4/5" },
    { name: "Mole",description:"A traditional sauce.", rating: "4/5" }
  ],
  Indian: [
    { name: "Pongal",description:"A dish of rice mixed with boiled milk and sugar.", rating: "4/5" },
    { name: "Masala Dosa",description:" It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.", rating: "4.5/5" },
    { name: "Parata",description:"It's a layers of cooked dough.", rating: "3/5" },
    { name: "Chicken Biryani",description:"It is made with Indian spices, rice, and meat usually that of chicken, goat, lamb, prawn, fish, and sometimes, in addition, eggs or vegetables such as potatoes in certain regional varieties.", rating: "3.5/5" },
    { name: "Bisibele Bath",description:"It is a spicy, rice-based dish.", rating: "4/5" }
  ],
  American: [
    { name: "Apple Pie",description:"It is often served with whipped cream, ice cream, or cheddar cheese. It is generally double-crusted, with pastry both above and below the filling; the upper crust may be solid or latticed.", rating: "4/5" },
    { name: "Hamburger",description:"A sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.", rating: "4.5/5" },
    { name: "Fries",description:"They are batonnet or allumette-cut deep-fried potatoes.", rating: "3/5" },
    { name: "Hominy Grits",description:"Type of grits made from hominy – corn that has been treated with an alkali in a process called nixtamalization, with the pericarp removed.", rating: "3.5/5" },
    { name: "Pizza",description:"It's a flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.", rating: "4/5" }
  ],
  Italian: [
    { name: "Lasagna",description:"A dish made of stacked layers of thin flat pasta alternating with fillings such as ragù and other vegetables, cheese, and seasonings and spices such as garlic, oregano and basil.", rating: "4/5" },
    { name: "Gelato",description:"A frozen dessert of Italian origin. It is made with a base of 3.25% butterfat whole milk and sugar.", rating: "4.5/5" },
    { name: "Focaccia",description:"A flat oven-baked Italian bread similar in style and texture to pizza.", rating: "3/5" },
    { name: "Spaghetti alla Carbonara",description:"Pasta dish from Rome made with eggs, hard cheese, cured pork, and black pepper.", rating: "3.5/5" },
    { name: "Cicchetti",description:"A small snacks or side dishes, typically served in traditional baccari.", rating: "4/5" }
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
        {Object.keys(foodDB).map((genre) => (
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
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
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
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div className='para'> {food.description} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
