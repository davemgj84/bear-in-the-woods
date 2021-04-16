import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Home.scss";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <section className="home">
      <div>
        <LazyLoadImage
          className="landing-logo"
          alt={"logo"}
          src={logo}
          effect="blur"
          placeholderSrc={logo}
        />
      </div>
    </section>
  );
};

export default Home;
