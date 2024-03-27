import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";

function Filters({onChangeName, namefilter, onChangeSpecies, specieFilter}) {
  return (
    <form>
      <FilterName onChangeName={onChangeName} namefilter={namefilter}/>
      <FilterSpecies onChangeSpecies={onChangeSpecies} specieValue={specieFilter}/>
    </form>
  )
}

export default Filters