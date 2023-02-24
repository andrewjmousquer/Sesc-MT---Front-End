import "./styles.scss";

export function Hero() {

  const imageSrc = require("../../../assets/video/COLÔNIA DE FÉRIAS SESC - 2022.mp4");

  return (
    <div className="hero">
      <video autoPlay loop muted src={imageSrc} className="hero__image" />
      <h1 className="hero__title">Lorem ipsum dolor</h1>
      <p className="hero__title_p">
        Serão executadas atividades lúdicas no espaço Recreativo propiciando
        desenvolvimento diversas habilidades: motoras, sociai e emocionais.
      </p>
      <p className="hero_footer">Role a página para baixo</p>
    </div>
  );
}

