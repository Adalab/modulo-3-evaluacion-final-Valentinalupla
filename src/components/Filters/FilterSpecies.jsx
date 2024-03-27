

function FilterSpecies({onChangeSpecies, specieValue}) {

    const handleChange = (ev) => {
        
        onChangeSpecies(ev.target.value);
    }

  return (
    <div>
        <label>Especie</label>
        <label htmlFor="Human">Humano</label>
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
  )
}

export default FilterSpecies