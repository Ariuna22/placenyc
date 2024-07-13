import React, { useState } from 'react';
import { data } from "./data";
import { datatwo } from "./datatwo";
import { datathree } from "./datathree";
import Header from './Header';
import Restaurant from './Restaurant';
import GiftList from './GiftList';
import PlaceList from './PlaceList';
import "./App.css";

function App() {
  const [restaurant, setRestaurant] = useState(0);
  const [gifts, setGifts] = useState(datatwo);
  const [places, setPlaces] = useState(datathree);
  const [showText, setShowText] = useState(false);

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

  const removeGift = (idtwo) => {
    let newGifts = gifts.filter((gift) => gift.idtwo !== idtwo);
    setGifts(newGifts);
  };

  const removePlace = (idthree) => {
    let newPlaces = places.filter((place) => place.idthree !== idthree);
    setPlaces(newPlaces);
  };

  const showTextClick = (itemthree) => {
    itemthree.showMore = !itemthree.showMore;
    setShowText(!showText);
  };

  return (
    <div>
      <Header />
      <Restaurant
        id={id}
        name={name}
        description={description}
        address={address}
        image={image}
        previousRestaurant={previousRestaurant}
        nextRestaurant={nextRestaurant}
      />
      <GiftList gifts={gifts} removeGift={removeGift} setGifts={setGifts} />
      <PlaceList places={places} removePlace={removePlace} showTextClick={showTextClick} />
    </div>
  );
}

export default App;


