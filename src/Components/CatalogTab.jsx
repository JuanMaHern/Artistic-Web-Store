import "../Styles/CatalogTab.css"
import Ceramic from "../Img/Ceramic.jpg"

const CatalogTab = ({ ceramic }) => {
    return(
        <div className="catalogTab" >
            <span> <img className="img" src={Ceramic} /> </span>
            <span>{ceramic.title}</span>
            {ceramic.desc}
        </div>
    )
}
export default CatalogTab