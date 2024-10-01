"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Car from "./Car";
import { Environment, OrbitControls } from "@react-three/drei";
import { Ground } from "./Ground";

const CanvasRender = (): JSX.Element => {
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
          <Car />
          <Ground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasRender;
