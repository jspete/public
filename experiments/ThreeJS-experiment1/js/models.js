// Instantiate a loader
/*
var loader = new THREE.GLTFLoader();

function door_load(gltf) {
    door = gltf.scene.children[0];
    door.scale.set(0.05, 0.05, 0.05);

    scene.add(door);
    door.position.x = 7;
    door.position.z = -9.6;
    //door.rotation.z = Math.PI / 2.1;
    door.position.y = 10;

}

loader.load('assets/models/door/scene.gltf', door_load);
*/

var loader = new THREE.GLTFLoader();

function spitfire_load(gltf) {
    spitfire = gltf.scene.children[0];
    spitfire.scale.set(30, 30, 30);

    scene.add(spitfire);
    spitfire.position.x = 5;
    spitfire.position.z = -15;
    spitfire.rotation.x = -1.8;
    spitfire.position.y = 6.5;
}

loader.load('assets/models/spitfire/scene.gltf', spitfire_load);
spitfire.matrixAutoUpdate  = false;
spitfire.castShadow = true;
spitfire.receiveShadow = true;
