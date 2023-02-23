import { SocialIcon } from "react-social-icons";
import "./styles.scss"


function Footer() {
    return (
      <div id="footer-wrap">
        <footer className="footer">
          <div className="top-footer">
            <div className="row">
              <div className="col-md-2">
                <h4>Cartão Sesc</h4>
                <ul className="footer-link">
                  <li>
                    <a href="#" title="Credenciamento">
                      Credenciamento
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Beneficios">
                      Benefícios
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h4>Serviços</h4>
                <ul className="footer-link">
                  <li>
                    <a href="#" title="Portal do Cliente">
                      Portal do Cliente
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Portal da Academia">
                      Portal da Academia
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Editais PCG">
                      Editais PCG
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Fale Conosco">
                      Fale Conosco
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Programação</h4>
                <ul className="footer-link">
                  <li>
                    <a href="#" title="Programação_Hoje">
                      Hoje
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Programação_Amanha">
                      Amanhã
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Programação_Próxima_Semana">
                      Próxima Semana
                    </a>
                  </li>
                  <li>
                    <div className="icons">
                      <SocialIcon
                        href="#"
                        title="Facebook"
                        network="facebook"
                        bgColor="#ffffff"
                      />
                      <SocialIcon
                        href="#"
                        title="Link"
                        network=""
                        bgColor="#ffffff"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="row">
              <div className="col-md-5">
              <div className="col-md-3">
                <div className="footer-logo">
                  <a href="/" title="Sesc_Logo">
                    <img
                      src="../../assets/img/logo Sesc.png"
                      width="72"
                      alt="Sesc_Logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
                <p className="copyright pt-3">
                  Copyright &copy; 2022 Sesc Mato Grosso
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
export default Footer;
