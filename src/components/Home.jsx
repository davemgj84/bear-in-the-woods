import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";
import "../styles/Home.scss";
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
      <div className="introduction">
        <h2>" Hardest Concrete in town! "</h2>
        <h2>" It's so smooth! "</h2>
        <h2>" He can create anything! "</h2>
        <h2>" His mustache is amazing! "</h2>
        <h3>
          <Link to={"/contact"}>Contact</Link> us now for a quote today!
        </h3>
      </div>
    </section>
  );
};

export default Home;
