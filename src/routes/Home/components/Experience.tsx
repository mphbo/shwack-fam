import { useRef } from "react";
import * as THREE from "three";
import Blob from "./Blob";

export default function Experience() {
  const groupRef = useRef<THREE.Group>(null!);

  return (
    <>
      <group ref={groupRef}>
        <Blob />
      </group>
    </>
  );
}
