import PropTypes from 'prop-types';
import '../../scss/components/FilterName.scss';

function FilterName({onChangeName, namefilter}) {

    const handleChange = (ev) => {
        onChangeName(ev.target.value);
    }

    const handleKeyDown = (ev) => {
    if  (ev.key === 'Enter') {
      ev.preventDefault();
    }
    };

  return (
   <div className="filterName">
    <label htmlFor="name">🛸 SEARCH YOUR FAVORITE CHARACTER 🛸</label>
    <input 
    type="text" 
    id="name" 
    onChange={handleChange} 
    onKeyDown={handleKeyDown}
    value={namefilter}/>
    </div>
  )
}
FilterName.propTypes = {

  onChangeName: PropTypes.func.isRequired,
  namefilter: PropTypes.string.isRequired
  
};

export default FilterName;