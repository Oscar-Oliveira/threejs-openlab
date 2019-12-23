"use strict";

let camera, scene, renderer, car, direction = 1;

init();

function init() {
   camera = getCommonCamera();
   scene = getCommonScene();
   renderer = getCommonRenderer();
   const controls = getCommonControls();

   addCommonHelpersToScene();
   setCommonEventListeners();

   setLights();

   car = getCar();
   car.position.y +=1;
   scene.add(car);

   animate();
}

function setLights() {
   const light = new THREE.AmbientLight(0xffffff, 1);
   scene.add(light);

   const directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 1 );
   directionalLight.position.set( 5, 2, 5 );
   directionalLight.castShadow = true;
   scene.add(directionalLight);
}

function getCar() {

   const material = new THREE.MeshStandardMaterial({ color: 0xaa0000 });
   const borracha = new THREE.MeshBasicMaterial({ color: 0x000000 });

   const part1 = new THREE.Mesh(new THREE.BoxBufferGeometry(2, 1, 4), material);
   const part2 = new THREE.Mesh(new THREE.BoxBufferGeometry(2, 1, 2), material);
   part2.position.set(0, 1, 0);

   const pneu1 = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(.5, .5, .2, 30),
      borracha);

   pneu1.rotation.z += THREE.Math.degToRad(90);
   pneu1.position.set(1, -0.5, -1);

   const pneu2 = pneu1.clone();
   pneu2.position.set(-1, -0.5, -1);

   const pneu3 = pneu1.clone();
   pneu3.position.set(-1, -0.5, 1);

   const pneu4 = pneu1.clone();
   pneu4.position.set(1, -0.5, 1);

   const carro = new THREE.Group();
   carro.add(part1);
   carro.add(part2);
   carro.add(pneu1);
   carro.add(pneu2);
   carro.add(pneu3);
   carro.add(pneu4);

   return carro;
}

function animate() {
   requestAnimationFrame(animate);

   car.position.z += 0.05 * direction;

   if (car.position.z > 5) {
      direction = -1;
   } else if (car.position.z < -5) {
      direction = 1;
   }

   renderer.render(scene, camera);
}

function getCommonControls() {
   return new THREE.OrbitControls(camera, renderer.domElement);
}

function getCommonRenderer() {
   let r = new THREE.WebGLRenderer({ antialias: true });
   r.setSize(window.innerWidth, window.innerHeight);
   r.render(scene, camera);
   document.body.appendChild(r.domElement);
   return r;
}

function getCommonCamera() {
   let cam = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 100);
   cam.position.set(0, 3, 10);
   return cam;
}

function getCommonScene() {
   let scen = new THREE.Scene();
   scen.background = new THREE.Color('white');
   return scen;
}

function addCommonHelpersToScene() {
   scene.add(new THREE.GridHelper(10, 10));
   scene.add(new THREE.AxesHelper(5));
}

function setCommonEventListeners() {
   window.addEventListener("resize", onCommonWindowResize);
}

function onCommonWindowResize() {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
}
