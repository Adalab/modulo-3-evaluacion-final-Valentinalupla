// import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../scss/App.scss';
import characterInfo from "../services/characterInfo";
import CharacterList from "./CharacterList";
import Logo from "../images/logo.png";






const App = () => {

  const [characters, setCharacters]= useState([]);

  useEffect(() => {
    characterInfo().then((dataCharacter)=> {
      setCharacters(dataCharacter);
    });

  }, [])





  return (
    <div>
      <header>
      <h1>Rick and Morty</h1>
      <img src={Logo} alt={Logo}/>
      </header>
      <main>
        <CharacterList characters={characters}/>
        
      </main>
    </div>
  );
};

export default App;