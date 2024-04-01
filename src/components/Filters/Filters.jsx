import FilterGender from "./FilterGender";
import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";
import PropTypes from 'prop-types';



function Filters({onChangeName, namefilter, onChangeSpecies, specieFilter, onChangeGender, genderFilter}) {
  return (
    <form>
      <FilterName onChangeName={onChangeName} namefilter={namefilter}/>
      <FilterSpecies onChangeSpecies={onChangeSpecies} specieValue={specieFilter} />
      <FilterGender onChangeGender={onChangeGender}  genderValue={genderFilter}/>
    </form>
  )
}
Filters.PropTypes = {
  onChangeName: PropTypes.func.isRequired,
  onChangeSpecies: PropTypes.func.isRequired,
  onChangeGender: PropTypes.func.isRequired,
  namefilter: PropTypes.string.isRequired,
  specieFilter: PropTypes.string.isRequired,
  genderFilter: PropTypes.string.isRequired
  
};
export default Filters