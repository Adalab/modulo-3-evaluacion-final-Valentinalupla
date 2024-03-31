import FilterGender from "./FilterGender";
import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";



function Filters({onChangeName, namefilter, onChangeSpecies, specieFilter, onChangeGender, genderFilter}) {
  return (
    <form>
      <FilterName onChangeName={onChangeName} namefilter={namefilter}/>
      <FilterSpecies onChangeSpecies={onChangeSpecies} specieValue={specieFilter} />
      <FilterGender onChangeGender={onChangeGender}  genderValue={genderFilter}/>
    </form>
  )
}

export default Filters