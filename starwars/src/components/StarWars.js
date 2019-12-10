import React, { useState, useEffect } from 'react';
import axios from "axios";
import People from "../StarWarsCharacters";


const Character = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v1/sets")
    .then(res => {
      console.log(res.data.sets);
      // setData(res.data.sets);
    })
    .catch(error => {
      console.log(Error)
    })
  },[]);


  return (
    <div className="name">
      <h1> 
        {Data.map((Profile, index) => {
          return (
            <People  key = {index} 
            artist = {Profile.artist} 
            name = {Profile.name} 
            rarity = {Profile.rarity}  
            image = {Profile.imageUrl}
            />
            )
        })}
      </h1>
  
    </div>
 
  );
}
   
export default Character;