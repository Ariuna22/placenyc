import { useState } from 'react';
import { datathree } from "./datathree";


function PlaceList() {

  const[places, setPlaces] = useState (datathree);
  const [showMore, setShowMore]= useState (false);
  const removePlace =(id)=>{
    let newPlaces = places.filter ((place)=>place.idthree !== id)
    setPlaces(newPlaces);
  }

  return(
  <div>
    <div className='container'>
      <h2>Place List</h2>
    </div>

    {places.map((place=>{
      const{idthree, PlaceName, description, image, source}=place;
   
      return(
      <div key={idthree}>
        <div className='container'>
          <h2>{idthree} - {PlaceName}</h2>
        </div>

       <div className='container'>
        <p>{showMore ? description : description.substring(0,220) + "..."}
        <button onClick={()=>setShowMore (! showMore)}>{showMore ? "Show less" : "Show more"}</button></p>
       </div>
  
       <div className='container'>
        <img src={image} width="500px" alt="place"/>
       </div>

       <div className='container'>
        <p>{source}</p>
       </div>

       <div className='container'>
        <button className='btn' onClick={()=>removePlace (idthree)}>Remove</button>
       </div>

      </div>)
    }))}
  </div>)

  }

export default PlaceList;




