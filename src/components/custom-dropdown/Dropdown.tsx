import { useEffect, useRef, useState } from "react"
import { HiChevronDown } from "react-icons/hi";
import { canada_flag, cell_phone, nigeria_flag } from "../../constants/image";
import Button from "../button/Button";
import "./Dropdown.scss"
const Dropdown = ({allData}: any) => {
  const {id, title, items, quote, footer} = allData
  const [state, setState] = useState({ isOpen: false })
  const toggleContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler);

    return () => {
      window.removeEventListener('click', onClickOutsideHandler);
    }
    
  }, [state])

  const onClickHandler = () => {
    setState(currentState => ({ isOpen: !currentState.isOpen }))
  }

  const onClickOutsideHandler = (e: MouseEvent) => {
    if (toggleContainer.current && !toggleContainer.current.contains(e.target as Node)) {
      setState({ isOpen: false })
    }
  }
  return (
    <div className="dropdown__container" ref={toggleContainer} key={id}>
      <button className="dropdown_btn" onClick={onClickHandler}>
        <p>{title}</p>
        <HiChevronDown />
      </button>
      {state.isOpen && (
        <div className="dropdown__item_container">
          {
            items.length === 1 ? (
              
              <div className={title === "Resources" ? "dropdown__list_container1_blog" : "dropdown__list_container1"}>
                {
                  items.map((item: Record<string, string>) => (

                    <ul>
                      <li>{item.item1}</li>
                      <li>{item.item2}</li>
                      <li>{item.item3}</li>
                      <li>{item.item4}</li>
                      <li>{item.item5}</li>
                    </ul>
                  ))
                }
              </div>
            ) : (
              <div className="dropdown__list_container2">
                {
                  items.map((item: Record<string, string>) => (
                    <ul>
                      <li>{item.item1}</li>
                      <li>{item.item2}</li>
                      <li>{item.item3}</li>
                      <li>{item.item4}</li>
                      {
                        item.item5 && (
                          <li>{item.item5}</li>
                        ) 
                      }
                      {
                        item.item6 && (
                          <li>{item.item6}</li>
                        ) 
                      }
                      {
                        item.item7 && (
                          <li>{item.item7}</li>
                        ) 
                      }
                  
                    </ul>
                  ))
                }
              </div>
            )
          }

          {
            footer && (
              <div className="dropdown__footer">
                <div className="dropdown__footer_items_container">
                  <div>
                    <img src={nigeria_flag} alt="nigeria_flag" className="flags" />
                    <p>
                      <span><img src={cell_phone} alt="cell_phone" /></span>
                      (+234) 9138911913</p>
                  </div>
                  <div className="canada_sec">
                    <img src={canada_flag} alt="canada_flag" className="flags" />
                    <p>
                      <span><img src={cell_phone} alt="cell_phone"  /></span>
                      (+1) xxxxxxxxxx</p>
                  </div>
                </div>
              </div>
            )
          }

          {
            quote && (
                <Button> Get a Quote </Button>
            )
          }
        </div>
        
      )}
    </div>
  )
}

export default Dropdown