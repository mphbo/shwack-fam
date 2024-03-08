import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Visualizer = ({ audio }: { audio: null | HTMLAudioElement }) => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Experience audio={audio} />
      </Suspense>
    </Canvas>
  );
};

export default Visualizer;
