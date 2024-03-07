import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import BlobShaderMaterial from "../shaders/blobShader";

const Blob = () => {
  extend({ BlobShaderMaterial });
  const blobRef = useRef(null!);
  // @ts-ignore
  useFrame(({ clock }) => (blobRef.current.uTime = clock.getElapsedTime()));
  return (
    <mesh position-y={1.8} position-z={-2.8} scale={1.1}>
      <icosahedronGeometry args={[1.2, 30]} />
      {/* @ts-ignore */}
      <blobShaderMaterial ref={blobRef} wireframe />
    </mesh>
  );
};
export default Blob;
