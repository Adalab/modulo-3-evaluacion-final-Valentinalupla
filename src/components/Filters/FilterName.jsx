
function FilterName({onChangeName, namefilter}) {

    const handleChange = (ev) => {
        onChangeName(ev.target.value);
    }
  return (
   <>
    <label htmlFor="name"></label>
    <input type="text" id="name" onChange={handleChange} value={namefilter}/>
    </>
  )
}

export default FilterName