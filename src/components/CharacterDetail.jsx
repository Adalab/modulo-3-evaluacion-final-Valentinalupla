

function CharacterDetail( {character}) {
  return (
    <div>
       <img  src={character.image} />
      <h4>{character.name}</h4>
      <span>{character.species}</span>
      <h5>{character.origin}</h5>
      <h5>{character.episode.length}</h5> 
      <span>{character.status}</span>
      <span>{character.gender}</span>
    </div>
  )
}

export default CharacterDetail