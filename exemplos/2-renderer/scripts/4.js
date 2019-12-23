"use strict";

/*
 *  OrbitControls
 */

let camera, scene, renderer;

init();

function init() {
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 100);
    camera.position.set(0, 3, 10);

    scene = new THREE.Scene();
    scene.background = new THREE.Color('black');
    
    addHelpers();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    document.body.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    animate();
}

function addHelpers() {
    scene.add(new THREE.GridHelper(10, 10));
    scene.add(new THREE.AxesHelper(5));
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
