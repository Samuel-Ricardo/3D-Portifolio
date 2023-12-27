"use client";

import { CanvasLoader } from "@/components/loader.component";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { StarsModel } from "./model.component";
import { Preload } from "@react-three/drei";

export const Stars = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader />}>
          <StarsModel />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};
