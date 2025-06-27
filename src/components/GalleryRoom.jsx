export default function GalleryRoom() {
  return (
    <group>
      {/* Floor */}
      <mesh receiveShadow position={[0, -1, 0]}>
        <boxGeometry args={[20, 0.1, 20]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 2.5, -10]}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color="#eeeeee" />
      </mesh>

      {/* Side Walls */}
      <mesh position={[10, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color="#eeeeee" />
      </mesh>

      <mesh position={[-10, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[20, 5, 0.1]} />
        <meshStandardMaterial color="#eeeeee" />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[20, 0.1, 20]} />
        <meshStandardMaterial color="#f4f4f4" />
      </mesh>
    </group>
  );
}