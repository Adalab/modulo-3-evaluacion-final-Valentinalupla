import PropTypes from 'prop-types';
import '../../scss/components/FilterGender.scss';

function FilterGender({onChangeGender, genderValue}) {


    const handleChangeGender = (ev) => {
      
        onChangeGender(ev.target.value);
    };

  return (
   
    <div className="genderFilter">
        <div className='maleFemale'>
          
        <label>GENDER   </label>
        <label htmlFor="all">All</label>
          <input
            type="radio"
            name="gender"
            id="all"
            value=""
            onChange={handleChangeGender}
            checked={genderValue === ""}/>
          
        
        <label htmlFor="Female"> 👩🏻 Female</label>
        <input type="radio" 
        value="Female" 
        id="Female" 
        name="gender" 
        onChange={handleChangeGender}
        checked= {genderValue === "Female"}/>

        <label htmlFor="Male"> 👨🏼 Male</label>
        <input type="radio" 
        value="Male" 
        id="Male" 
        name="gender" 
        onChange={handleChangeGender}
        checked= {genderValue === "Male"}/>
        </div>
        
    </div>
   
  )

}
FilterGender.propTypes = {

  onChangeGender: PropTypes.func.isRequired,
  genderValue: PropTypes.string.isRequired
  
};

export default FilterGender;