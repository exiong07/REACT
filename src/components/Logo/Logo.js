import React from "react";
import "./Logo.css";
import Minime from "../../pics/minime.jpg";

function Logo() {
  return (
    // Created a logo with wrx pic
    <div>
      <img src={Minime} className="Logo" alt="06wrxpic" />
    </div>
  );
}

export default Logo;
