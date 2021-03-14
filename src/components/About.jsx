import React from "react";
const About = React.memo(function About({ className, lang }) {
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
        { (lang === "en") && <><span className="text-neon">about</span> me</> }
        { (lang === "ru") && <><span className="text-neon">обо</span> мне</> }
      </h5>
      <div className="section-content container about-content">
      { (lang === "en") && <><p>
          Hello! Thank you for visiting my site. I'm Ibragimov Ravshan, a junior front-end developer from Tashkent. I'm creating landing pages, web apps, logos.
        </p>
        <p>
          Contributing to the development of IT is my dream and purpose.
        </p></> }
        { (lang === "ru") && <><p>
        Привет! Благодарю вас за посещение моего сайта. Я Ибрагимов Равшан, джуниор фронт-енд разработчик из Ташкента. Я создаю лендинг-сайты, веб-приложения, логотипы.</p>
        <p>
          Моя цель и мечта - внести свой вклад в развитие ИТ и не только.
        </p></> }
        
      </div>
    </section>
  );
});

export default About;
