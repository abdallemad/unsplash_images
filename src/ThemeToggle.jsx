import { useGlobalContext } from "./Context"
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'
export default function ThemeToggle(){
  const {darkTheme, toggleDarkTheme} = useGlobalContext()
  return <section className="toggle-container">
    <button className="dark-toggle" onClick={toggleDarkTheme}>
      {darkTheme?<BsFillMoonFill  className="toggle-icon" style={{color:'white'}}/>:
      <BsFillSunFill className="toggle-icon"/>}
    </button>
  </section>
}