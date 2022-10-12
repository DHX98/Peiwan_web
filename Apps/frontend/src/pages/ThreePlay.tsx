import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import Box from '@mui/material/Box';

function CanvaBox(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-return-assign
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      {/* eslint-disable-next-line react/no-unknown-property */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function ThreePlay() {
  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <pointLight position={[10, 10, 10]} />
        <CanvaBox position={[-1, 0, 0]} />
        <CanvaBox position={[1, 0, 0]} />
      </Canvas>
    </Box>

  );
}

export default ThreePlay;
