"use client";

import { useGLTF } from "@react-three/drei";

export const ComputerModel = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <spotLight
        position={[-20, 50, 20]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, -1, -2, 2] : [0, -1, -1.5]}
        rotation={[-0.01, -0.2, -0.06]}
      />
    </mesh>
  );
};
