import React from 'react';

const GiftList = ({ gifts, removeGift, setGifts }) => {
  return (
    <div>
      <div className="container">
        <h2>List of {gifts.length} gifts</h2>
      </div>
      {gifts.map((element) => {
        const { idtwo, gift, image } = element;
        return (
          <div key={idtwo}>
            <div className="container">
              <h2>{idtwo} - {gift}</h2>
            </div>
            <div className="container">
              <img src={image} width="300px" alt="gift" />
            </div>
            <div className="container">
              <button className="buttontwo" onClick={() => removeGift(idtwo)}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className="container">
        <button className="buttontwo" onClick={() => setGifts([])}>delete All</button>
      </div>
    </div>
  );
};

export default GiftList;