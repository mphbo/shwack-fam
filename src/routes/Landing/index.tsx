import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import styles from "./page.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="App">
      <div className={styles.main}>
        <Link to="./home" className={styles.button}>
          ENTER
        </Link>
      </div>
    </div>
  );
}

export default Landing;
