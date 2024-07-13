// import { useState } from "react";
// import { data } from "./data";
// import { datatwo } from "./datatwo";
// import { datathree } from "./datathree";
// import headerImage from './3.jpg';
// import "./App.css";

// function App() {
//   const [person, setPerson] = useState(0);
//   const [gifts, setGifts] = useState(datatwo);
//   const [hotels, setHotels] = useState(datathree);
//   const [showText, setShowText] = useState(false);

//   const { id, name, description, address, image } = data[person];

//   const previousPerson = () => {
//     setPerson((person) => {
//       person--;
//       if (person < 0) {
//         return data.length - 1;
//       }
//       return person;
//     });
//   };

//   const nextPerson = () => {
//     setPerson((person) => {
//       person++;
//       if (person > data.length - 1) {
//         person = 0;
//       }
//       return person;
//     });
//   };

//   const removeGift = (idtwo) => {
//     let newGifts = gifts.filter((gift) => gift.idtwo !== idtwo);
//     setGifts(newGifts);
//   };

//   const removeHotel = (idthree) => {
//     let newHotels = hotels.filter((hotel) => hotel.idthree !== idthree);
//     setHotels(newHotels);
//   };

//   const showTextClick = (itemthree) => {
//     itemthree.showMore = !itemthree.showMore;
//     setShowText(!showText);
//   };

//   return (
//     <div>

//      <div className="header-image">
//         <img src={headerImage} alt="header" width="1500px" height="300px" />
//       </div>




//       <div>
//         <h1>WELCOME TO NEW YORK</h1>
//       </div>

//       <div className="text">
//         <h2>
//           {id} - {name}
//         </h2>
//       </div>

//       <div className="text">
//         <h2>{description}</h2>
//       </div>

//       <div className="text">
//         <h2>{address}</h2>
//       </div>

//       <div className="container">
//         <img src={image} width="450px" alt="person" />
//       </div>

//       <div className="btn container">
//         <button onClick={previousPerson}>Previous</button>
//         <button onClick={nextPerson}>Next</button>
//       </div>

//       <div>
//         <div className="container">
//           <h2>List of {gifts.length} gifts</h2>
//         </div>

//         {gifts.map((element) => {
//           const { idtwo, gift, image } = element;

//           return (
//             <div key={idtwo}>
//               <div className="container">
//                 <h2>
//                   {idtwo} - {gift}
//                 </h2>
//               </div>

//               <div className="container">
//                 <img src={image} width="300px" alt="gift" />
//               </div>

//               <div className="container">
//                 <button className="buttontwo" onClick={() => removeGift(idtwo)}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           );
//         })}

//         <div className="container">
//           <button className="buttontwo" onClick={() => setGifts([])}>
//             delete All
//           </button>
//         </div>
//       </div>

//       <div>
//         <div className="container">
//           <h2>NYC TOP {hotels.length} PLACEC</h2>
//         </div>

//         {hotels.map((itemthree) => {
//           const { idthree, PlaceName, description, image, source, showMore } = itemthree;
//           return (
//             <div key={idthree}>
//               <div className="container">
//                 <h2>
//                   {idthree} - {PlaceName}
//                 </h2>
//               </div>

//               <div className="container">
//                 <p>
//                   {showMore ? description : description.substring(0, 190) + "..."}
//                   <button className="buttonthree" onClick={() => showTextClick(itemthree)}>
//                     {showMore ? "Show less" : "Show more"}
//                   </button>
//                 </p>
//               </div>

//               <div className="container">
//                 <img src={image} width="500px" alt={PlaceName} />
//               </div>

//               <div className="container">
//                 <p>{source}</p>
//               </div>

//               <div className="container">
//                 <button className="btnthree" onClick={() => removeHotel(idthree)}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import { data } from "./data";
import { datatwo } from "./datatwo";
import { datathree } from "./datathree";
import headerImage from './3.jpg';
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
      <div className="header-image">
        <img src={headerImage} alt="header" width="1500px" height="300px" />
      </div>

      <div>
        <h1>WELCOME TO NEW YORK</h1>
      </div>

      <div className="text">
        <h2>
          {id} - {name}
        </h2>
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

      <div>
        <div className="container">
          <h2>List of {gifts.length} gifts</h2>
        </div>

        {gifts.map((element) => {
          const { idtwo, gift, image } = element;

          return (
            <div key={idtwo}>
              <div className="container">
                <h2>
                  {idtwo} - {gift}
                </h2>
              </div>

              <div className="container">
                <img src={image} width="300px" alt="gift" />
              </div>

              <div className="container">
                <button className="buttontwo" onClick={() => removeGift(idtwo)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}

        <div className="container">
          <button className="buttontwo" onClick={() => setGifts([])}>
            delete All
          </button>
        </div>
      </div>

      <div>
        <div className="container">
          <h2>NYC TOP {places.length} PLACES</h2>
        </div>

        {places.map((itemthree) => {
          const { idthree, PlaceName, description, image, source, showMore } = itemthree;
          return (
            <div key={idthree}>
              <div className="container">
                <h2>
                  {idthree} - {PlaceName}
                </h2>
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
                <button className="btnthree" onClick={() => removePlace(idthree)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

