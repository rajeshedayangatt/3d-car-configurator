"use client";
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Car from "./Car";
import { Environment, OrbitControls } from "@react-three/drei";
import { Ground } from "./Ground";
import { useControls, Leva } from "leva";

const CanvasRender = (): JSX.Element => {
  const { frontLogoColor } = useControls({ frontLogoColor: "#f00" });
  const { carBodyColor } = useControls({ carBodyColor: "#f00" });

  return (
    <div className="w-full h-full">
      <Canvas camera={{ fov: 75, position: [0, 5, 5] }}>
        <ambientLight intensity={1} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.25}
          makeDefault
        />
        <Suspense fallback={null}>
          <Environment
            resolution={256}
            background={true}
            blur={10}
            files="piazza_san_marco_1k.hdr"
          ></Environment>
          <Car frontLogoColor={frontLogoColor} carBodyColor={carBodyColor} />
          <Ground />
        </Suspense>
      </Canvas>

      <Leva />
    </div>
  );
};

export default CanvasRender;
