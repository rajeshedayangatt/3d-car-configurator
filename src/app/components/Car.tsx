import { useGLTF } from "@react-three/drei";
import React from "react";

const Car = () => {
  const { scene } = useGLTF("car.glb");

  return (
    <primitive
      scale={1.6}
      rotation={[0, Math.PI / 5, 0]}
      castShadow
      receiveShadow
      object={scene}
    />
  );
};

export default Car;
