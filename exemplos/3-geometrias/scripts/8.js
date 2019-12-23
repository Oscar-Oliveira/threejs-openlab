"use strict";

/*
 *  Importar modelos
 *  monkey.obj: https://github.com/kivy/kivy/blob/master/examples/3Drendering/monkey.obj
 */

let camera, scene, renderer;

init();

function init() {
    camera = getCommonCamera();
    scene = getCommonScene();
    renderer = getCommonRenderer();
    const controls = getCommonControls();
    //addCommonHelpersToScene();
    setCommonEventListeners();

    setupLights();

    loadModel();

    commonAnimate();
}

function setupLights() {
    const light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(0, 0, 3);
    scene.add(light);
}

function loadModel() {
    const loader = new THREE.OBJLoader();
    loader.load('assets/monkey.obj', function (object) {
        scene.add(object);
    });
}
