import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const triangleCount = 10;
const verticesCount = 3;
const vertexCount = 3;

const totalCount = triangleCount * verticesCount * vertexCount;

function CustomObject() {
  const geoRef = useRef<THREE.BufferGeometry>(null!);

  const positions = useMemo(() => {
    const positions = new Float32Array(totalCount);

    for (let i = 0; i < totalCount; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  useEffect(() => {
    geoRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount * triangleCount}
          itemSize={vertexCount}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
}

export default CustomObject;
