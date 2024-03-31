import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, matchPath, Link} from "react-router-dom";
import '../scss/App.scss';
import characterInfo from "../services/characterInfo";
import CharacterList from "./CharacterList";
import Header from './Header';
import Filters from './Filters/Filters';
import CharacterDetail from "./CharacterDetail";


const App = () => {

  const [characters, setCharacters]= useState([]);
  const [namefilter, setNamefilter]= useState('');
  const [specieFilter, setSpecieFilter]= useState('');
  const [genderFilter, setGenderFilter]= useState('');

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

  const handleGender = (value) => {
    setGenderFilter(value);
  }

  //filtro personajes 
  
  const filteredCharacters = characters.filter((character)=> {
   return character.name.toLowerCase().includes(namefilter.toLowerCase());
  })
  .filter((character) => {
    return specieFilter ? specieFilter === character.species : true;
  })
  .filter((character) => {
    return genderFilter ? genderFilter === character.gender : true;
  });

  // id de la ruta character
  const { pathname } = useLocation();
  const characterDetailRoute = matchPath("/detailCharacter/:idCharacter", pathname);
  const idCharacter = characterDetailRoute ? parseInt(characterDetailRoute.params.idCharacter) : null;
  const characterDetailData = characters.find((character) => character.id === idCharacter);
  

  return (
    <div className='containerApp'>
      <Header />
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
            specieFilter={specieFilter}
            onChangeGender={handleGender}
            genderFilter={genderFilter}
            />
            <CharacterList 
            characters={filteredCharacters}
            nameFilter={namefilter}/>
          
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