"use strict";

/*
 *  Texturas - dado
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

function createMesh() {
    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

    const textureLoader = new THREE.TextureLoader();

    const texture1 = textureLoader.load('assets/1.png');
    const texture2 = textureLoader.load('assets/2.png');
    const texture3 = textureLoader.load('assets/3.png');
    const texture4 = textureLoader.load('assets/4.png');
    const texture5 = textureLoader.load('assets/5.png');
    const texture6 = textureLoader.load('assets/6.png');

    const cubeMaterials = [
        new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide }), // RIGHT SIDE
        new THREE.MeshBasicMaterial({ map: texture2, side: THREE.DoubleSide }), // LEFT SIDE
        new THREE.MeshBasicMaterial({ map: texture3, side: THREE.DoubleSide }), // TOP SIDE
        new THREE.MeshBasicMaterial({ map: texture4, side: THREE.DoubleSide }), // BOTTOM SIDE
        new THREE.MeshBasicMaterial( {map: texture5, transparent: true,  opacity: 0.9} ), // FRONT SIDE
        new THREE.MeshBasicMaterial({ map: texture6, side: THREE.DoubleSide }) // BACK SIDE
    ];

    return new THREE.Mesh(geometry, cubeMaterials);
}
