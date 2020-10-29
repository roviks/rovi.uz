import React from "react";
const Portfolio = React.memo(function Portfolio({ className, items }) {
  return (
    <section id="portfolio" className={`section ${className ? className : ""}`}>
      <h5 className="section-title">
        <svg
          id="svg2"
          className="section-svg"
          width="100"
          height="16"
          viewBox="0 0 100 16"
        >
          <defs>
            <clipPath id="b4">
              <rect width="100" height="16" />
            </clipPath>
          </defs>
          <g id="a" clipPath="url(#b4)">
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
        my <span className="text-neon">portfolio</span>
      </h5>
      <div className="section-content portfolio-content">
        {items &&
          items.map((item, index) => (
            <a
              href={item.url}
              className="portfolio-link"
              key={`${item}_${index}`}
            >
              <div className="portfolio-thumb">
                <img src={item.thumb} alt="" />
              </div>
              <div className="portfolio-title">{item.title}</div>
            </a>
          ))}
      </div>
    </section>
  );
});

export default Portfolio;
