import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Home.scss";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <section className="home">
      <div>
        <LazyLoadImage
          className="logo"
          alt={"logo"}
          src={logo}
          effect="blur"
          placeholderSrc={logo}
        />
      </div>

      <h1>
        <i className="fas fa-tree"></i> Bear in the Woods{" "}
        <i className="fas fa-tree"></i>
      </h1>
      <h2>Construction</h2>
      <p>Website a Work in Progress...</p>
    </section>
  );
};

export default Home;
