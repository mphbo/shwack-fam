import React, { useEffect, useState } from "react";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "./home.module.scss";

function Home() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  useEffect(() => {
    setAudio(new Audio("/back-to-the-matrix.mp3"));
    const audioContext = new AudioContext();
  }, []);

  useEffect(() => {
    // audio?.play();

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
        <span
          style={{
            position: "absolute",
            margin: "60px 30px 0 30px",
            textAlign: "center",
          }}
        >
          DON'T WORRY THERE'S GONNA BE A BUNCH OF OTHER DOPE SHIT SOON, JUST
          KEEP THROWING FUCKING LOONIES IN THAT GOD DAMN ARKADE OKAY
        </span>
        <Visualizer audioUrl="/back-to-the-matrix.mp3" />
      </div>
    </div>
  );
}

export default Home;
