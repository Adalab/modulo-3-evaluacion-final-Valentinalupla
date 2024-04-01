import PropTypes from 'prop-types';
import '../scss/components/CharacterDetail.scss';
import { Link } from 'react-router-dom';

function CharacterDetail( {character}) {
  return (
    
    <div className="cardDetail"> 
    <div>
    <Link className='buttonBack' to="/"> Go back </Link>
    </div>
        <div className='pictureCharacter'>
            <img  src={character.image} />
        </div>
          <h4> Name: {character.name}</h4>
          <span> Specie: {character.species}</span>
          <h5> Origin: {character.origin}</h5>
          <span>Gender: {character.gender}</span>
          <span>Episodes: {character.episode.length}</span> 
          <span>Status: {character.status}</span>
    <div>
        
        </div>

    </div>
  )
}

CharacterDetail.propTypes = {
  character: PropTypes.object
};


export default CharacterDetail