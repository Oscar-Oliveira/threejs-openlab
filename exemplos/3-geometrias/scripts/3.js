"use strict";

/*
 *  CylinderBufferGeometry
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

    let mesh = createMesh1();
    scene.add(mesh);

    mesh = createMesh2();
    scene.add(mesh);

    commonAnimate();
}

function createMesh1() {
    const geometry = new THREE.CylinderBufferGeometry(
        2.5,   // radiusTop
        2.5,   // radiusBottom
        5,     // height
        60,    // radialSegments
        20,    // heightSegments
    );
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    return new THREE.Mesh(geometry, material);
}

function createMesh2() {
    const geometry = new THREE.CylinderBufferGeometry(
        0,   // radiusTop
        2.5, // radiusBottom
        5,   // height
        30,  // radialSegments
        20,  // heightSegments
        true, // openEnded
        THREE.Math.degToRad(270), // angulo inicial da varredura horizontal
        THREE.Math.degToRad(180) // varredura horizontal
    );
    const material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0xff0000,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 5, 0);    
    return mesh;
}
