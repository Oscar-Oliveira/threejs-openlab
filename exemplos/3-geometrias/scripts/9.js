"use strict";

/*
 *  Grupos
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

    let group = createGroup();
    group.rotation.z +=  THREE.Math.degToRad(90);
    group.position.set(0, 1, 0);
    scene.add(group);

    animate();
}

function createGroup() {

    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    const mesh1 = new THREE.Mesh(new THREE.CylinderBufferGeometry(1, 1, 2, 30), material);
    const mesh2 = new THREE.Mesh(new THREE.SphereBufferGeometry(1, 30, 20, 0), material);
    mesh2.position.set(0, 2, 0);

    const mesh3 = mesh2.clone();
    mesh2.position.set(0, -2, 0);

    let group = new THREE.Group();
    group.add(mesh1);
    group.add(mesh2);
    group.add(mesh3);

    return group;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
