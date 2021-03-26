import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contacts">
        <div className="contact-container">
          <h1>Contact</h1>
          <h3>
            <a className="email" href="#" rel="noreferrer" target="_blank">
              <i className="far fa-envelope "></i>ian@mail.com
            </a>
          </h3>
          <h3>
            <a className="phone" href="tel:5551234567" rel="noreferrer">
              <i className="fas fa-mobile-alt"></i> (555) 555-5555
            </a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Contact;
