import React from "react";
import styles from "./intro.module.scss";

const Landing = () => {
  return (
    <>
      <video className={styles.video} muted autoPlay loop>
        <source src="/mandala.mp4" type="video/mp4" />
      </video>
      <div>
        <p className={styles.mainText}>Welcome to the Family</p>
      </div>
    </>
  );
};

export default Landing;
