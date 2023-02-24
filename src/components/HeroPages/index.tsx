import "./styles.scss";

import imageSrc from "../../assets/img/image-1.png";

export function HeroPages() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="hero__content">
        <h1 className="hero__content__title mb-2">SERVIÇOS</h1>

        <p className="hero__content__subtitle mb-0">
          Veja os serviços que oferemos hoje no SESC-MT
        </p>
      </div>

      <div className="hero__overlay" />
    </div>
  );
}
