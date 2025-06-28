import * as THREE from 'https://esm.sh/three@0.160.1';

export function createRoom(scene, offsetX = 0, leftWallType = 'solid', hasFrontWall = false) {
  const loader = new THREE.TextureLoader();
  const ceilingTex = loader.load('assets/cultural_ceiling.jpg');
  const glassTex = loader.load('assets/glass_texture.jpg');

  const white = new THREE.MeshStandardMaterial({ color: '#ffffff' });
  const floorMat = new THREE.MeshStandardMaterial({ color: '#e67e22' });
  const ceilingMat = new THREE.MeshStandardMaterial({ map: ceilingTex });
  const glass = new THREE.MeshStandardMaterial({ map: glassTex, transparent: true, opacity: 0.3 });
  const black = new THREE.MeshStandardMaterial({ color: '#000000' });
  const orange = new THREE.MeshStandardMaterial({ color: '#e67e22' }); // handle color

  const createBox = ({ w, h, d, mat, pos }) => {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...pos);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
  };

  createBox({ w: 24, h: 0.1, d: 30, mat: floorMat, pos: [offsetX, -1, 0] });
  createBox({ w: 24, h: 0.1, d: 30, mat: ceilingMat, pos: [offsetX, 5, 0] });

  createBox({ w: 24, h: 5, d: 0.1, mat: white, pos: [offsetX, 2.5, -15] });

  if (hasFrontWall) {
    createBox({ w: 24, h: 5, d: 0.1, mat: white, pos: [offsetX, 2.5, 15] });
  }

  if (leftWallType === 'door') {

    createBox({ w: 0.1, h: 5, d: 10, mat: white, pos: [offsetX - 12, 2.5, -10] });
    createBox({ w: 0.1, h: 5, d: 10, mat: white, pos: [offsetX - 12, 2.5, 10] });


    createBox({ w: 0.05, h: 5, d: 0.1, mat: black, pos: [offsetX - 11.975, 2.5, 0] });
    createBox({ w: 0.05, h: 5, d: 0.1, mat: black, pos: [offsetX - 12.025, 2.5, 0] });
    createBox({ w: 0.1, h: 0.1, d: 5, mat: black, pos: [offsetX - 12, 5, 0] });

  
    const radius = 0.02;
    const barLength = 0.1;
    const armLength = 0.2;
    const midY = 1.5; // hand height

   
    const leftBar = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, armLength, 16), orange);
    leftBar.rotation.z = Math.PI / 2;
    leftBar.position.set(offsetX - 11.94 - barLength / 2, midY, 0);
    leftBar.castShadow = true;
    scene.add(leftBar);

    const rightBar = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, armLength, 16), orange);
    rightBar.rotation.z = Math.PI / 2;
    rightBar.position.set(offsetX - 11.94 + barLength / 2, midY, 0);
    rightBar.castShadow = true;
    scene.add(rightBar);

   
    const connector = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, barLength, 16), orange);
    connector.position.set(offsetX - 11.94, midY + armLength / 2, 0);
    connector.castShadow = true;
    scene.add(connector);
  } else {
    createBox({ w: 0.1, h: 5, d: 30, mat: white, pos: [offsetX - 12, 2.5, 0] });
  }


  createBox({ w: 0.1, h: 5, d: 30, mat: glass, pos: [offsetX + 12, 2.5, 0] });


  createBox({ w: 0.2, h: 3, d: 8, mat: white, pos: [offsetX, 1.5, -5] });
  createBox({ w: 0.2, h: 3, d: 8, mat: white, pos: [offsetX, 1.5, 5] });
}