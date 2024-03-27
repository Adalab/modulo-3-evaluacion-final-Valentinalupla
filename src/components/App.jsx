import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, matchPath, Link} from "react-router-dom";
import '../scss/App.scss';
import characterInfo from "../services/characterInfo";
import CharacterList from "./CharacterList";
import Logo from "../images/logo.png";
import Filters from './Filters/Filters';
import CharacterDetail from "./CharacterDetail";


const App = () => {

  const [characters, setCharacters]= useState([]);
  const [namefilter, setNamefilter]= useState('');
  const [specieFilter, setSpecieFilter]= useState();

  useEffect(() => {
    characterInfo().then((dataCharacter)=> {
      setCharacters(dataCharacter);
    });
  }, [])

  const handleChangeName = (value) => {
    
    setNamefilter(value);
  };

  const handleChangeSpecies = (value) => {
    setSpecieFilter(value);
  }

  const filteredCharacters = characters.filter((character)=> {
   return character.name.toLowerCase().includes(namefilter.toLowerCase());
  })
  .filter((character) => {
    return specieFilter ? specieFilter === character.species : true;
  });

  // id de la ruta character
  const { pathname } = useLocation();
  const characterDetailRoute = matchPath("/detailCharacter/:idCharacter", pathname);
  const idCharacter = characterDetailRoute ? parseInt(characterDetailRoute.params.idCharacter) : null;
  const characterDetailData = characters.find((character) => character.id === idCharacter);
  

  return (
    <div>
      <header>
      <img src={Logo} alt={Logo}/>
      </header>
      <main>
        <Routes>
          <Route  
          path="/" 
          
          element={
            <>
            <Filters 
            onChangeName={handleChangeName} 
            namefilter={namefilter} 
            onChangeSpecies={handleChangeSpecies}
            specieFilter={specieFilter}/>
            <CharacterList 
            characters={filteredCharacters}/>
          
            </>
          }/>
          <Route 
          path="/detailCharacter/:idCharacter" 
          element={<CharacterDetail  character={characterDetailData}  />}/> 
        </Routes>


       
      </main>
    </div>
  );
};

export default App;