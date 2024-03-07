import { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import BlobShaderMaterial from "../shaders/blobShader";

const Blob = () => {
  extend({ BlobShaderMaterial });
  const blobRef = useRef(null!);
  useFrame(({ clock }) => {
    // @ts-ignore
    return (blobRef.current.uTime = clock.getElapsedTime());
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
