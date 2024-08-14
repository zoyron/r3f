import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <mesh
        ref={cubeRef}
        position-x={2}
        scale={1.5}
        rotation-y={Math.PI * 0.25}
      >
        <boxGeometry />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh rotation-x={-Math.PI / 4} position={[0, -2, 0]} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
