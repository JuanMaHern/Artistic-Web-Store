import "../Styles/Filter.css"

const Filter = ({ handleFilter }) => {
    return (
        <div className="filter">
            <input type="search" id="search" placeholder="Search ..." onChange={() => handleFilter(event)}></input>
            {/* <input id="cup" name="cup" type="checkbox" />
                <label htmlFor="cup">Cup</label>
                <input id="dish" name="dish" type="checkbox" />
                <label htmlFor="dish">Dish</label>
                <input id="bowl" name="bowl" type="checkbox" />
                <label htmlFor="bowl">Bowl</label> */}
            {/* <input type="checkbox">Cup</input>
            <input type="checkbox">Dish</input>
            <input type="checkbox">Bowl</input> */}
        </div>
    )
}
export default Filter