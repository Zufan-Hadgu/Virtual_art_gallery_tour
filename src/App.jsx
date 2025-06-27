import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GalleryRoom from './components/GalleryRoom';
import ArtworkFrame from './components/ArtWorkFrame';
import Lights from './components/Lights';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 4, 20], fov: 45 }}>
      <color attach="background" args={['#111111']} />
      <Lights />
      <GalleryRoom />

      {/* === Back Wall Art (front-facing) === */}
      <ArtworkFrame textureUrl="/assets/images/art1.jpg" position={[-6, 2.5, -14.95]} />
      <ArtworkFrame textureUrl="/assets/images/art2.jpg" position={[0, 2.5, -14.95]} />
      <ArtworkFrame textureUrl="/assets/images/art3.jpg" position={[6, 2.5, -14.95]} />
{/* === Left Wall Art (side-view flush with wall) === */}
<ArtworkFrame textureUrl="/assets/images/art4.jpg" position={[-11.95, 2.5, -6]} rotation={[0, Math.PI / 2, 0]} />
<ArtworkFrame textureUrl="/assets/images/art5.jpg" position={[-11.95, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} />
<ArtworkFrame textureUrl="/assets/images/art6.jpg" position={[-11.95, 2.5, 6]} rotation={[0, Math.PI / 2, 0]} />

{/* === Right Wall Art (side-view flush with wall) === */}
<ArtworkFrame textureUrl="/assets/images/art5.jpg" position={[11.95, 2.5, -6]} rotation={[0, -Math.PI / 2, 0]} />
<ArtworkFrame textureUrl="/assets/images/art4.jpg" position={[11.95, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} />
<ArtworkFrame textureUrl="/assets/images/art6.jpg" position={[11.95, 2.5, 6]} rotation={[0, -Math.PI / 2, 0]} />


      {/* === Section Divider Art (grounded) === */}
      <ArtworkFrame textureUrl="/assets/images/art1.jpg" position={[0.75, 1.5, -5]} rotation={[0, -Math.PI / 2, 0]} />
      <ArtworkFrame textureUrl="/assets/images/art2.jpg" position={[-0.75, 1.5, 5]} rotation={[0, Math.PI / 2, 0]} />

      <OrbitControls />
    </Canvas>
  );
}

export default App;