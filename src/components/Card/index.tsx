import "./styles.scss";

const img = require("../../assets/img/Rectangle 49.png");

// interface CardProps {
//   id?: Number;
//   backgroundColor?: String;
//   title?: String;
//   description?: String;
// }

export function Card(props: any) {
  return (
    <a href="/">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title m-0 pt-2 pb-3">{props.title}</h5>
          <p className="card-text m-0 pb-4 flexible">{props.description}</p>
          <span>+ detalhes</span>
        </div>
      </div>
    </a>
  );
}
