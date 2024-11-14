import React from "react";
import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.main}>
      <video className={styles.video} muted autoPlay loop>
        <source src="/hex.mp4" type="video/mp4" />
      </video>
      <div className={styles.welcomeContainer}>
        {/* <img className={styles.welcomeLogo} src="/welcome.svg" /> */}
        <h1>WELCOME</h1>
        <h1>TO THE FAM</h1>
        <div className={styles.events}>
          <h2 className={styles.eventsText}>Events:</h2>
          <h3 className={styles.event}>GREGOLAND - November 9th</h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
