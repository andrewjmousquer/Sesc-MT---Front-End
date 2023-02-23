import "./styles.scss";

import imageSrc from "../../assets/img/image-1.png";

export function HeroPages() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="content">
        <h1 className="title mb-2">SERVIÇOS</h1>

        <p className="subtitle mb-0">
          Veja os serviços que oferemos hoje no SESC-MT
        </p>
      </div>

      <div className="overlay" />
    </div>
  );
}
