import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './Menu.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Institucional</NavLink>
            </li>
            <li>
              <NavLink to="/cartao-sesc">Cartão Sesc</NavLink>
            </li>
            <li>
              <NavLink to="/servicos">Serviços</NavLink>
            </li>
            <li>
              <NavLink to="/unidades">Unidades</NavLink>
            </li>
            <li>
              <NavLink to="/sesc-tv">Sesc TV</NavLink>
            </li>
          <input 
            className="searchInputs" 
            type="text" 
            placeholder="Buscar" 
            />   
            <button className="button__home">Entrar</button>    
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar