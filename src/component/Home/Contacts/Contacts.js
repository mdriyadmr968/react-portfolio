import React from "react";
import "./Contacts.css";

import emailjs from "emailjs-com";
import { useRef } from "react";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("google", "template_11hcw1j", form.current, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container mb-5">
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
              <label for="name" className="label">
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
              <label for="email" className="label">
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
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button
              type="button"
              class="btn btn-warning font-weight-bold"
              id="Projects"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
