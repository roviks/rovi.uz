import React from "react";
import { Link } from "react-router-dom";
const Navbar = React.memo(function Navbar({
  currentIndex,
  setIndex,
  onOpeningMenu,
}) {
  console.log("NAVBAR");
  const handleChangeSection = (index) => {
    setIndex(index);
  };
  const handleOpeningMenu = () => {
    onOpeningMenu();
  };
  return (
    <nav className="navbar">
      <button className="navbar-toggler" onClick={() => handleOpeningMenu()}>
        <div className="stick stick-1"></div>
        <div className="stick stick-2"></div>
        <div className="stick stick-3"></div>
      </button>
      <Link to="/en/" className="change-lang">
        EN
      </Link>
      {!document.body.classList.contains("is-mobile") ? (
        <>
          <div className="section-slider-counter current">
            {currentIndex + 1}
          </div>
          <div className="section-slider-ids">
            <a
              href="#header"
              onClick={() => handleChangeSection(0)}
              className={`anchor section-slider-id ${
                currentIndex === 0 && "active"
              }`}
            ></a>
            <a
              href="#about"
              onClick={() => handleChangeSection(1)}
              className={`anchor section-slider-id ${
                currentIndex === 1 && "active"
              }`}
            ></a>
            <a
              href="#skills"
              onClick={() => handleChangeSection(2)}
              className={`anchor section-slider-id ${
                currentIndex === 2 && "active"
              }`}
            ></a>
            <a
              href="#portfolio"
              onClick={() => handleChangeSection(3)}
              className={`anchor section-slider-id ${
                currentIndex === 3 && "active"
              }`}
            ></a>
            <a
              href="#contacts"
              onClick={() => handleChangeSection(4)}
              className={`anchor section-slider-id ${
                currentIndex === 4 && "active"
              }`}
            ></a>
          </div>
          <div className="section-slider-counter max">5</div>
        </>
      ) : (
        ""
      )}
    </nav>
  );
});

export default Navbar;
