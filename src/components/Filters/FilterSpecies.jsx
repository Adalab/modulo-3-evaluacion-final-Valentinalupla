import PropTypes from 'prop-types';
import '../../scss/components/FilterSpecies.scss';

function FilterSpecies({onChangeSpecies, specieValue}) {

    const handleChange = (ev) => {
        
      onChangeSpecies(ev.target.value);
    }

  return (
    <div className="speciesFilter">
        <div className='humanAlien'>
        <label>SPECIE </label>
        <label htmlFor="Human">👨🏻 Human</label>
        <input type="radio" 
        value="Human" 
        id="Human" 
        name="species" 
        onChange={handleChange}
        checked= {specieValue === "Human"}/>

        <label htmlFor="Alien">👽 Alien</label>
        <input type="radio" 
        value="Alien" 
        id="Alien" 
        name="species" 
        onChange={handleChange}
        checked= {specieValue === "Alien"}/>
        </div>
        
    </div>
  )
}

FilterSpecies.propTypes = {
  onChangeSpecies: PropTypes.func.isRequired,
  specieValue: PropTypes.string.isRequired,
};

export default FilterSpecies