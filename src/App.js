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
  const [gifts, setGifts] = useState(datatwo);
  const [places, setPlaces] = useState(datathree);
  const [showText, setShowText] = useState(false);

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
      <Restaurant data={data} /> 
      <GiftList gifts={gifts} removeGift={removeGift} setGifts={setGifts} />
      <PlaceList places={places} removePlace={removePlace} showTextClick={showTextClick} />
    </div>
  );
}

export default App;


