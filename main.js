import * as THREE from 'https://esm.sh/three@0.160.1';
import { PointerLockControls } from 'https://esm.sh/three@0.160.1/examples/jsm/controls/PointerLockControls.js';
import { setupLighting } from './lighting.js';
import { createRoom } from './room.js';
import { addAllArtworks } from './artworks.js';

// === Scene & Camera Setup ===
const scene = new THREE.Scene();
scene.background = new THREE.Color('#111');

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 20);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.getElementById('container').appendChild(renderer.domElement);

// === Controls ===
const controls = new PointerLockControls(camera, renderer.domElement);
scene.add(controls.getObject());

// === Entry Overlay ===
const blocker = document.createElement('div');
blocker.style.position = 'absolute';
blocker.style.top = 0;
blocker.style.left = 0;
blocker.style.right = 0;
blocker.style.bottom = 0;
blocker.style.backgroundColor = 'rgba(0,0,0,0.6)';
blocker.style.display = 'flex';
blocker.style.alignItems = 'center';
blocker.style.justifyContent = 'center';
blocker.style.color = '#fff';
blocker.style.font = '20px sans-serif';
blocker.style.cursor = 'pointer';
blocker.innerText = 'Click to explore the gallery';
document.body.appendChild(blocker);

blocker.addEventListener('click', () => {
  controls.lock();
  blocker.style.display = 'none';
});

controls.addEventListener('unlock', () => {
  blocker.style.display = 'flex';
});

// === Movement Setup ===
const keys = {};
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

document.addEventListener('keydown', (e) => (keys[e.code] = true));
document.addEventListener('keyup', (e) => (keys[e.code] = false));

// === Gallery Setup ===
setupLighting(scene);
createRoom(scene, 0, 'door', false);       // Room 1 with centered doorway
createRoom(scene, -24, 'solid', true);     // Room 2 behind it
addAllArtworks(scene);

// === Resize Support ===
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// === Animation Loop ===
function animate() {
  requestAnimationFrame(animate);

  // Reset and calculate movement direction
  direction.set(0, 0, 0);
  if (keys['KeyW']) direction.z -= 1;
  if (keys['KeyS']) direction.z += 1;
  if (keys['KeyA']) direction.x -= 1;
  if (keys['KeyD']) direction.x += 1;

  direction.normalize();
  velocity.copy(direction).multiplyScalar(0.15);

  // Apply camera-relative movement
  controls.moveForward(velocity.z);
  controls.moveRight(velocity.x);

  renderer.render(scene, camera);
}
animate();