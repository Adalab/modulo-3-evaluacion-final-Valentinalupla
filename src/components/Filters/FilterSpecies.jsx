import '../../scss/components/FilterSpecies.scss';

function FilterSpecies({onChangeSpecies, specieValue}) {

    const handleChange = (ev) => {
        
        onChangeSpecies(ev.target.value);
    }

  return (
    <div className="speciesFilter">
        <label>Especie</label>
        <div className='humanAlien'>
        <label htmlFor="Human">Human</label>
        <input type="radio" 
        value="Human" 
        id="Human" 
        name="species" 
        onChange={handleChange}
        checked= {specieValue === "Human"}/>

        <label htmlFor="Alien">Alien</label>
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

export default FilterSpecies