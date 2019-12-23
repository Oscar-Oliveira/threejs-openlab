# O meu android

Este tutorial descreve passo a passo o processo de criação de um android. O projeto final pode ser obtido em [http://](http://).

1.  Faça o download do template para o projeto em [http://teste.pt](http://teste.pt)

    - O ficheiro `android.htm` é o documento que iremos abrir no nosso navegador web para visualizar o nosso trabalho.
    - Fazem parte do projeto 3 pastas:
      - `js` - contem o ficheiro `three.min.js` que fornece as funcionalidades disponibilizadas pela biblioteca three.js e o ficheiro `OrbitControls.js` que permite que a camera ortite em volta de um elemento.
      - `scripts` - contem o ficheiro `android.js` que irá conter todo o nosso trabalho.
      - `styles` - contem o [Cascading Style Sheet](https://www.w3schools.com/css/css_intro.asp) (CSS) para a nossa página.

2.  Vamos de seguida editar o ficheiro `scripts/android.js` de modo a criar o nosso android.

    1. Adicionar luz à nossa cena.

        - A seguinte função retorna uma luz direcional posicionada em (0, 25, 25). Adicione o seguinte código após a função `init`.

            ```javascript
            function getLights() {
                const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
                directionalLight.position.set(0, 25, 25);
                return directionalLight;
            }
            ```

        - Na função `init` adicione a seguinte linha após a criação da cena para adicionar a luz à cena.

            ```javascript
            scene.add(getLights());
            ```

    1. O nosso android será criado numa função chamada `getAndroid`.

        - Crie a seguir à funcão `init` a função `getAndroid`.

            ```javascript
            function getAndroid() {

            }
            ```

        - Na função `getAndroid` vamos começar por criar o material para o android. Este material é afetado pela luz previamente adicionada à nossa cena. 

            ```javascript
            const material = new THREE.MeshPhongMaterial({
                color: 0x00ff00,
                shininess: 100
            });
            ```

        - De seguida criámos os objetos que farão parte do nosso android. A cabeça é uma meia esfera com varredura horizontal de 360º e varredura vertical de 90º. O corpo, a perna direita, o braço direito e a antena direita são cilindros. A perna esquerda, o braço esquerdo e a antena esquerda são criados como sendo clones dos objetos previamente criados para o lado direito. Adicione o código seguinte após o adicionado no ponto anterior.

            ```javascript
            const head = new THREE.Mesh(
                new THREE.SphereBufferGeometry(1, 30, 20, 0, THREE.Math.degToRad(360), 0, THREE.Math.degToRad(90)),
                material);
            const body = new THREE.Mesh(
                 new THREE.CylinderBufferGeometry(1, 1, 2, 30),
                 material);
            const leg_r = new THREE.Mesh(
                 new THREE.CylinderBufferGeometry(.2, .2, 1, 30),
                 material);
            const arm_r = new THREE.Mesh(
                new THREE.CylinderBufferGeometry(.2, .2, 1, 30),
                material);
            const antena_r = new THREE.Mesh(new THREE.CylinderBufferGeometry(.05, .05, .5, 30), material);
            const leg_l = leg_r.clone();
            const arm_l = arm_r.clone();
            const antena_l = antena_r.clone();
            ```

        - Os bracos e as antenas são rodadas 45º sobre o eixo `z`. Adicione o código seguinte após o adicionado no ponto anterior.

            ```javascript
            arm_r.rotation.z = THREE.Math.degToRad(45);
            arm_l.rotation.z = THREE.Math.degToRad(-45);
            antena_r.rotation.z = THREE.Math.degToRad(-45);
            antena_l.rotation.z = THREE.Math.degToRad(45);
            ```

        - Tendo todos os objetos criados temos agora de os posicionar corretamente. Adicione o código seguinte após o adicionado no ponto anterior.

            ```javascript
            body.position.set(0, 1, 0);
            head.position.set(0, 2.1, 0);
            leg_r.position.set(.5, -.5, 0);
            leg_l.position.set(-.5, -.5, 0);
            arm_r.position.set(1.2, 1.25, 0);
            arm_l.position.set(-1.2, 1.25, 0);
            antena_r.position.set(.85, 3, 0);
            antena_l.position.set(-.85, 3, 0);
            ```

        - Vamos criar um grupos e adicionar a este todos os objetos criados anteriormente. Adicione o código seguinte após o adicionado no ponto anterior.

            ```javascript
            let group = new THREE.Group();
            group.add(head);
            group.add(body);
            group.add(leg_r);
            group.add(leg_l);
            group.add(arm_r);
            group.add(arm_l);
            group.add(antena_r);
            group.add(antena_l); 
            ```

        - A função fica finalizada retornando o grupo. Adicione o código seguinte após o adicionado no ponto anterior.

            ```javascript
            return group;
            ```

    1. Vamos agora adicionar o nosso android à cena.

        - Vamos adicionar uma variável global para receber o nosso android. No topo do ficheiro adicione a variável `android` de modo a ficar como ilustrado de seguida:

            ```javascript
                let camera, scene, renderer, android; 
            ```

        - Na funcão `init()` a seguir às luzes adicione o seguinte código para receber o android criado pela função `getAndroid`.

            ```javascript
            android = getAndroid();
            scene.add(android);
            ```

    1. O android deve agora aparecer no centro da nossa cena. Abra no seu navegador a página `android.htm` e verifique.

    1. Vamos agora animar um pouco esta cena. 

        - Vamos adicionar uma variável global para definir a direcção do nosso android. No topo do ficheiro adicione a variável `direction` de modo a ficar como ilustrado de seguida:

            ```javascript
                let camera, scene, renderer, android, direction = 1; 
            ```
        
        - Altere a função `animate` de modo a ficar semelhante ao código seguinte. Esta função irá permitir ao nosso android mover-se no eixo `z` tendo em conta a direção dada pela variável `direction`. A direção é alterada sempre que o android chege à posição `5` ou `-5` no eixo `z`.  

            ```javascript
            function animate() {
                requestAnimationFrame(animate);

                android.position.z += 0.05 * direction;

                if (android.position.z > 5) {
                    direction = -1;
                } else if (android.position.z < -5) {
                    direction = 1;
                }

                renderer.render(scene, camera);
            }
            ```

    1. O android está agora finalizado. Abra a página `android.htm` e verifique.
