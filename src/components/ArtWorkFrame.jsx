import { useRef } from 'react';
import { useTexture } from '@react-three/drei';

export default function ArtworkFrame({ textureUrl, position }) {
  const ref = useRef();
  const texture = useTexture(textureUrl);

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[2, 2.5, 0.1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
