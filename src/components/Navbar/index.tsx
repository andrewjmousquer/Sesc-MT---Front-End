import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IMaskInput  } from "react-imask";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import "./styles.scss";

export function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoSesc = require("../../assets/img/logo Sesc.png");
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
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <img src={logoSesc} alt="Logo-Sesc" />
        </Link>
        <nav
          className={`${"header__content__nav"}
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
              <Button className="btn" onClick={handleShow}>Login</Button>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sesc-MT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                as={IMaskInput}
                type="cpf"
                mask="000.00.000-00"
                placeholder="Digite o seu CPF"
              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
              />
            </Form.Group>
            <InputGroup.Checkbox/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Entrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Criar a conta
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}
