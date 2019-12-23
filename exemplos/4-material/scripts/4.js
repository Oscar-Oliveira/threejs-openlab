"use strict";

/*
 *  Texturas - Mapa mundo
 *  Ver: https://blog.mastermaps.com/2013/09/creating-webgl-earth-with-threejs.html
 */

let camera, scene, renderer, planet;

init();

function init() {

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 1.5;

    scene = getCommonScene();
    renderer = getCommonRenderer();
    const controls = getCommonControls();
    setCommonEventListeners();

    addLights();

    planet = createPlanet();
    scene.add(planet);

    const space = createSpace();
    scene.add(space);

    animate();
}

function addLights() {
    scene.add(new THREE.AmbientLight(0x333333));

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5,3,5);
    scene.add(light);
}

function createPlanet() {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const texture = new THREE.TextureLoader().load('assets/earth.jpg');
    const material = new THREE.MeshPhongMaterial({ map: texture });
    return new THREE.Mesh(geometry, material);
}

function createSpace() {
    const geometry = new THREE.SphereGeometry(45, 32, 32);
    const texture = new THREE.TextureLoader().load('assets/space.png');
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    return new THREE.Mesh(geometry, material);
}

function animate() {
    planet.rotation.y += 0.0005;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
