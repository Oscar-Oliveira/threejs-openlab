"use strict";

/*
 *  Lights - tipos
 */

let camera, scene, renderer, mesh;

function init(lights) {
    camera = getCommonCamera();

    scene = getCommonScene();
    renderer = getCommonRenderer();
    const controls = getCommonControls();
    addCommonHelpersToScene();
    setCommonEventListeners();

    mesh = getCube();
    scene.add(mesh);

    if (lights[0]) { setAmbientLight(); }
    if (lights[1]) { setPointLight(); }
    if (lights[2]) { setDirectionalLight(); }
    if (lights[3]) { setSpotLight(); }
    if (lights[4]) { setHemisphereLight(); }

    animate();
}

function setAmbientLight() {
    // This light globally illuminates all objects in the scene equally.
    const color = 0xFFFFFF;
    const intensity = 1;
    const ambientLight = new THREE.AmbientLight(color, intensity);
    scene.add(ambientLight);
}

function setPointLight() {
    // A light that gets emitted from a single point in all directions.
    const color = 0xFFFFFF;
    const intensity = 2;
    const light = new THREE.PointLight(color, intensity);
    light.position.set(0, 2, 5);
    scene.add(light);

    const pointLightHelper = new THREE.PointLightHelper(light);
    scene.add(pointLightHelper);
}

function setDirectionalLight() {
    // A light that gets emitted in a specific direction.
    const color = 0xFFFFFF;
    const intensity = 10;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 1, 5);
    light.target = mesh;
    scene.add(light);

    const directionalLight = new THREE.DirectionalLightHelper(light);
    scene.add(directionalLight);
}

function setSpotLight() {
    // This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.
    const color = 0xFFFFFF;
    const intensity = 2.0;
    const light = new THREE.SpotLight(color, intensity, 1000);
    light.position.set(0, 5, 10);
    scene.add(light);

    const spotLightHelper = new THREE.SpotLightHelper(light);
    scene.add(spotLightHelper);
}

function setHemisphereLight() {
    // A light source positioned directly above the scene, with color fading from the sky color to the ground color.
    const light = new THREE.HemisphereLight(0xffffbb, 0x0808dd, 1);
    scene.add(light);

    const hemisphereLightHelper = new THREE.HemisphereLightHelper(light, 10);
    scene.add(hemisphereLightHelper);
}

function getCube() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0x444444, shininess: 100 }), // 2

    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 1, 0);

    return mesh;
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
}