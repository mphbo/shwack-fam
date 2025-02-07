import React from "react";
import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.main}>
      <img className={styles.video} src={"/polar bear.avif"} alt="small logo" />
      <div className={styles.welcomeContainer}>
        <div className={styles.tagline}>
          <h1>Tagline about</h1>
          <h1>NFT Project</h1>
        </div>
        <div className={styles.events}>
          <h2 className={styles.eventsText}>Optional Headline News Section:</h2>
          <h3 className={styles.event}>
            Minting - November 9th{" "}
            <span>
              (Could have active links here to larger news article below or
              separate page)
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
