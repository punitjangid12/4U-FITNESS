import React from "react";

export default function MealCard({ name, calories }) {
  return (
    <div className="bg-green-100 shadow-md rounded-lg p-4 hover:scale-105 transform transition-transform duration-300">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>Calories: {calories}</p>
    </div>
  );
}
