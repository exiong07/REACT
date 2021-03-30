import React from "react";

class AboutYou extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default AboutYou;
