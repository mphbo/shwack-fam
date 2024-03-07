import React, { useEffect, useState } from "react";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "./home.module.scss";

function Home() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  useEffect(() => {
    setAudio(new Audio("/back-to-the-matrix.mp3"));
  }, []);

  useEffect(() => {
    audio?.play();

    // TODO FIND A WAY TO ANALYZE AUDIO AND THEN FEED BACK INTO SHADER
    console.log({ audio });
  }, [audio]);

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.main}>
        <Visualizer audioUrl="/back-to-the-matrix.mp3" />
      </div>
      <div className={styles.main}>
        <Visualizer audioUrl="/back-to-the-matrix.mp3" />
      </div>
    </div>
  );
}

export default Home;
