import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Visualizer = ({ audioUrl }: { audioUrl: string }) => {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
};

export default Visualizer;
