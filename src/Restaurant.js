import React from 'react';

const Restaurant = ({ id, name, description, address, image, previousRestaurant, nextRestaurant }) => {
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