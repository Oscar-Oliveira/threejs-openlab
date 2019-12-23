"use strict";

/*
 *  TorusBufferGeometry
 */

let camera, scene, renderer, rotate_mesh;

init();

function init() {
    camera = getCommonCamera();
    scene = getCommonScene();
    renderer = getCommonRenderer();
    const controls = getCommonControls();
    addCommonHelpersToScene();
    setCommonEventListeners();

    let mesh = createMesh();
    scene.add(mesh);

    commonAnimate();
}

function createMesh() {
    const geometry = new THREE.TorusBufferGeometry(1, .5, 16, 50);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    return new THREE.Mesh(geometry, material);
}
