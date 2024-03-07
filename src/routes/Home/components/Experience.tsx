import { useEffect, useRef, useState } from "react";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
// @ts-ignore
import glsl from "babel-plugin-glsl/macro";
// @ts-ignore
import glslify from "glslify";
import Blob from "./Blob";

const shaderCode = glslify("../assets/shader.glsl");

export default function Experience() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Mesh>(null!);
  const ballRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {});

  return (
    <>
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1} /> */}
      <group ref={groupRef}>
        <Blob />
      </group>
    </>
  );
}
