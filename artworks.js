import * as THREE from 'https://esm.sh/three@0.160.1';

const loader = new THREE.TextureLoader();

function addArt(scene, img, pos, rot = [0, 0, 0], size = [2, 2.5, 0.1]) {
  const tex = loader.load(img);
  const mat = new THREE.MeshStandardMaterial({ map: tex });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), mat);
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  mesh.castShadow = true;
  scene.add(mesh);
}

export function addAllArtworks(scene) {
  addArt(scene, 'assets/art1.jpg', [-6, 2.0, -14.95]);
  addArt(scene, 'assets/art2.jpg', [0, 2.0, -14.95]);
  addArt(scene, 'assets/art3.jpg', [6, 2.0, -14.95]);
  addArt(scene, 'assets/art4.jpg', [-11.9, 2.0, -12], [0, Math.PI / 2, 0]);  
  addArt(scene, 'assets/art5.jpg', [-11.9, 2.0, 12], [0, Math.PI / 2, 0]);  

  addArt(scene, 'assets/art6.jpg', [-35.9, 2.0, 0], [0, Math.PI / 2, 0]);

  addArt(scene, 'assets/art5.jpg', [11.9, 2.0, -6], [0, -Math.PI / 2, 0]);
  addArt(scene, 'assets/art4.jpg', [11.9, 2.0, 0], [0, -Math.PI / 2, 0]);
  addArt(scene, 'assets/art6.jpg', [11.9, 2.0, 6], [0, -Math.PI / 2, 0]);
  addArt(scene, 'assets/art1.jpg', [0.75, 1.5, -5], [0, -Math.PI / 2, 0]);
  addArt(scene, 'assets/art2.jpg', [-0.75, 1.5, 5], [0, Math.PI / 2, 0]);
}