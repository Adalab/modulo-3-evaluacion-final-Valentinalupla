

function CharacterDetail( {Character}) {
  return (
    <div>
       <img  src={Character.image} />
      <h4>{Character.name}</h4>
      <span>{Character.species}</span>
      <h5>{Character.origin.name}</h5>
      <h5>{Character.episode}</h5>
      <span>{Character.status}</span>
    </div>
  )
}

export default CharacterDetail