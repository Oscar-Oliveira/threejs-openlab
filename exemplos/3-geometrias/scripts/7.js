"use strict";

/*
 *  Geometrias personalizadas
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

    let mesh0 = createMesh0();
    scene.add(mesh0);

    let mesh1 = createMesh1();
    scene.add(mesh1);
    mesh1.position.set(1, 2, 0);

    commonAnimate();
}

function createMesh0() {

    const geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(-1, -1, 1),  // 0
        new THREE.Vector3(1, -1, 1),   // 1
        new THREE.Vector3(-1, 1, 1),   // 2
        new THREE.Vector3(1, 1, 1),    // 3
        new THREE.Vector3(-1, -1, -1), // 4
        new THREE.Vector3(1, -1, -1),  // 5
        new THREE.Vector3(-1, 1, -1),  // 6
        new THREE.Vector3(1, 1, -1),   // 7
    );

    geometry.faces.push(
        new THREE.Face3(0, 3, 2), // front
        new THREE.Face3(0, 1, 3),
        new THREE.Face3(1, 7, 3), // right
        new THREE.Face3(1, 5, 7),
        new THREE.Face3(5, 6, 7), // back
        new THREE.Face3(5, 4, 6),
        new THREE.Face3(4, 2, 6), // left
        new THREE.Face3(4, 0, 2),
        new THREE.Face3(2, 7, 6), // top
        new THREE.Face3(2, 3, 7),
        new THREE.Face3(4, 1, 0), // bottom
        new THREE.Face3(4, 5, 1),
    );

    geometry.faces[0].color = geometry.faces[1].color = new THREE.Color('red');
    geometry.faces[2].color = geometry.faces[3].color = new THREE.Color('yellow');
    geometry.faces[4].color = geometry.faces[5].color = new THREE.Color('green');
    geometry.faces[6].color = geometry.faces[7].color = new THREE.Color('cyan');
    geometry.faces[8].color = geometry.faces[9].color = new THREE.Color('blue');
    geometry.faces[10].color = geometry.faces[11].color = new THREE.Color('magenta');

    const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors });

    return new THREE.Mesh(geometry, material);
}

function createMesh1() {

    const geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(-1, -1, 1),  // 0
        new THREE.Vector3(-1, 1, 1),   // 1
        new THREE.Vector3(1, 1, 1),    // 2
        new THREE.Vector3(-1, -1, -1), // 3
        new THREE.Vector3(-1, 1, -1),  // 4
        new THREE.Vector3(1, 1, -1),   // 5
    );

    geometry.faces.push(
        new THREE.Face3(0, 2, 1), // side triangle front
        new THREE.Face3(3, 4, 5), // side triangle back
        new THREE.Face3(4, 1, 5), // top
        new THREE.Face3(1, 2, 5), // top
        new THREE.Face3(4, 3, 0), // back
        new THREE.Face3(1, 4, 0), // back
        new THREE.Face3(2, 3, 5),
        new THREE.Face3(3, 2, 0),
    );

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    return new THREE.Mesh(geometry, material);;
}
