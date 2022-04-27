import React, { useState } from "react";
import "./Contacts.css";

import * as emailjs from "emailjs-com";
import { useRef } from "react";

const Result = () => {
  return (
    <p className="successfull-message">Your message has been successfully sent. I will replay soon</p>
  )
}

const Contacts = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a7ild39",
        "template_3jxk5xe",
        e.target,
        "gFTChgkyuYNSn3Y7h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true);

  };
  return (
    <div className="container mt-5 mb-5 pt-5 " id="Contact">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">CONTACT</h1>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you <br /> as soon as possible
          </p>
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail} className="form-container">
            {/* <!-- name --> */}
            <div className="form-group">
              <label for="name" className="label" name="name">
                Name
              </label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label for="email" className="label" name="user-email">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            <div className="form-group">
              <label for="email_body" className="label">
                Message
              </label>
              <textarea
                className="form-control"
                name="message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-warning font-weight-bold">
              SUBMIT
            </button>
            <div className="row">{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
