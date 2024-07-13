import React from 'react';

const PlaceList = ({ places, removePlace, showTextClick }) => {
  return (
    <div>
      <div className="container">
        <h2>NYC TOP {places.length} PLACES</h2>
      </div>
      {places.map((itemthree) => {
        const { idthree, PlaceName, description, image, source, showMore } = itemthree;
        return (
          <div key={idthree}>
            <div className="container">
              <h2>{idthree} - {PlaceName}</h2>
            </div>
            <div className="container">
              <p>
                {showMore ? description : description.substring(0, 190) + "..."}
                <button className="buttonthree" onClick={() => showTextClick(itemthree)}>
                  {showMore ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
            <div className="container">
              <img src={image} width="500px" alt={PlaceName} />
            </div>
            <div className="container">
              <p>{source}</p>
            </div>
            <div className="container">
              <button className="btnthree" onClick={() => removePlace(idthree)}>Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaceList;