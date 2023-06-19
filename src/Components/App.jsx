import { useState } from "react"
import "../Styles/App.css"
import Home from "./Home"
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"
import Ceramics from "./Ceramics"
import Order from "./Order"
function App() {
  const [window, setWindow] = useState({ tab: 'Home', w: <Home /> })
  const handleTab = (tab) => {
    if (window.tab !== tab) {
      switch (tab) {
        case 'Home':
          setWindow({ tab: tab, w: <Home /> })
          break
        case 'About Me':
          setWindow({ tab: tab, w: <AboutMe /> })
          break
        case 'Ceramics':
          setWindow({ tab: tab, w: <Ceramics /> })
          break
        case 'Order':
          setWindow({ tab: tab, w: <Order /> })
          break
        default:
          break
      }
    }


  }

  return (
    <div className="app">
      <NavBar window={window} setWindow={handleTab} />
      {window.w}
    </div>
  )
}

export default App
