

function CharacterCard({ characterData }) {
  return (
    <li>
      <img src={characterData.image} alt={characterData.name} />
      <h4>{characterData.name}</h4>
      <span>{characterData.species}</span>
      <h5>{characterData.status}</h5>
      <h5>Localización: {characterData.location}</h5>
      <span>{characterData.gender}</span>
    </li>
  )
}

export default CharacterCard