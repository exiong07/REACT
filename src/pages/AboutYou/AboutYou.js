import React from "react";
import "./AboutYou.css";

class AboutYou extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
    };
  }
  render() {
    return (
      <div className="AboutYou">
        <h2>About Me</h2>
      </div>
    );
  }
}

export default AboutYou;
