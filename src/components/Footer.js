import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
// import { auth } from "../firebase";

import '../assets/styles/Footer.css'

const Footer = () => {

  const user = useContext(UserContext);

  return (

    <footer className="Footer">
      <ul className="Footer__container">
        <li>CONTÁCTANOS</li>
        <li><a href="mailto:info@popets.co">info@popets.co</a></li>
      </ul>

    </footer>
  )
}

export default Footer