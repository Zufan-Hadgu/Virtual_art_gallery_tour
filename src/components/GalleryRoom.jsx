import { useTexture } from '@react-three/drei';

export default function GalleryRoom() {
  const ceilingTexture = useTexture('/assets/images/cultural_ceiling.jpg');
  const windowTexture = useTexture('/assets/images/glass_texture.jpg');

  return (
    <group>
     
      <group position={[0, 0, 0]}>
     
        <mesh receiveShadow position={[0, -1, 0]}>
          <boxGeometry args={[24, 0.1, 30]} />
          <meshStandardMaterial color="#e67e22" />
        </mesh>

    
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[24, 0.1, 30]} />
          <meshStandardMaterial map={ceilingTexture} />
        </mesh>

     
        <mesh position={[0, 2.5, -15]}>
          <boxGeometry args={[24, 5, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

    
        <mesh position={[12, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[30, 5, 0.1]} />
          <meshStandardMaterial map={windowTexture} transparent opacity={0.3} />
        </mesh>

  
        <mesh position={[-12, 2.5, 6]}>
          <boxGeometry args={[0.1, 5, 18]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        
        <mesh position={[-12, 2.5, -14]}>
          <boxGeometry args={[0.1, 5, 2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

       
        <mesh position={[-11.95, 3.5, -13]}>
          <boxGeometry args={[0.1, 0.3, 2]} />
          <meshStandardMaterial color="black" />
        </mesh>

      
        <mesh position={[-11.95, 2.1, -14.9]}>
          <boxGeometry args={[0.1, 2.8, 0.2]} />
          <meshStandardMaterial color="black" />
        </mesh>

       
        <mesh position={[-11.95, 2.1, -11.1]}>
          <boxGeometry args={[0.1, 2.8, 0.2]} />
          <meshStandardMaterial color="black" />
        </mesh>

      
        <mesh position={[0, 2.5, -5]}>
          <boxGeometry args={[0.2, 3, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0, 2.5, 5]}>
          <boxGeometry args={[0.2, 3, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

     
      <group position={[-24, 0, 0]}>

        <mesh receiveShadow position={[0, -1, 0]}>
          <boxGeometry args={[24, 0.1, 30]} />
          <meshStandardMaterial color="#e67e22" />
        </mesh>

  
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[24, 0.1, 30]} />
          <meshStandardMaterial map={ceilingTexture} />
        </mesh>

    
        <mesh position={[0, 2.5, -15]}>
          <boxGeometry args={[24, 5, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[0, 2.5, 15]}>
          <boxGeometry args={[24, 5, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

    
        <mesh position={[-12, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[30, 5, 0.1]} />
          <meshStandardMaterial map={windowTexture} transparent opacity={0.3} />
        </mesh>

    
        <mesh position={[12, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[30, 5, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

      
        <mesh position={[0, 2.5, -5]}>
          <boxGeometry args={[0.2, 3, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0, 2.5, 5]}>
          <boxGeometry args={[0.2, 3, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  );
}