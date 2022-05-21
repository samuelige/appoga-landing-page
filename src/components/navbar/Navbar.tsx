import "./Navbar.scss"
import { data } from "./data"
import Dropdown from "../custom-dropdown/Dropdown"

const Navbar = () => {
  return (
    <div className="nav__items">
      {
        data.map((item: Record<string, any>) => (
          <Dropdown allData={item}/>
        ))
      }
    </div>
  )
}

export default Navbar