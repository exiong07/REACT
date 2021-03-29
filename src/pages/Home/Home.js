import React from "react";
import "./Home.css";
import Logo from "../../components/Logo/Logo";
// import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Card2 from "../../components/Card/Card2";
import Card3 from "../../components/Card/Card3";
import Card4 from "../../components/Card/Card4";
import Card5 from "../../components/Card/Card5";
import { Grid } from "@material-ui/core";
import Alert from "../../components/Alert/Alert";
import Alert2 from "../../components/Alert/Alert2";
// import Accordion from "../../components/Accordion/Accordion";

function Home() {
  return (
    <div>
      <div className="root">
        <Alert />
        Home Page!
        <Grid container spacing={5}>
          <Logo />
          <Card />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Alert2 />
          <Grid item xs={5}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
