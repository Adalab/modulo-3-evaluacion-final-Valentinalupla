import { Link } from "react-router-dom";
import '../scss/components/CharacterCard.scss';

function CharacterCard({ characterData }) {
  return (
    <li className="liCard">
      <Link to={`/detailCharacter/${characterData.id}`}>
      <img src={characterData.image} alt={characterData.name} />
      <h4>{characterData.name}</h4>
      <span>{characterData.species}</span>
      </Link>
    </li>
  )
}

export default CharacterCard