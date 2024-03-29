import '../scss/components/CharacterDetail.scss';

function CharacterDetail( {character}) {
  return (
    <div className="cardDetail"> 
      <div className='pictureCharacter'>
        <img  src={character.image} />
      </div>
      <h4> Name: {character.name}</h4>
      <span> Specie: {character.species}</span>
      <h5> Origin: {character.origin}</h5>
      <span>Episodes: {character.episode.length}</span> 
      <span>Status: {character.status}</span>
      <span>Gender: {character.gender}</span>
    </div>
  )
}

export default CharacterDetail