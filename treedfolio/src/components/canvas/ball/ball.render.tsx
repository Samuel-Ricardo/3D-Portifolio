import { CanvasLoader } from "@/components/loader.component";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BallModel } from "./ball.model";
import { OrbitControls, Preload } from "@react-three/drei";

export const Ball = ({ icon }: { icon: any }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <BallModel imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
