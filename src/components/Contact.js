import React from "react";
import "../css/contact.css";
import { useRef } from "react";
const Contact = () => {
  // handling form Submit posting data to googlesheets
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbySCKx9-y9UgrR0YdxDiPPIcaHeBspD2Ynzinm7Pti7FlniMMAVeYIc5lXo9h1Ow4PuMA/exec";
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then(() => {
        alert("Form submitted successfully");
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <>
      <section className="contactFormCont">
        <h2 className="contactHeading">Contact</h2>
        <div className="container">
          <form
            className="contactForm"
            method="POST"
            ref={formRef}
            onSubmit={handleSubmit}
            name="PortfolioForm"
          >
            <input
              className="inp"
              name="Name"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="inp"
              name="Email"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="msgArea"
              name="Message"
              type="text"
              placeholder="enter your Message..."
              rows={4}
              required
            ></textarea>
            <button className="contactBtn btn submitBtn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <footer className="footer">&copy; 2023 Danish Ali</footer>
    </>
  );
};

export default Contact;
