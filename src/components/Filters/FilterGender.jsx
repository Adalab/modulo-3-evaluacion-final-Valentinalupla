import PropTypes from 'prop-types';

function FilterGender({onChangeGender, genderValue}) {


    const handleChangeGender = (ev) => {
      
        onChangeGender(ev.target.value);
    };

  return (
   
    <div className="speciesFilter">
        <label>GENDER 👩🏻  👨🏼 </label>
        <div className='humanAlien'>
        <label htmlFor="Female">Female</label>
        <input type="radio" 
        value="Female" 
        id="Female" 
        name="gender" 
        onChange={handleChangeGender}
        checked= {genderValue === "Female"}/>

        <label htmlFor="Male">Male</label>
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
FilterGender.PropTypes = {

  onChangeGender: PropTypes.func.isRequired,
  genderValue: PropTypes.string.isRequired
  
};

export default FilterGender;