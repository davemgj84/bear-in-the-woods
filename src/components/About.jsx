import "../styles/About.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import concreteOne from "../assets/concrete/concrete1.jpg";
import concreteTwo from "../assets/concrete/concrete2.jpg";
import concreteThree from "../assets/concrete/concrete3.jpg";
import concreteFour from "../assets/concrete/concrete4.jpg";
import concreteFive from "../assets/concrete/concrete5.jpg";
import concreteSix from "../assets/concrete/concrete6.jpg";

const About = () => {
  return (
    <section className="about">
      <Carousel
        className="gallery"
        width={"700px"}
        swipeable={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
        showStatus={false}
      >
        <div>
          <img src={concreteOne} alt="Concrete Work" />
        </div>
        <div>
          <img src={concreteTwo} alt="Concrete Work" />
        </div>
        <div>
          <img src={concreteThree} alt="Concrete Work" />
        </div>
        <div>
          <img src={concreteFour} alt="Concrete Work" />
        </div>
        <div>
          <img src={concreteFive} alt="Concrete Work" />
        </div>
        <div>
          <img src={concreteSix} alt="Concrete Work" />
        </div>
      </Carousel>
    </section>
  );
};

export default About;
