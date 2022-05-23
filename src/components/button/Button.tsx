import './Button.scss'
interface btnType {
    children: React.ReactNode,
    defaultStyle?: boolean,
    handleClick?: () => void,
}
const Button = ({children, defaultStyle, handleClick} : btnType ) => {
  return (
    <button onClick={handleClick} className="defaultBtn">
      {children}
    </button>
  )
}

export default Button