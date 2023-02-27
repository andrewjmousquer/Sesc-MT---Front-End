import { Footer } from '../../components/Footer'
import { HeroPages } from '../../components/HeroPages'
import { Navbar } from '../../components/Navbar'
import { FaMapMarkerAlt, } from "react-icons/fa";
import { CgCalendarToday, } from "react-icons/cg";
import { HiTicket, } from "react-icons/hi";
import { RiCheckboxMultipleBlankFill, } from "react-icons/ri";
import './style.scss'
import { Card_Prog } from '../../components/Card _Prog';



 export function Programming() {

  const cards = [
  {
    id: 1,
    title: "Pacote Fitness",
    description:
      "Serão executadas atividades lúdicas no espaço Recreativo propiciando desenvolvimento diversas habilidades: motoras, sociai e emocionais. E através das brincadeiras exploraremos a criatividade e a imaginação.",
    link: "/programacao",
  },
  {
    id: 2,
    title: "Recreação no Espaço Recreativo",
    description:
      "Serão executadas atividades lúdicas no espaço Recreativo propiciando desenvolvimento diversas habilidades: motoras, sociai e emocionais. E através das brincadeiras exploraremos a criatividade e a imaginação.",
    link: "/programacao",
  },
  {
    id: 3,
    title: "Recreação no Espaço Recreativo",
    description:
      "Serão executadas atividades lúdicas no espaço Recreativo propiciando desenvolvimento diversas habilidades: motoras, sociai e emocionais. E através das brincadeiras exploraremos a criatividade e a imaginação.",
    link: "/programacao",
  },
];
    return (
        <div>
          <Navbar />
          <HeroPages />
          <br />
          <div className='row'>
            <div className='col-8'>
          <h2>O que vamos fazer hoje</h2>
            </div>
            <div className='row'>
              <div className='col-md-3 background-radius'>
                <div className='col-md-3 icons_button'>
                  <button><FaMapMarkerAlt/> Digite a cidade ou unidade</button>
                </div>
                <div className='col-md-3 icons_button'>
                  <button><CgCalendarToday/> Selecione a data</button>
                </div>
                <div className='col-md-3 icons_button'>
                  <button><HiTicket/> Selecione a entrada</button>
                </div>
                <div className='icons_button'>
                  <button><RiCheckboxMultipleBlankFill/> Categoria desejada</button>
                </div>
              </div>
            </div>
                <section className="container my-5">
                  <section className="row">
                    {cards.map((card) => {
                      return (
                        <section key={card.id} className="col col-md-6 col-lg-4 mb-5">
                          <Card_Prog
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                          />
                        </section>
                      );
                    })}
                  </section>
                </section>
          </div>
          <br />
          <Footer />
        </div>
    )
}




