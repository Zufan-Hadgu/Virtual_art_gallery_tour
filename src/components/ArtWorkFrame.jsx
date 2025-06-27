import { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function ArtworkFrame({ textureUrl, position }) {
  const ref = useRef();
  const texture = useTexture(textureUrl);

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[2, 2.5, 0.1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}