import "../Styles/Ceramics.css"
import CatalogTab from "./CatalogTab"
import CeramicsInv from "../JSON/CeramicsInv.json"
import { useState } from "react"
import Filter from "./Filter"

const Ceramics = () => {
    const [list, setList] = useState(CeramicsInv)
    const handleFilter = (e) => {
        const search = e.target.value
        let auxList = []
        if (search !== '') {
            for (let ceramic of CeramicsInv) {
                if (ceramic.title.includes(search)) {
                    auxList.push(ceramic)
                }
            }
            setList(auxList)
        } else {
            setList(CeramicsInv)
        }

    }
    return (
        <div className="ceramics">
            <Filter handleFilter={handleFilter} />
            <div className="ceramicsContainer">
                {list.map(ceramic => {
                    return <CatalogTab ceramic={ceramic} />
                })}
            </div>
        </div>
    )
}
export default Ceramics