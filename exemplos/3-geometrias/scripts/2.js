"use strict";

/*
 *  SphereBufferGeometry
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

    let mesh = createMesh1();
    scene.add(mesh);

    mesh = createMesh2();
    scene.add(mesh);

    commonAnimate();
}

function createMesh1() {
    const geometry = new THREE.SphereBufferGeometry(
        2.5, // raio
        100, // segmentos horizontais
        60, // segmentos veticais
    );
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    return new THREE.Mesh(geometry, material);
}

function createMesh2() {
    const geometry = new THREE.SphereBufferGeometry(
        2.5, // raio
        30,  // segmentos horizontais
        20,  // segmentos veticais
        0,   // angulo inicial da varredura horizontal
        THREE.Math.degToRad(180), // varredura horizontal
        0,   // angulo inicial da varredura vertical
        THREE.Math.degToRad(90)   // varredura vertical
    );
    const material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0xff0000,
    });
    return new THREE.Mesh(geometry, material);
}
