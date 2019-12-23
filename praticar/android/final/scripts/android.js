"use strict";

let camera, scene, renderer, android, direction = 1;

init();

function init() {
   camera = getCommonCamera();
   scene = getCommonScene();
   renderer = getCommonRenderer();
   const controls = getCommonControls();
   addCommonHelpersToScene();
   setCommonEventListeners();

   scene.add(getLights());

   android = getAndroid();
   scene.add(android);

   animate();
}

function getLights() {
   const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
   directionalLight.position.set(0, 25, 25);
   return directionalLight;
}

function getAndroid() {

   const material = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      shininess: 100
   });

   const head = new THREE.Mesh(new THREE.SphereBufferGeometry(1, 30, 20, 0, THREE.Math.degToRad(360), 0, THREE.Math.degToRad(90)), material);
   const body = new THREE.Mesh(new THREE.CylinderBufferGeometry(1, 1, 2, 30), material);
   const leg_r = new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, .2, 1, 30), material);
   const arm_r = new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, .2, 1, 30), material);
   const antena_r = new THREE.Mesh(new THREE.CylinderBufferGeometry(.05, .05, .5, 30), material);
   
   const arm_l = arm_r.clone();
   const leg_l = leg_r.clone();
   const antena_l = antena_r.clone();

   arm_r.rotation.z = THREE.Math.degToRad(45);
   arm_l.rotation.z = THREE.Math.degToRad(-45);
   antena_r.rotation.z = THREE.Math.degToRad(-45);
   antena_l.rotation.z = THREE.Math.degToRad(45);

   body.position.set(0, 1, 0);
   head.position.set(0, 2.1, 0);
   leg_r.position.set(.5, -.5, 0);
   leg_l.position.set(-.5, -.5, 0);
   arm_r.position.set(1.2, 1.25, 0);
   arm_l.position.set(-1.2, 1.25, 0);
   antena_r.position.set(.85, 3, 0);
   antena_l.position.set(-.85, 3, 0);

   let group = new THREE.Group();
   group.add(head);
   group.add(body);
   group.add(leg_r);
   group.add(leg_l);
   group.add(arm_r);
   group.add(arm_l);
   group.add(antena_r);
   group.add(antena_l);

   return group;
}

function animate() {
   requestAnimationFrame(animate);

   android.position.z += 0.05 * direction;

   if (android.position.z > 5) {
      direction = -1;
   } else if (android.position.z < -5) {
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
   scen.background = new THREE.Color('black');
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

function commonAnimate() {
   requestAnimationFrame(commonAnimate);
   renderer.render(scene, camera);
}
