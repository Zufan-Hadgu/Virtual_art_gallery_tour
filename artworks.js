import * as THREE from 'https://esm.sh/three@0.160.1';
import { GLTFLoader } from 'https://esm.sh/three@0.160.1/examples/jsm/loaders/GLTFLoader.js';

const gltfLoader = new GLTFLoader();

function loadSculpture(scene, path, scale, position) {
  gltfLoader.load(path, gltf => {
    const model = gltf.scene;
    model.scale.set(scale, scale, scale);
    model.position.set(...position);
    model.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(model);
  });
}

const loader = new THREE.TextureLoader();



function addArt(scene, img, pos, rot = [0, 0, 0], size = [2, 2.5, 0.1]) {
  const tex = loader.load(img);
  const mat = new THREE.MeshStandardMaterial({
    map: tex,
    roughness: 1,    
    metalness: 0      
  });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.castShadow = true;
  scene.add(mesh);
}


function addHangingArt(scene, img, anchorPos, cableLength = 2.5, frameSize = [2, 2.5, 0.1]) {
  const tex = loader.load(img);
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 1, metalness: 0 });
  const frame = new THREE.Mesh(new THREE.BoxGeometry(...frameSize), mat);

  // Calculate artwork position hanging below the anchor point
  const [x, y, z] = anchorPos;
  frame.position.set(x, y - cableLength, z);
  frame.castShadow = true;

  // Add hanging cables (use 2 thin cylinders for realism)
  const cableMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
  const cableGeo = new THREE.CylinderGeometry(0.02, 0.02, cableLength, 8);

  const cable1 = new THREE.Mesh(cableGeo, cableMat);
  const cable2 = new THREE.Mesh(cableGeo, cableMat);

  // Position the cables slightly offset left/right
  cable1.position.set(x - 0.4, y - cableLength / 2, z);
  cable2.position.set(x + 0.4, y - cableLength / 2, z);

  scene.add(frame, cable1, cable2);
}

export function addAllArtworks(scene) {
  // === Room 1: Back Wall ===
  addArt(scene, 'assets/art1.jpg', [-6, 2.0, -14.95]);
  addArt(scene, 'assets/art2.jpg', [0, 2.0, -14.95]);
  addArt(scene, 'assets/art3.jpg', [6, 2.0, -14.95]);

  // === Room 1: Left Wall (around door)
  addArt(scene, 'assets/art4.jpg', [-11.9, 2.0, -12], [0, Math.PI / 2, 0]);
  addArt(scene, 'assets/art5.jpg', [-11.9, 2.0, 12], [0, Math.PI / 2, 0]);

 
  addArt(scene, 'assets/art12.jpg', [11.9, 2.0, -6], [0, -Math.PI / 2, 0]);
  addArt(scene, 'assets/art13.jpg', [11.9, 2.0, 0], [0, -Math.PI / 2, 0]);
  addArt(scene, 'assets/art6.jpg', [11.9, 2.0, 6], [0, -Math.PI / 2, 0]);
 
  addArt(scene, 'assets/art1.jpg', [0.07, 1.5, -5], [0, -Math.PI / 2, 0]);
  addArt(scene, 'assets/art3.jpg', [-0.07, 1.5, -5], [0, Math.PI / 2, 0]);
  addArt(scene, 'assets/art2.jpg', [-0.07, 1.5, 5], [0, Math.PI / 2, 0]);
  addArt(scene, 'assets/art9.jpg', [0.07, 1.5, 5], [0, -Math.PI / 2, 0]);
 
  const offset = -24;
  addArt(scene, 'assets/art10.jpg', [offset + 0.07, 1.5, -5], [0, -Math.PI / 2, 0]);
  addArt(scene, 'assets/art11.jpg', [offset - 0.07, 1.5, -5], [0, Math.PI / 2, 0]);
  addArt(scene, 'assets/art14.jpg', [offset - 0.07, 1.5, 5], [0, Math.PI / 2, 0]);
  addArt(scene, 'assets/art7.webp', [offset + 0.07, 1.5, 5], [0, -Math.PI / 2, 0]);

  // Left white wall in Room 2 (x = -34), nicely spaced
addArt(scene, 'assets/art15.jpg', [-34, 2.0, -6], [0, Math.PI / 2, 0]);
addArt(scene, 'assets/art16.jpg', [-34, 2.0, 0], [0, Math.PI / 2, 0]);
addArt(scene, 'assets/art8.jpg', [-34, 2.0, 6], [0, Math.PI / 2, 0]);
addArt(scene, 'assets/art17.jpg', [-34, 2.0, 12], [0, Math.PI / 2, 0]);


  addHangingArt(scene, 'assets/art18.jpg', [-16, 5, -13]); 
  addHangingArt(scene, 'assets/art17.jpg', [-23, 5, -13]); 




    // Load 3D sculptures in second room (centered at x = 24)
        // Left side
// Thinker: Near left-back corner (looking toward Winged Victory)
gltfLoader.load('assets/the_thinker.glb', gltf => {
  const model = gltf.scene;
  model.scale.set(2.5, 2.5, 2.5);
  model.position.set(-34, -1, -12.5); // Back-left corner
  model.rotation.y = Math.PI /2 ;  // Face diagonally toward center
  model.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(model);
});

// Winged Victory: Near right-front corner (looking toward Thinker)
gltfLoader.load('assets/winged_victory.glb', gltf => {
  const model = gltf.scene;
  model.scale.set(0.08, 0.08, 0.08);
  model.position.set(-17, -1, 11); // Front-right corner
  model.rotation.y = -3 * Math.PI / 4; // Face diagonally toward center
  model.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(model);
});

 // === Sphinx on Pedestal ===



// Load and rotate the Sphinx to face the player when entering
gltfLoader.load('assets/sphinx_of_hatshepsut.glb', gltf => {
  const model = gltf.scene;

  model.scale.set(0.38, 0.38, 0.38);       // Slightly smaller
model.position.set(-24.05, 0.85, 2);   // Shifted left & slightly back

  // 🧭 Rotate 90 degrees so it looks TOWARD you when entering
model.rotation.y = Math.PI / 2;  // 180° to face you


  model.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(model);
});





}






