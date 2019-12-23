"use strict";

/*
 *  Texturas UV Mapping
 *  Ver: https://discoverthreejs.com/book/first-steps/textures-intro/
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

    const texture = textureLoader.load('assets/texture.png');

    texture.encoding = THREE.sRGBEncoding; // set the "color space" of the texture

    texture.anisotropy = 16; // reduce blurring at glancing angles

    const material = new THREE.MeshBasicMaterial({ map: texture, });

    return new THREE.Mesh(geometry, material);
}
