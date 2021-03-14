import React from "react";
// import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
function Menu({ isOpenedMenu, lang, handleOpeningMenu }) {
  React.useEffect(() => {
    const duration =
      parseFloat(
        window.getComputedStyle(document.getElementById("menu"))
          .animationDuration
      ) * 1000;
    if (!isOpenedMenu) {
      setTimeout(() => {
        document.getElementById("menu").classList.remove("hide");
      }, duration);
    }
  }, [isOpenedMenu]);
  return (
    <div
      id="menu"
      role="navigation"
      className={classnames({
        show: isOpenedMenu,
        hide: isOpenedMenu === false,
      })}
    >
      <a
        href="#header"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
              
        { (lang === "en") && <>home</> }
        { (lang === "ru") && <>главная</> }

      </a>
      <a
        href="#about"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
      
        { (lang === "en") && <>about me</> }
        { (lang === "ru") && <>обо мне</> }
      </a>
      <a
        href="#skills"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
        
        { (lang === "en") && <>my skills</> }
        { (lang === "ru") && <>мои навыки</> }
      </a>
      <a
        href="#portfolio"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
        { (lang === "en") && <>my portfolio</> }
        { (lang === "ru") && <>мои работы</> }
      </a>
      <a
        href="#contacts"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
        { (lang === "en") && <>contacts</> }
        { (lang === "ru") && <>контакты</> }
      </a>
    </div>
  );
}

Menu.propTypes = {
  isOpenedMenu: PropTypes.bool,
  lang: PropTypes.string,
  handleOpeningMenu: PropTypes.func,
};
export default Menu;
