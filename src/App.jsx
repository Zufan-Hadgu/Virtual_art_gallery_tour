import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GalleryRoom from './components/GalleryRoom';
import ArtworkFrame from './components/ArtWorkFrame';
import Lights from './components/Lights';

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 50 }}>
      <color attach="background" args={['#111111']} />
      <Lights />
      <GalleryRoom />

      {/* Sample artwork */}
      <ArtworkFrame textureUrl="/assets/images/art1.jpg" position={[-5, 1.5, -9.9]} />
      <ArtworkFrame textureUrl="/assets/images/art2.jpg" position={[0, 1.5, -9.9]} />
      <ArtworkFrame textureUrl="/assets/images/art3.jpg" position={[5, 1.5, -9.9]} />

      <OrbitControls />
    </Canvas>
  );
}

export default App;