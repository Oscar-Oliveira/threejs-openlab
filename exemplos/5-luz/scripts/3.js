"use strict";

/*
 *  Sombras
 */

let camera, scene, renderer;

init();

function init() {
    camera = getCommonCamera();
    scene = getCommonScene();
    renderer = getCommonRenderer();
    const controls = getCommonControls();

    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.enabled = true;

    const plane = getPlane();
    scene.add(plane);
    const mesh = getMeshes();
    scene.add(mesh);

    setDirectionalLight();
    setAmbientLight();

    commonAnimate();
}

function setDirectionalLight() {
    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.position.set(20, 20, 30);

    light.castShadow = true;

    scene.add(light);
}

function setAmbientLight() {
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);
}

function getMeshes() {
    const material = new THREE.MeshStandardMaterial({ color: 0x0087E6 });
    const group = new THREE.Group();
    const mesh1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), material);
    mesh1.position.set(-2.5, 1, -2.5);
    group.add(mesh1);
    const mesh2 = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 2, 32), material);
    mesh2.position.set(2.5, 1, -2.5);
    group.add(mesh2);
    const mesh3 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), material);
    mesh3.position.set(-2.5, 1, 2.5);
    group.add(mesh3);
    const mesh4 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
    mesh4.position.set(2.5, 1, 2.5);
    group.add(mesh4);

    mesh1.castShadow = true;
    mesh2.castShadow = true;
    mesh3.castShadow = true;
    mesh4.castShadow = true;

    return group;
}

function getPlane() {
    const geometry = new THREE.PlaneBufferGeometry(10, 10, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = THREE.Math.degToRad(90);

    mesh.receiveShadow = true;

    return mesh;
}
