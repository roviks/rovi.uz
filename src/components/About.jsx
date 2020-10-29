import React from "react";
import "../scss/section.scss";
import "../scss/section-about.scss";
const About = React.memo(function About({ className }) {
  return (
    <section id="about" className={`section ${className ? className : ""}`}>
      <h5 className="section-title">
        <svg
          id="svg2"
          className="section-svg"
          width="100"
          height="16"
          viewBox="0 0 100 16"
        >
          <defs>
            <clipPath id="b2">
              <rect width="100" height="16" />
            </clipPath>
          </defs>
          <g id="a" clipPath="url(#b2)">
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
        <span className="text-neon">about</span> me
      </h5>
      <div className="section-content container about-content">
        <p>
          Hello! Thank you for visiting my site. I'm Ibragimov Ravshan, a junior
          front-end developer from Tashkent. I'm creating landing pages, web
          apps, logos.
        </p>
        <p>
          My goal and dream is to contribute in any way to the development of IT
          and beyond
        </p>
      </div>
    </section>
  );
});

export default About;
