"use strict";

/*
 *  Efeito da luz sobre materiais
 */


let camera, scene, renderer;

function init(luz, material) {
    camera = getCommonCamera();

    scene = getCommonScene();
    renderer = getCommonRenderer();
    const controls = getCommonControls();

    const lights = [
        setPointLight, // 0
        setSpotLight, // 1
        setDirectionalLight, // 2
        setHemisphereLight // 3
    ]
    lights[luz]();

    setAmbientLight();

    const plane = getPlane();
    scene.add(plane);

    const materials = [
        new THREE.MeshBasicMaterial({ color: 0x0087E6 }), // 0
        new THREE.MeshLambertMaterial({ color: 0x0087E6 }), // 1
        new THREE.MeshPhongMaterial({ color: 0x0087E6, shininess: 100 }), // 2
        new THREE.MeshStandardMaterial({ color: 0x0087E6 }) // 3
    ]

    const mesh = getMeshes(materials[material]);
    scene.add(mesh);

    commonAnimate();
}

function setPointLight() {
    const pointLight = new THREE.PointLight(0xFFFFFF, 2);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);
}

function setSpotLight() {
    const spotLight = new THREE.SpotLight(0xFFFFFF, 2);
    spotLight.position.set(0, 5, 0);
    spotLight.target.position.set(5, 0, 5);
    scene.add(spotLight.target);
    scene.add(spotLight);
}

function setDirectionalLight() {
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);
    directionalLight.position.set(0, 5, 0);
    scene.add(directionalLight);
}

function setHemisphereLight() {
    const light = new THREE.HemisphereLight(0x444444, 0xffffff, 3);
    scene.add(light);
}

function setAmbientLight() {
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
}

function getMeshes(material) {
    const group = new THREE.Group();

    const mesh1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), material);
    mesh1.position.set(-2.5, 1, -2.5);
    group.add(mesh1);

    const mesh2 = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 2, 32), material);
    mesh2.position.set(2.5, 1, -2.5);
    group.add(mesh2);

    const mesh3 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), material);
    mesh3.position.set(-2.5, 1, 2.5);
    group.add(mesh3);

    const mesh4 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
    mesh4.position.set(2.5, 1, 2.5);
    group.add(mesh4);

    return group;
}

function getPlane() {
    const geometry = new THREE.PlaneBufferGeometry(10, 10, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = THREE.Math.degToRad(90);
    return mesh;
}
