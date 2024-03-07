import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Visualizer from "./routes/Home/components/Visualizer";
import Navbar from "./routes/Home/components/Navbar";
import styles from "./page.module.scss";
import { Router } from "react-router-dom";

function App() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);

  // useEffect(() => {
  //   setAudio(new Audio("/back-to-the-matrix.mp3"));
  // }, []);

  // useEffect(() => {
  //   audio?.play();
  // }, [audio]);

  return <div className="App"></div>;
}

export default App;
