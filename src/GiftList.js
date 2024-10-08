import { useState } from 'react';
import { datatwo } from "./datatwo"; 

function GiftList() {
  const [gifts, setGifts] = useState(datatwo);

  const removeGift = (id) => {
    const newGifts = gifts.filter(gift => gift.idtwo !== id);
    setGifts(newGifts);
  };
   
  return (
    <div>
      <div className='container'>
        <h2>List of {gifts.length} gifts</h2>
      </div>

      {gifts.map((element) => {
        const { idtwo, gift, image } = element;

        return (
          <div key={idtwo}>
            <div className='container'>
              <h2>{idtwo}-{gift}</h2>
            </div>

            <div className='container'>
              <img src={image} width="300px" alt='gift'/>
            </div>

            <div className='container'>
              <button className='btn' onClick={() => removeGift(idtwo)}>Remove</button>
            </div>
          </div>
        );
      })}

      <div className='container'>
        <button onClick={() => setGifts([])}>Delete All</button>
      </div>
    </div>
  );
}

export default GiftList;





