import CharacterCard from "./CharacterCard"
import '../scss/components/CharacterList.scss';

function CharacterList({characters}) {
  return (
    <section className="sectionCharacterList">
      <ul>
      {characters.map((character) => {
          return <CharacterCard key={character.id} characterData={character}/>;
        })}
        </ul>
    </section>
  );
}

export default CharacterList;