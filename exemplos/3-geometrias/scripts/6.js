"use strict";

/*
 *  Outras geometrias primitivas
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

    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    
    let mesh_1 = new THREE.Mesh(createCircleBufferGeometry(), material);
    scene.add(mesh_1);
    mesh_1.position.set(-4, 4, 0);
    let mesh_2 = new THREE.Mesh(createConeBufferGeometry(), material);
    scene.add(mesh_2);
    mesh_2.position.set(0, 4, 0);
    let mesh_3 = new THREE.Mesh(createDodecahedronBufferGeometry(), material);
    scene.add(mesh_3);
    mesh_3.position.set(4, 4, 0);
    let mesh_4 = new THREE.Mesh(createIcosahedronBufferGeometry(), material);
    scene.add(mesh_4);
    mesh_4.position.set(-4, 0, 0);
    let mesh_5 = new THREE.Mesh(createOctahedronBufferGeometry(), material);
    scene.add(mesh_5);
    mesh_5.position.set(0, 0, 0);
    let mesh_6 = new THREE.Mesh(createTetrahedronBufferGeometry(), material);
    scene.add(mesh_6);
    mesh_6.position.set(4, 0, 0);

    animate();
}

function createCircleBufferGeometry() {
    return new THREE.CircleBufferGeometry(
        1,  // radius
        24, // segments
        0,  // Start angle
        THREE.Math.degToRad(270) // central angle
    );
}

function createConeBufferGeometry() {
    return new THREE.ConeBufferGeometry(
        1,  // radius
        2,  // height
        24, // radial segments
        6,  // heightSegments
        false, // openEnded
        0,  // Start angle
        THREE.Math.degToRad(360) // thetaLength 
    );
}

function createDodecahedronBufferGeometry() {
    return new THREE.DodecahedronBufferGeometry(
        1, // radius
        0, // detail, adds vertices making it no longer a dodecahedron.
    );
}

function createIcosahedronBufferGeometry() {
    return new THREE.IcosahedronBufferGeometry(
        1, // radius
        0, // detail, adds vertices making it no longer a icosahedro.
    );
}

function createOctahedronBufferGeometry() {
    return new THREE.OctahedronBufferGeometry(
        1, // radius
        0, // detail, adds vertices making it no longer a octahedron.
    );
}

function createTetrahedronBufferGeometry() {
    return new THREE.TetrahedronBufferGeometry(
        1, // radius
        0, // detail, adds vertices making it no longer a tetrahedron.
    );
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
