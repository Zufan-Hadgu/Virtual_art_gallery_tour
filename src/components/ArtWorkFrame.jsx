import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function ArtworkFrame({ textureUrl, position, rotation }) {
  const ref = useRef();
  const texture = useTexture(textureUrl);

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <planeGeometry args={[2, 2.5]} />
      <meshStandardMaterial map={texture} side={2} /> {/* side=2 = DoubleSide */}
    </mesh>
  );
}
