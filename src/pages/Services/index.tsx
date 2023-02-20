import { Card } from "../../components/Card";
import { PaginationDefault } from "../../components/Pagination";

import "./styles.scss";

const cards = [
  {
    id: 1,
    backgroundColor: "#fbfdff",
    title: "Portal da Academia",
    description:
      "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a  atividade.",
  },
  {
    id: 2,
    backgroundColor: "#00162a",
    title: "Home",
    description: "Utilizando aparelhos próprios para a  atividade.",
  },
];

export function Services() {
  return (
    <>
      <section className="container my-5">
        <section className="card__wrap--outer">
          {cards.map((card) => {
            return (
              <section key={card.id} className="card__wrap--inner">
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  backgroundColor={card.backgroundColor}
                />
              </section>
            );
          })}
        </section>
      </section>

      <PaginationDefault />
    </>
  );
}
