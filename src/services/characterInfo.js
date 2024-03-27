
const characterInfo = () => {
    return fetch("https://rickandmortyapi.com/api/character") 
      .then((response) => response.json())
      .then((data) => { 
       const transformCharacter = data.results.map((character => {
        return{
          id: character.id,
          name: character.name,
          status: character.status,
          image: character.image,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          location: character.location.name,
          episode: character.episode,
        }
       }));
       return transformCharacter;
      });
  };
  
  export default characterInfo;