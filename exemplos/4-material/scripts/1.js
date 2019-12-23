"use strict";

/*
 *  Materiais
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

    scene.add(getLights());

    const mesh1 = createMeshBasicMaterial();
    scene.add(mesh1);

    const mesh2 = createMeshLambertMaterial();
    scene.add(mesh2);

    const mesh3 = createMeshPhongMaterial();
    scene.add(mesh3);

    const mesh4 = createMeshStandardMaterial();
    scene.add(mesh4);

    const mesh5 = createMeshPhysicalMaterial();
    scene.add(mesh5);

    const mesh6 = createMeshNormalMaterial();
    scene.add(mesh6);

    mesh1.position.set(-5, 0.5, 0);
    mesh2.position.set(-3, 0.5, 0);
    mesh3.position.set(-1, 0.5, 0);
    mesh4.position.set(1, 0.5, 0);
    mesh5.position.set(3, 0.5, 0);
    mesh6.position.set(5, 0.5, 0);

    commonAnimate();
}

function getLights() {
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(0, 50, 50);
    return directionalLight;
}

function createMeshBasicMaterial() {
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    });
    return new THREE.Mesh(geometry, material);
}

function createMeshLambertMaterial() {
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });
    return new THREE.Mesh(geometry, material);
}

function createMeshPhongMaterial() {
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shininess: 50
    });
    return new THREE.Mesh(geometry, material);
}

function createMeshStandardMaterial() {
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 1,
        roughness: 0.5
    });
    return new THREE.Mesh(geometry, material);
}

function createMeshPhysicalMaterial() {
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff
    });
    return new THREE.Mesh(geometry, material);
}

function createMeshNormalMaterial() {
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    return new THREE.Mesh(geometry, material);
}
