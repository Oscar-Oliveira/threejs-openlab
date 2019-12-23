"use strict";

/*
 *  BoxBufferGeometry
 */

let camera, scene, renderer;

init();

function init() {
    camera = getCommonCamera();
    scene = getCommonScene();
    renderer = getCommonRenderer();
    const controls = getCommonControls();
    addCommonHelpersToScene();
    setCommonEventListeners();

    const mesh = createMesh();
    scene.add(mesh);

    commonAnimate();
}

function createMesh(){
    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    return  new THREE.Mesh(geometry, material);
}
