import { useEffect, useRef, useState } from "react";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import BlobShaderMaterial from "../shaders/blobShader";

const Blob = () => {
  extend({ BlobShaderMaterial });
  const blobRef = useRef(null!);
  // @ts-ignore
  useFrame(({ clock }) => (blobRef.current.uTime = clock.getElapsedTime()));
  return (
    <mesh position-y={1} scale={1}>
      <icosahedronGeometry args={[1.5, 30]} />
      {/* @ts-ignore */}
      <blobShaderMaterial ref={blobRef} wireframe />
    </mesh>
  );
};
export default Blob;
