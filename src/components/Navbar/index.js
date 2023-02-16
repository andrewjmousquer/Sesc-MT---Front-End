import React, { useState } from "react";
import "./styles.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbarLinks, placeholder, imageLogo }) => {
  // Determines if the "menu icon" was clicked or not. Note that this icon is only visible when the window width is small.
  
  const [navbar,setNavbar] = useState(false);

  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const changeBackground = () => {
    if(window.scrollY >= 680) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)



  return (
    <nav className= {navbar ? 'navbar_active' : 'navbar'}>
      <img src={imageLogo} alt="Sesc" className="navbar__logo"/>
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              <a className="navbar__link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}    
      </ul>   
        <div className="search"> 
            <input 
            className="searchInputs" 
            img={'AiOutlineSearch'}
            type="text" 
            placeholder={placeholder} 
            />     
        </div>  
        <button className="button__home">Entrar</button>       
    </nav>
  );
};

export default Navbar;
