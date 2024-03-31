import CharacterCard from "./CharacterCard"
import '../scss/components/CharacterList.scss';

function CharacterList({characters}) {
  return (
    <section>
      <ul className="containerList">
      {characters
      .sort((name, compareName) =>  { 
        return name.name.localeCompare(compareName.name)
      })
      .map((character) => {
          return <CharacterCard key={character.id} characterData={character}/>;
        })}
        </ul>
        
    </section>
  );
}

export default CharacterList;