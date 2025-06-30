import * as THREE from 'https://esm.sh/three@0.160.1';

export function setupLighting(scene) {

  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.7);
  dirLight1.position.set(10, 10, 10);
  dirLight1.castShadow = true;
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.7);
  dirLight2.position.set(-10, 10, -10);
  dirLight2.castShadow = false; 
  scene.add(dirLight2);
}
