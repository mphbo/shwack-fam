import { useEffect, useRef, useState } from "react";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
// @ts-ignore
import glsl from "babel-plugin-glsl/macro";
// @ts-ignore
import glslify from "glslify";

const shaderCode = glslify("../assets/shader.glsl");

export default function Experience() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Mesh>(null!);
  const ballRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // cubeRef.current.rotation.x += delta;
    // cubeRef.current.rotation.z += delta;
    ballRef.current.rotation.y -= delta * 2;
    // ballRef.current.rotation.x -= delta * 2;
    // ballRef.current.rotation.z -= delta * 2;
    // groupRef.current.rotation.x += delta * 0.25;
    // groupRef.current.rotation.z += delta * 0.5;
  });

  const uniforms = {
    u_resolution: {
      type: "v2",
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    u_time: { type: "f", value: 0.0 },
  };

  const WaveShaderMaterial = shaderMaterial(
    // Uniform
    { uColor: new THREE.Color(0.0, 1.0, 1.0) },
    // Vertex Shader
    glsl`
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    glsl`
    uniform vec3 uColor;
    void main() {
      gl_FragColor = vec4(uColor, 0.0);
    }
    `
  );

  extend({ WaveShaderMaterial });

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1} />
      <group ref={groupRef}>
        {/* <mesh position-x={2} ref={cubeRef} scale={1}>
          <boxGeometry />
          <meshStandardMaterial wireframe color="blue" />
        </mesh> */}
        <mesh ref={ballRef} scale={1}>
          <planeGeometry args={[3, 5]} />
          {/* {material && <primitive object={material} />} */}
          {/* <meshStandardMaterial color="red" /> */}
          {/* @ts-ignore */}
          <waveShaderMaterial />
          {/* <shaderMaterial  /> */}
        </mesh>
      </group>
    </>
  );
}
