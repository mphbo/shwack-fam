import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Visualizer from "./components/Visualizer";
import Navbar from "./components/Navbar";
import styles from "./page.module.scss";

function App() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  // useEffect(() => {
  //   setAudio(new Audio("/back-to-the-matrix.mp3"));
  // }, []);

  // useEffect(() => {
  //   audio?.play();
  // }, [audio]);

  return (
    <div className="App">
      <Navbar />
      <div className={styles.main}>
        <Visualizer audioUrl="/back-to-the-matrix.mp3" />
      </div>
      <div>Here is more content</div>
    </div>
  );
}

export default App;
