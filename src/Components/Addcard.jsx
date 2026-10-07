import React, { useState } from "react";

import { BsCart4 } from "react-icons/bs";
import "./Addcard.css";

import Curd from "../images/curdRice.jpg";
import Tomato from "../images/Tomato Rice Dish.jpg";
import Sambar from "../images/Sambar.jpg";
import Meal from "../images/Meals.jpg";
import Veg from "../images/Vegfriedrice.jpg";
import Panner from "../images/panner65.jpg";

function AddCart() {
  const foods = [
    {
      id: 1,
      name: "Curd Rice",
      price: 120,
      image: Curd,
    },
    {
      id: 2,
      name: "Tomato Rice",
      price: 130,
      image: Tomato,
    },
    {
      id: 3,
      name: "Sambar Sadham",
      price: 80,
      image: Sambar,
    },
    {
      id: 4,
      name: "Meals",
      price: 230,
      image: Meal,
    },
    {
      id: 5,
      name: "Veg-Fried Rice",
      price: 200,
      image: Veg,
    },
    {
      id: 6,
      name: "Paneer 65",
      price: 185,
      image: Panner,
    },
  ];

  const [cart, setCart] = useState([]);

  // Add food to cart
  function addToCart(food) {
    const existingFood = cart.find((item) => item.id === food.id);

    if (existingFood) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  }

  // Increase quantity
  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease quantity
  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1>🍴 Food Menu</h1>

      <div className="food-container">
        {foods.map((food) => (
          <div className="food" key={food.id}>
            <img
              src={food.image}
              alt={food.name}
              width="200"
              height="150"
            />

            <h3>{food.name}</h3>

            <p>₹{food.price}</p>

            <button onClick={() => addToCart(food)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      <h2><BsCart4 /> Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((food) => (
          <div className="cart-item" key={food.id}>
            <p>
              {food.name} - ₹{food.price} × {food.quantity}
            </p>

            <button onClick={() => decreaseQuantity(food.id)}>
              -
            </button>

            <span> {food.quantity} </span>

            <button onClick={() => increaseQuantity(food.id)}>
              +
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default AddCart;
