"use strict";

/*
 *  TorusKnotBufferGeometry
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
    const geometry = new THREE.TorusKnotBufferGeometry( 2, 0.5, 100, 20);
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    return new THREE.Mesh( geometry, material );
}
