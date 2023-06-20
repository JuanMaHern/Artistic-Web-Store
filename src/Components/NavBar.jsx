import "../Styles/NavBar.css"

const NavBar = ({ window, setWindow }) => {
    const handleChangeTab = (e) => {
        console.log(e.target.childNodes[0].data)
        setWindow(e.target.childNodes[0].data)
    }
    return(
        <div className="navBar">
            <span className={window.tab === 'Home'? 'navButton resalt' : 'navButton'} onClick={handleChangeTab}>Home</span>
            <span className={window.tab === 'About Me'? 'navButton resalt' : 'navButton'} onClick={handleChangeTab}>About Me</span>
            <span className={window.tab === 'Ceramics'? 'navButton resalt' : 'navButton'} onClick={handleChangeTab}>Ceramics</span>
            <span className={window.tab === 'Order'? 'navButton resalt' : 'navButton'} onClick={handleChangeTab}>Order</span>
        </div>
    )
}
export default NavBar