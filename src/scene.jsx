import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const scene = () => {
  let tex = useTexture("./image.png");
  let rot = useRef(null);
  useFrame((state, delta) => {
    rot.current.rotation.y += delta;
  });
  
  return (
    <group>
    <mesh ref={rot} rotation={[0, 1.5, 0.5]}>
      <cylinderGeometry args={[2, 2, 2, 50, 50, true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
    </group>
  );
};

export default scene;