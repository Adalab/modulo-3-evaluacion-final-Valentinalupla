import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../scss/components/CharacterCard.scss';


function CharacterCard({ characterData }) {
  return (
    
    <li className="liCard">
      <Link  className="liCard" to={`/detailCharacter/${characterData.id}`}>
      <img className="img" src={characterData.image} alt={characterData.name} />
      <h4>{characterData.name}</h4>
      <span>{characterData.species}</span>
      </Link>
    </li>
   
  )
}

CharacterCard.propTypes = {
  characterData: PropTypes.object.isRequired
};

export default CharacterCard