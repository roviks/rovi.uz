import React from "react";

const Skills = React.memo(function Skills({ className, lang, items }) {
  return (
    <section id="skills" className={`section  ${className ? className : ""}`}>
      <h5 className="section-title">
        <svg
          id="svg2"
          className="section-svg"
          width="100"
          height="16"
          viewBox="0 0 100 16"
        >
          <defs>
            <clipPath id="b3">
              <rect width="100" height="16" />
            </clipPath>
          </defs>
          <g id="a" clipPath="url(#b3)">
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
        { (lang === "en") && <>my <span className="text-neon">skills</span></> }
        { (lang === "ru") && <>мои <span className="text-neon">навыки</span></> }

      </h5>
      <div className="section-content container">
        {items &&
          items.map((item, index) => (
            <div className="skills-wrap" key={`${item.title}_${index}`}>
              <div className="skills-progress">
                <div className="skills-name">{item.title}</div>
                <div
                  className="skills-progress-percent"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <div className="skills-progress-value">{item.value}%</div>
            </div>
          ))}
      </div>
    </section>
  );
});

export default Skills;
