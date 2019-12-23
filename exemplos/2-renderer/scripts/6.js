"use strict";

/*
 *  Organização - Script de funções comuns
 *  Ver: common.js
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

    commonAnimate();
}
