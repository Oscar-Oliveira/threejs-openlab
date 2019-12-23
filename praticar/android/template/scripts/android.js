"use strict";

let camera, scene, renderer;

init();

function init() {
   camera = getCommonCamera();
   scene = getCommonScene();
   renderer = getCommonRenderer();
   const controls = getCommonControls();
   addCommonHelpersToScene();
   setCommonEventListeners();

   // your script here! 

   animate();
}

function animate() {
   requestAnimationFrame(animate);
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