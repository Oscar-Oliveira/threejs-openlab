"use strict";

/*
 *  Organização - Script de funções comuns
 */

function getCommonControls() {
    return new THREE.OrbitControls(camera, renderer.domElement);
}

function getCommonRenderer() {
    let ren = new THREE.WebGLRenderer({ antialias: true });
    ren.setSize(window.innerWidth, window.innerHeight);
    ren.render(scene, camera);
    document.body.appendChild(ren.domElement);
    return ren;
}

function getCommonCamera() {
    let cam = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 100);
    cam.position.set(0, 3, 10);
    return cam;
}

function getCommonScene() {
    let sce = new THREE.Scene();
    sce.background = new THREE.Color('black');
    return sce;
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
