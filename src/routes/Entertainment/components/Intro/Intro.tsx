import React from "react";
import styles from "./intro.module.scss";

const Landing = () => {
  return (
    <>
      <video className={styles.video} muted autoPlay loop>
        <source src="/mandala.mp4" type="video/mp4" />
      </video>
      <div className={styles.welcomeContainer}>
        <img className={styles.welcomeLogo} src="/welcome.svg" />
      </div>
    </>
  );
};

export default Landing;
