import React, { useState } from "react";
import "./Home.css";
// import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { Grid } from "@material-ui/core";
// import Alert from "../../components/Alert/Alert";
import Alert2 from "../../components/Alert/Alert2";
import Accordion from "../../components/Accordion/Accordion";
import Wrx from "../../pics/06wrxps3.jpg";
import SilverZ from "../../pics/370zSilver.jpg";
import CrxSi from "../../pics/crxsi.jpg";
import Menu from "../../components/Menu/Menu";

function Home() {
  const [firstName, setFirstName] = useState("");

  const changefirstName = () => {
    setFirstName("Jason");
  };
  const changesecondName = () => {
    setFirstName("Elijah");
  };
  return (
    <div className="root">
      <Grid container spacing={3}>
        {/* <Alert /> */}
        <Grid item xs={3}></Grid>
        <Button buttonName="Back" color="blue" onClick={changefirstName} />
        <Button buttonName="Home" color="pink" onClick={changesecondName} />
        <h1>{firstName}</h1>
        <Menu
          title="Elijah"
          firstItem="Hello"
          secondItem="World"
          thirdItem="Creator"
          onClick="https://www.youtube.com/watch?v=NisCkxU544c"
        />

        <Card
          initial="E"
          titleName={"06WRX"}
          date="03/30/2021"
          image={Wrx}
          bodyText="Magnificent 06 Wrx"
          Name="Owner: Elijah Xiong"
          Desc={
            <a href="https://www.youtube.com/watch?v=P8S1SNR8yJQ">
              Summary vid of my subie
            </a>
          }
        />
        <Card
          initial="M"
          titleName="370z"
          date="03/30/2021"
          image={SilverZ}
          bodyText="Le Drift Lord"
          Name="Owner: Marcell Coleman"
          Desc="Soldier Boi.
            Loves to cruise with friends and work on cars"
        />
        <Card
          titleName="CRXSI"
          date="03/30/2021"
          initials="I"
          image={CrxSi}
          bodyText="Honda King"
          Name="Owner: Isaiah Xiong"
          Desc="2nd Oldest in my family
            Loves to cruise with friends and family and work on cars."
        />
        <Accordion title="Bait 🐟" body="Tackle" body2="Hooks" />
        <Accordion
          title="Fishing Rods 🎣"
          body="Top Sellers"
          body2="Clearance Rods"
        />
        <Accordion title="Fishing Gear 👚" body="Backpacks" body2="Hats" />
        <Accordion title="Boats 🚤" body="Bass Boats" body2="Kayaks/Canoes" />
        <Alert2 />
      </Grid>
    </div>
  );
}

export default Home;
