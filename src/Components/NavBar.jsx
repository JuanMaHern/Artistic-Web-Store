import "../Styles/NavBar.css"

const NavBar = ({ window, setWindow }) => {
    const handleChangeTab = (e) => {
        console.log(e.target.childNodes[0].data)
        setWindow(e.target.childNodes[0].data)
    }
    return(
        <div className="navBar">
            <span className={window.tab === 'Home'? 'resalt' : null} onClick={handleChangeTab}>Home</span>
            <span className={window.tab === 'About Me'? 'resalt' : null} onClick={handleChangeTab}>About Me</span>
            <span className={window.tab === 'Ceramics'? 'resalt' : null} onClick={handleChangeTab}>Ceramics</span>
            <span className={window.tab === 'Order'? 'resalt' : null} onClick={handleChangeTab}>Order</span>
        </div>
    )
}
export default NavBar