import React from "react";
import "../scss/footer.scss";
const Footer = React.memo(function Footer({ className }) {
  return (
    <footer id="footer" className={`footer  ${className ? className : ""}`}>
      <div className="footer-right">© 2019-2021 rovi ibragimov.</div>
      <div className="footer-left">
        Developed with <i className="fa fa-heart text-danger"></i>
      </div>
    </footer>
  );
});

export default Footer;
