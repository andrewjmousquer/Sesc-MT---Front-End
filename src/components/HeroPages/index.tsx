import "./styles.scss";

import imageSrc from "../../assets/img/image-1.png";

export function HeroPages(props: any) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="hero__content">
        <h1 className="hero__content__title mb-2">{props.title}</h1>

        <p className="hero__content__subtitle mb-0">
          {props.description}
        </p>
      </div>

      <div className="hero__overlay" />
    </div>
  );
}
