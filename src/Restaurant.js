import { useState } from 'react';
import { data } from "./data";

function Restaurant() {
  const [restaurant, setRestaurant] = useState(0);
  const { id, name, description, address, image } = data[restaurant];

  const previousRestaurant = () => {
    setRestaurant((restaurant) => {
      restaurant--;
      if (restaurant < 0) {
        return data.length - 1;
      }
      return restaurant;
    });
  };

  const nextRestaurant = () => {
    setRestaurant((restaurant) => {
      restaurant++;
      if (restaurant > data.length - 1) {
        restaurant = 0;
      }
      return restaurant;
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
}

export default Restaurant;
