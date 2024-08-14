import React, { useState } from 'react';

const Restaurant = ({ data }) => {
  const [restaurantIndex, setRestaurantIndex] = useState(0);
  const { id, name, description, address, image } = data[restaurantIndex];

  const previousRestaurant = () => {
    setRestaurantIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? data.length - 1 : newIndex;
    });
  };

  const nextRestaurant = () => {
    setRestaurantIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= data.length ? 0 : newIndex;
    });
  };

  return (
    <div>
      <div className="text">
        <h2>{id} - {name}</h2>
      </div>
      <div className="text">
        <h2>{description}</h2>
      </div>
      <div className="text">
        <h2>{address}</h2>
      </div>
      <div className="container">
        <img src={image} width="450px" alt="restaurant" />
      </div>
      <div className="btn container">
        <button onClick={previousRestaurant}>Previous</button>
        <button onClick={nextRestaurant}>Next</button>
      </div>
    </div>
  );
};

export default Restaurant;




