import "./index.scss"
import dncLogo from "../../assets/logodnc.png"

const Header = () => {
  return (
    <div className='header'>
      <img src={dncLogo} alt="dnc logo"/>
    </div>
  )
}

export default Header