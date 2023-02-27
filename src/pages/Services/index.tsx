import { Navbar } from "../../components/Navbar";
import { HeroPages } from "../../components/HeroPages";
import { Card } from "../../components/Card";
import { PaginationDefault } from "../../components/Pagination";
import { Footer } from "../../components/Footer";


const heros = [
  {
    id: 1,
    title: "Serviços",
    description: "Veja os serviços que oferemos hoje no SESC-MT",
    img: "../../assets/img/image-1.png"
  },
]

const cards = [
  {
    id: 1,
    title: "Portal da Academia",
    description:
      "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
    link: "/academia",
  },
  {
    id: 2,
    title: "Cartão Sesc",
    description:
      "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
    link: "/academia",
  },
  {
    id: 3,
    title: "Cursos e Atividades Sesc Mato Grosso",
    description:
      "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
    link: "/academia",
  },
  {
    id: 4,
    title: "Contrato e Tabelas de Valores",
    description:
      "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
    link: "/academia",
  },
  {
    id: 5,
    title: "Editais PCG",
    description:
      "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
    link: "/academia",
  },
  {
    id: 6,
    title: "Fale Conosco",
    description:
      "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
    link: "/academia",
  },
];

export function Services() {
  return (
    <>
      <Navbar />
      {heros.map((hero) => {
        return (
          <HeroPages
          key={hero.id}
          title={hero.title}
          description={hero.description}
          />
        )
      })}

      <section className="container my-5">
        <section className="row">
          {cards.map((card) => {
            return (
              <section key={card.id} className="col col-md-6 col-lg-4 mb-5">
                <Card
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

      <PaginationDefault />

      <Footer />
    </>
  );
}
