
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
   <>
    <label htmlFor="name"></label>
    <input 
    type="text" 
    id="name" 
    onChange={handleChange} 
    onKeyDown={handleKeyDown}
    value={namefilter}/>
    </>
  )
}

export default FilterName