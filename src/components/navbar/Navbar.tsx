import "./Navbar.scss"
import { data } from "./data"
import Dropdown from "../custom-dropdown/Dropdown"
import { appoga__logo } from "../../constants/image"
import { HiMenu, HiX } from "react-icons/hi"
import useToggle from "../customHooks/useToggle"

const Navbar = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={appoga__logo} alt="appoga logo" />
      </div>
      <div className="nav__items">
        {
          data.map((item: Record<string, any>) => (
            <Dropdown allData={item}/>
          ))
        }
      </div>

      <div className='nav-links-mobile'>
          {
            !value ? <HiMenu size={27} onClick={() => toggleValue(true)}/> 
            : <HiX size={27} onClick={() => toggleValue(false)}/>
          }

          {
            value && (
              <ul className="navbar-links_mb_container">
                {['Home', 'Company', 'work', 'Services', 'Products', 'Packages', 'Resources'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )
          }
      </div>
    </div>
  )
}

export default Navbar