import React from "react";
import axios from "axios";
import {
  Navbar,
  About,
  Skills,
  Portfolio,
  Contacts,
  Footer,
  Header,
  Menu,
} from "../components/";
import "../assets/css/bootstrap.min.css";
import "../assets/css/all.min.css";
import "../scss/index.scss";
import "../scss/section.scss";
import "../scss/section-about.scss";
import "../scss/section-contacts.scss";
import "../scss/section-portfolio.scss";
import "../scss/section-skills.scss";
import "../scss/section-slider.scss";
import "../scss/header-intro.scss";
import "../scss/mobile.scss";
import "../scss/footer.scss";
import "../scss/menu.scss";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function Home({lang}) {
  const [currentSection, setcurrentSection] = React.useState(0);
  const [skillItems, setskillItems] = React.useState([]);
  const [portfolioItems, setportfolioItems] = React.useState([]);
  const [isOpenedMenu, setisOpenedMenu] = React.useState(null);
  const sectionsLength = 5;
  const nextIndex = (e) => {
    if (e && !e.path.includes(document.getElementById("message"))) {
      if (currentSection + 1 >= sectionsLength) {
        setcurrentSection(0);
      } else {
        setcurrentSection(currentSection + 1);
      }
    }
  };
  const prevIndex = (e) => {
    if (e && !e.path.includes(document.getElementById("message"))) {
      if (currentSection - 1 < 0) {
        setcurrentSection(sectionsLength - 1);
      } else {
        setcurrentSection(currentSection - 1);
      }
    }
  };
  const setIndex = (index) => {
    if (index !== currentSection) {
      setcurrentSection(index);
    }
  };
  const onOpeningMenu = () => {
    if (isOpenedMenu) {
      setisOpenedMenu(false);
    } else {
      setisOpenedMenu(true);
    }
  };
  React.useEffect(() => {
    axios.get("https://roviks.github.io/db.json").then(({ data }) => {
      setportfolioItems(data.projects);
      setskillItems(data.skills);
    });
  }, []);
  return document.body.classList.contains("is-mobile") ? (
    <>
      <Menu lang={lang} isOpenedMenu={isOpenedMenu} handleOpeningMenu={onOpeningMenu} />
      <Navbar lang={lang} onOpeningMenu={onOpeningMenu} />
      <Header lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} items={skillItems} />
      <Portfolio lang={lang} items={portfolioItems} />
      <Contacts lang={lang} />
      <Footer lang={lang} />
    </>
  ) : (
      <ReactScrollWheelHandler
        upHandler={prevIndex}
        timeout={500}
        downHandler={nextIndex}
      >
        <Navbar lang={lang} currentIndex={currentSection} setIndex={setIndex} />
        <Header lang={lang} className={`${currentSection === 0 ? "active" : ""}`} />
        <About lang={lang} className={`${currentSection === 1 ? "active" : ""}`} />
        <Skills lang={lang}
          className={`${currentSection === 2 ? "active" : ""}`}
          items={skillItems}
        />
        <Portfolio lang={lang}
          className={`${currentSection === 3 ? "active" : ""}`}
          items={portfolioItems}
        />
        <Contacts lang={lang} className={`${currentSection === 4 ? "active" : ""}`} />
        <Footer lang={lang} className={`${currentSection === 4 ? "active" : ""}`} />
      </ReactScrollWheelHandler>
  );
}

export default Home;
