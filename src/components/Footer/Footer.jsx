import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy;{new Date().getFullYear()} Kenyatta Profile | Made with React</p>
    </footer>
  );
};

export default Footer;
