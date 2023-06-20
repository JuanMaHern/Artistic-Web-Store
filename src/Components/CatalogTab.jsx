import "../Styles/CatalogTab.css"
import Ceramic from "../Img/Ceramic.jpg"
import { useState } from "react"

const CatalogTab = ({ ceramic }) => {
    return (
        <div className="catalogTab" >
            <img className="img" src={Ceramic} />
            <span className="info">
                <h4>{ceramic.title}</h4>
                <p>{ceramic.desc}</p>
            </span>
        </div>
    )
}
export default CatalogTab