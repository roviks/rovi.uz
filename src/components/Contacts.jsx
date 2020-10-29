import React from "react";
import { Link } from "react-router-dom";

const Contacts = React.memo(function Contacts({ className }) {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  const handleChangeName = (e) => {
    console.log(e.target.value);
  };
  const handleChangeMessage = (e) => {
    console.log(e.target.value);
  };
  const handleChangeCapt = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <section id="contacts" className={`section  ${className ? className : ""}`}>
      <h5 className="section-title">
        <svg
          id="svg2"
          className="section-svg"
          width="100"
          height="16"
          viewBox="0 0 100 16"
        >
          <defs>
            <clipPath id="b5">
              <rect width="100" height="16" />
            </clipPath>
          </defs>
          <g id="a" clipPath="url(#b5)">
            <path
              d="M861,2550.928l11.181-11.181,11.181,11.181,11.181-11.181,11.181,11.181,11.181-11.181,11.181,11.181"
              transform="translate(945.021 2553.5) rotate(180)"
              fill="none"
              stroke="#0fa"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </g>
        </svg>
        <span className="text-neon">contacts</span>
      </h5>
      <div className="section-content contact-content container">
        <div className="section-subtitle">feedback</div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            autoComplete="off"
            name="name"
            className="form-control"
            placeholder="Your name or telegram*"
            onChange={handleChangeName}
            // required
          />
          <textarea
            name="message"
            autoComplete="off"
            id="message"
            className="form-control"
            placeholder="Your e-mail*"
            onChange={handleChangeMessage}
            // required
          ></textarea>
          <input
            type="text"
            autoComplete="off"
            name="capt"
            className="form-control"
            placeholder={`${a}+${b}`}
            onChange={handleChangeCapt}
            // required
          />
          <div className="form-tooltip">
            {a} + {b} =
          </div>
          <button type="submit" className="btn btn-contacts">
            SEND
          </button>
          <div className="row contacts-icon justify-content-between pt-3">
            <Link to="#" className="contacts-icon-link" title="Telegram">
              <i className="fab fa-telegram"></i>
            </Link>
            <Link to="#" className="contacts-icon-link" title="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="contacts-icon-link" title="Codepen">
              <i className="fab fa-codepen"></i>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
});

export default Contacts;
