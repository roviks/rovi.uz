import React from "react";
// import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
function Menu({ isOpenedMenu, handleOpeningMenu }) {
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
        главная
      </a>
      <a
        href="#about"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
        обо мне
      </a>
      <a
        href="#skills"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
        мои навыки
      </a>
      <a
        href="#portfolio"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
        мои работы
      </a>
      <a
        href="#contacts"
        onClick={handleOpeningMenu}
        className="nav-link"
        role="menuitem"
      >
        контакты
      </a>
    </div>
  );
}

Menu.propTypes = {
  isOpenedMenu: PropTypes.bool,
  handleOpeningMenu: PropTypes.func,
};
export default Menu;
