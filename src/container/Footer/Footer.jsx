import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">A-2, Saurashtra Cement LTD, Ranavav, Porbandar, Gujarat</p>
        <p className="p__opensans">+91 92655xxxxx</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.brand} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Discover your new favorite restaurant with Adi's LocalEats today!.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>

    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 Adi's LocalEats. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
