"use strict";

/*
 *  requestAnimationFrame
 */

let camera, scene, renderer, mesh1, mesh2, mesh3, mesh4;

init();

function init() {
    camera = getCommonCamera();
    scene = getCommonScene();
    renderer = getCommonRenderer();
    const controls = getCommonControls();
    addCommonHelpersToScene();
    setCommonEventListeners();
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.enabled = true;

    setMeshes();

    setDirectionalLight();
    setAmbientLight();

    animate();
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

function setMeshes() {
    const material = new THREE.MeshStandardMaterial({ color: 0x0087E6 });

    mesh1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), material);
    mesh1.castShadow = true;
    mesh1.position.set(-2.5, 1, -2.5);
    scene.add(mesh1);
    mesh2 = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 2, 32), material);
    mesh2.position.set(2.5, 1, -2.5);
    mesh2.castShadow = true;
    scene.add(mesh2);
    mesh3 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), material);
    mesh3.position.set(-2.5, 1, 2.5);
    mesh3.castShadow = true;
    scene.add(mesh3);
    mesh4 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
    mesh4.position.set(2.5, 1, 2.5);
    mesh4.castShadow = true;
    scene.add(mesh4);

}

function animate() {
    requestAnimationFrame(animate);

    mesh1.rotation.x += 0.01;

    mesh2.rotation.z += 0.02;

    mesh3.rotation.y += 0.01;

    mesh4.position.y += 0.005;

    renderer.render(scene, camera);
}
