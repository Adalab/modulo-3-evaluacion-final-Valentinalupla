import '../../scss/components/FilterName.scss';
function FilterName({onChangeName, namefilter}) {

    const handleChange = (ev) => {
        onChangeName(ev.target.value);
    }

    const handleKeyDown = (ev) => {
    if  (ev.key === 'Enter') {
      ev.preventDefault();

    };
    }
  return (
   <div className="filterName">
    <label htmlFor="name">BUSCA AQUI TU PERSONAJE FAVORITO</label>
    <input 
    type="text" 
    id="name" 
    onChange={handleChange} 
    onKeyDown={handleKeyDown}
    value={namefilter}/>
    </div>
  )
}

export default FilterName;