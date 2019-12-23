/*
 *  Organização - Ficheiro de script
 */

// criar um novo cabeçalho
let h = document.createElement("H1");

// criar um nodo para o texto
let t = document.createTextNode("Bem vindos ao workshop Visualizações 3D para a web com WebGL");

// addicionar o texto ao cabeçalho 
h.appendChild(t);

// adicionar ao elemento body o cabeçalho  
document.body.appendChild(h);
