"use strict";

/*
 *  Animação
 */

let camera, scene, renderer, cube, traps;

init();

function init(luz, material) {
    camera = getCommonCamera();
    scene = getCommonScene();
    renderer = getCommonRenderer();
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.enabled = true;
    const controls = getCommonControls();

    setCommonEventListeners();

    setPointLight();
    setAmbientLight();

    scene.add( getWorld() );
    cube = getCube();
    scene.add(cube);

    setTraps();

    document.addEventListener("keydown", onDocumentKeyDown, false);

    commonAnimate();
}

function setPointLight() {
    const pointLight = new THREE.PointLight(0xFFFFFF, 1);
    pointLight.position.set(0, 5, 4.5);
    pointLight.castShadow = true;
    scene.add(pointLight);
}

function setAmbientLight() {
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
}

function getTrap(x, y, z) {
    const texture = new THREE.TextureLoader().load('assets/rock.jpg');
    const material = new THREE.MeshPhongMaterial({ map: texture });
    const mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), material);
    mesh.castShadow = true;
    mesh.position.set(x, y, z);
    return mesh;
}

function getCube() {
    const texture = new THREE.TextureLoader().load('assets/crate.jpg');
    const material = new THREE.MeshLambertMaterial({ map: texture });
    const mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), material);
    mesh.castShadow = true;
    mesh.position.set(-4.5, .5, 4.5);
    return mesh;
}

function getWorld() {
    let group = new THREE.Group();

    const grass_texture = new THREE.TextureLoader().load('assets/grass.jpg');
    const wall_texture = new THREE.TextureLoader().load('assets/wall.jpg');
    const landscape_texture = new THREE.TextureLoader().load('assets/landscape.jpg');

    const floor_material = new THREE.MeshLambertMaterial({ map: grass_texture, side: THREE.DoubleSide });
    const wall_material = new THREE.MeshLambertMaterial({ map: wall_texture });
    const wall_material2 = new THREE.MeshLambertMaterial({ map: wall_texture, side: THREE.BackSide });
    const landscape_material4 = new THREE.MeshLambertMaterial({ map: landscape_texture, side: THREE.BackSide });

    const floor_geometry = new THREE.PlaneBufferGeometry(10, 10, 32, 32);
    const wall_geometry = new THREE.PlaneBufferGeometry(10, 5, 32, 32);

    const floor = new THREE.Mesh(floor_geometry, floor_material);
    floor.receiveShadow = true;
    floor.rotation.x = THREE.Math.degToRad(90);
    group.add(floor)

    const wall_back = new THREE.Mesh(wall_geometry, wall_material);
    wall_back.position.set(0, 2.5, -5);
    wall_back.receiveShadow = true;
    group.add(wall_back);

    const wall_left = new THREE.Mesh(wall_geometry, wall_material);
    wall_left.position.set(-5, 2.5, 0);
    wall_left.rotation.y = THREE.Math.degToRad(90);
    wall_left.receiveShadow = true;
    group.add(wall_left);

    const wall_right = new THREE.Mesh(wall_geometry, wall_material2);
    wall_right.position.set(5, 2.5, 0);
    wall_right.rotation.y = THREE.Math.degToRad(90);
    wall_right.receiveShadow = true;
    group.add(wall_right);

    const wall_front = new THREE.Mesh(wall_geometry, landscape_material4);
    wall_front.position.set(0, 2.5, 5);
    wall_front.receiveShadow = true;
    group.add(wall_front);

    return group;
}

function setTraps() {
    traps = [];
    for (let i = 0; i < 10; i++) {
        traps[i] = [];
        for (let j = 0; j < 10; j++) {
            if (Math.random() < .75 || (i == 0 && j == 9)) {
                traps[i][j] = null;
            } else {
                traps[i][j] = getTrap(i - 4.5, .5, j - 4.5);
                scene.add(traps[i][j]);
            }
        }
    }
}

function isValid(pos) {

    if (pos.x < -5 || pos.x > 5 || pos.z < -5 || pos.z > 5) {
        return false;
    }

    if (traps[pos.x + 4.5][pos.z + 4.5]) {
        return false;
    }

    return true;
}

function onDocumentKeyDown(event) {
    const keyCode = event.which;

    let pos = new THREE.Vector3();
    pos.copy(cube.position);

    if (keyCode == 87) {
        pos.z -= 1;
    } else if (keyCode == 83) {
        pos.z += 1;
    } else if (keyCode == 65) {
        pos.x -= 1;
    } else if (keyCode == 68) {
        pos.x += 1;
    }

    if (isValid(pos)) {
        cube.position.copy(pos);
    }
}
