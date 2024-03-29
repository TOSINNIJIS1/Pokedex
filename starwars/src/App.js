import React from 'react';
import "./components/StarWars";
import './App.css';
import Characters from "../src/components/StarWars"


const App = () => {
  
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header"> PokeDex </h1>
      <h1 className="cardContainer">
      <Characters  />
      </h1>
    </div>
 
  );
}

export default App;
