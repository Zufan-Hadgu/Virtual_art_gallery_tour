import { useRef, useState } from 'react';
import { useTexture, useCursor } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function ArtworkFrame({ textureUrl, position, rotation }) {
  const ref = useRef();
  const texture = useTexture(textureUrl);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered); // changes cursor on hover

  // Optional: animate scale on hover
  useFrame(() => {
    if (ref.current) {
      ref.current.scale.x = hovered ? 1.05 : 1;
      ref.current.scale.y = hovered ? 1.05 : 1;
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      rotation={rotation}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation(); // prevent click-through
        alert(`You clicked: ${textureUrl.split('/').pop()}`);
      }}
    >
      <planeGeometry args={[2, 2.5]} />
      <meshStandardMaterial
        map={texture}
        side={2}
        toneMapped={false}
        color={hovered ? 'white' : 'white'}
        emissive={hovered ? '#444444' : 'black'}
        emissiveIntensity={hovered ? 0.3 : 0}
      />
    </mesh>
  );
}
