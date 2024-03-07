import { useEffect, useRef, useState } from "react";
import { useFrame, extend } from "@react-three/fiber";
import BlobShaderMaterial from "../shaders/blobShader";

const Blob = () => {
  const analyser = useRef(null);
  const dataArray = useRef(null);

  useEffect(() => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    analyser.current = audioContext.createAnalyser();
    analyser.current.fftSize = 256;

    const audio = new Audio("/back-to-the-matrix.mp3");
    audio.play();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser.current);
    analyser.current.connect(audioContext.destination);

    dataArray.current = new Uint8Array(analyser.current.frequencyBinCount);

    // Cleanup on component unmount
    return () => {
      audioContext.close();
    };
  }, []); // Empty dependency array to run the effect only once on mount
  extend({ BlobShaderMaterial });
  const blobRef = useRef(null);
  useFrame(({ clock }) => {
    analyser.current.getByteFrequencyData(dataArray.current);

    // Calculate the average frequency
    let sum = 0;
    for (let i = 0; i < dataArray.current.length; i++) {
      sum += dataArray.current[i];
    }

    const averageFrequency = sum / dataArray.current.length;
    console.log("Average Frequency:", averageFrequency);
    // @ts-ignore
    blobRef.current.uTime = clock.getElapsedTime();
    const value = analyser;
    // console.log(value);
    // @ts-ignore
    blobRef.current.uFrequency = averageFrequency / 75;
  });
  return (
    <mesh position-y={2.6} position-z={-2.8} scale={1.3}>
      <icosahedronGeometry args={[1.2, 20]} />
      {/* @ts-ignore */}
      <blobShaderMaterial ref={blobRef} wireframe />
    </mesh>
  );
};
export default Blob;
