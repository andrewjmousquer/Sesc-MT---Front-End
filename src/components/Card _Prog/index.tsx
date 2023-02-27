import { Link } from "react-router-dom";

import "./styles.scss";

const img1 = require("../../assets/img/Rectangle 7.png");


export function Card_Prog(props: any) {
  return (
    <Link to={`${props.link}`}>
      <div className="card">
        <img
          src={img1}
          className="card-img-top img-fluid"
          alt={`SESC MT - ${props.title}`}
        />

        <div className="card-body">
          <h5 className="card-title mt-2 mb-3">{props.title}</h5>
          <p className="card-text mb-4 flexible">{props.description}</p>
          <br />
          <span>+ detalhes</span>
        </div>
      </div>
    </Link>
  );
}
