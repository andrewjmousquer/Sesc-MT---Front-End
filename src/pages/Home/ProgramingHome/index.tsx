import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsCalendar3 } from "react-icons/bs";
import "./styles.scss";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
// import home_02 from "../../../assets/img/Educação.png";
// import home_03 from "../../../assets/img/Cultura.png";
// import home_04 from "../../../assets/img/Saúde.png";
// import home_05 from "../../../assets/img/Lazer.png";
// import home_06 from "../../../assets/img/Assitência.png";

const sliderImageUrl = [
  //imagem url
  {
    url:
      "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
  },
  {
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  //Second image url
  {
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
  },
  //Third image url
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
  },

  //Fourth image url

  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
  }
];
const ProgramingHome = () => {
  return (
    <div className="parent">
      <h1 className="programming__title">
        <BsCalendar3 /> &ensp;Programação
      </h1>
      <p className="programming_subtitle">
        Confira as programações de destaque da semana!{" "}
      </p>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default ProgramingHome;
