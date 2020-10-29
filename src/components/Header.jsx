import React from "react";
import "../scss/section.scss";
import "../scss/header-intro.scss";

function Header({ className }) {
  return (
    <header id="header" className={`section  ${className ? className : ""}`}>
      <div id="pic"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-12 text-center align-self-center">
            <svg
              className="section-svg"
              width="100"
              height="16"
              viewBox="0 0 100 16"
            >
              <defs>
                <clipPath id="b1">
                  <rect width="100" height="16" />
                </clipPath>
              </defs>
              <g id="a" clipPath="url(#b1)">
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
            <h1 className="header-title">
              <span className="text-neon">personal page</span> <br /> of
              ibragimov ravshan
            </h1>
            <div className="header-subtitle">junior front-end developer</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
