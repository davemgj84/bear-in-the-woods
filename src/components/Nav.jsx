import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Nav.scss";
import bear from "../assets/bear.png";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">
          <LazyLoadImage
            className="logo"
            alt={"logo"}
            src={bear}
            effect="blur"
            placeholderSrc={bear}
          />
          <Link to={"/home"}>
            <h1>
              BEAR<p>in the</p>WOODS
            </h1>
          </Link>
        </div>
        <ul className={navActive ? "nav-active nav-links" : "nav-links"}>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgba(125, 110, 119, 0.4)",
                color: "#ffffff",
              }}
              onClick={() => setNavActive((prev) => !prev)}
              to={"/home"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgba(125, 110, 119, 0.4)",
                color: "#ffffff",
              }}
              onClick={() => setNavActive((prev) => !prev)}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "rgba(125, 110, 119, 0.4)",
                color: "#ffffff",
              }}
              onClick={() => setNavActive((prev) => !prev)}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          onClick={() => setNavActive((prev) => !prev)}
          className={navActive ? "burger toggle" : "burger"}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
