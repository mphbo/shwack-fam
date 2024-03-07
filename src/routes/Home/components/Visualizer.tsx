import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Visualizer = ({ audioUrl }: { audioUrl: string }) => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  );
};

export default Visualizer;
