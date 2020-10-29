import React from 'react'
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import mobileDetect from "mobile-detect";

function App() {
   if (window.innerWidth < 767 || new mobileDetect(window.navigator.userAgent).mobile()) {
      document.body.classList.add("is-mobile");
   }
   return (
      <Router>
         <Route path="/" component={Home} />

      </Router>
   )
}

export default App
