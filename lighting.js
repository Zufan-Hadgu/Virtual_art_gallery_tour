import * as THREE from 'https://esm.sh/three@0.160.1';

export function setupLighting(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(10, 10, 10);
  dirLight.castShadow = true;

  scene.add(ambient);
  scene.add(dirLight);
}
