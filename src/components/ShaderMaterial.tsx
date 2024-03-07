import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { Vector3 } from "three";

const ShaderMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new Vector3(),
  },
  // Vertex shader
  `
  void main() {
    float noise = pnoise(position, vec3(10.0));
    float displacement = noise / 10.0;
    vec3 newPosition = position + normal * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
  `,
  // Fragment shader
  `
  uniform float time;
  uniform vec3 resolution;

  // ... (rest of your fragment shader code)

  void main() {
    // Your GLSL code here

    // Example: Set fragment color based on noise
    gl_FragColor = vec4(vec3(pnoise(gl_FragCoord.xyz, vec3(100.0))), 1.0);
  }
  `
);

extend({ ShaderMaterial });

const CustomShaderMaterial = () => {
  const shaderMaterialRef = useRef();

  useFrame(({ clock }) => {
    // shaderMaterialRef?.current?.time = clock.getElapsedTime();
  });

  // return <ShaderMaterial ref={shaderMaterialRef} />;
};

export default CustomShaderMaterial;
