import CharacterCard from "./CharacterCard"
import '../scss/components/CharacterList.scss';

function CharacterList({characters, namefilter}) {
  return (
    <section className="containerList">
      <ul>
      {characters.map((character) => {
          return <CharacterCard key={character.id} characterData={character}/>;
        })}
        </ul>
        
    </section>
  );
}

export default CharacterList;