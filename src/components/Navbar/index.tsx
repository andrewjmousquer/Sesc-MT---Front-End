import { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./styles.scss";

const logoSesc = require("../../assets/img/logo Sesc.png");

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light fixed-top">
      <section className="navbar__content">
        <Link to="/" className="navbar__content__logo">
          <img src={logoSesc} alt="SESC-MT - Logo" />
        </Link>

        <nav
          className={`${"navbar__content__nav"}
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""}
          }`}
        >
          <ul>
            <li>
              <Link to="/">Institucional</Link>
            </li>
            <li>
              <Link to="/cartao-sesc">Cartão Sesc</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/unidades">Unidades</Link>
            </li>
            <li>
              <Link to="/programacao">Programação</Link>
            </li>
            <li>
              <Link to="/sesc-tv">Sesc TV</Link>
            </li>

            <input className="login" type="text" placeholder="Busca..." />

            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </ul>
        </nav>

        <div className="navbar__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </section>
    </header>
  );
}
