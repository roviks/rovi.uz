import React from "react";


const Footer = React.memo(function Footer({ className, lang }) {
  return (
    <footer id="footer" className={`footer  ${className ? className : ""}`}>
      
      {lang === "en" && <><div className="footer-right">© 2019-2021 rovi ibragimov.</div>
      <div className="footer-left">
        Developed with <i className="fa fa-heart text-danger"></i>
      </div></>}
      {lang === "ru" && <><div className="footer-right">© 2019-2021 рови ибрагимов.</div>
      <div className="footer-left">
        разработан с <i className="fa fa-heart text-danger"></i>
      </div></>}
    </footer>
    
  );
});

export default Footer;
