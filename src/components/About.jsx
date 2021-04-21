import "../styles/About.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import concreteOne from "../assets/concrete/concrete1.jpg";
import concreteTwo from "../assets/concrete/concrete2.jpg";
import concreteThree from "../assets/concrete/concrete3.jpg";
import concreteFour from "../assets/concrete/concrete4.jpg";
import concreteFive from "../assets/concrete/concrete5.jpg";
import concreteSix from "../assets/concrete/concrete6.jpg";

const About = () => {
  const imageArray = [
    concreteOne,
    concreteTwo,
    concreteThree,
    concreteFour,
    concreteFive,
    concreteSix,
  ];

  const galleryImages = imageArray.map((item, index) => {
    return (
      <div key={index}>
        <img key={index} src={item} alt="concrete" />
      </div>
    );
  });

  return (
    <section className="about">
      <div className="wrapper">
        <Carousel
          className="gallery"
          swipeable={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          showStatus={false}
          showThumbs={false}
          transitionTime={600}
        >
          {galleryImages}
        </Carousel>
      </div>
    </section>
  );
};

export default About;
