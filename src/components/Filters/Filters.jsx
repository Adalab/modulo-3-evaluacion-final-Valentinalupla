import FilterName from "./FilterName";
function Filters({onChangeName, namefilter}) {
  return (
    <form>
      <FilterName onChangeName={onChangeName}namefilter={namefilter}/>
    </form>
  )
}

export default Filters