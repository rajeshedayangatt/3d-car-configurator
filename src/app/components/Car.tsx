import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import { Color } from "three";

const Car = ({ ...props }) => {
  const { scene } = useGLTF("car.glb");
  const carBody = scene.getObjectByName("DoorHandles");
  const carFrontLogo = scene.getObjectByName("FrontLogo");

  useEffect(() => {
    const clr = new Color(props.carBodyColor);
    (carBody as any).material.color = clr;
    (carBody as any).material.needsUpdate = true;
  }, [props.carBodyColor]);

  useEffect(() => {
    const clr = new Color(props.frontLogoColor);
    (carFrontLogo as any).material.color = clr;
    (carFrontLogo as any).material.needsUpdate = true;
  }, [props.frontLogoColor]);
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
