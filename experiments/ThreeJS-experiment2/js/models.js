// Instantiate a loader
var loader = new THREE.GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
/*
var dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath( '/examples/js/libs/draco' );
loader.setDRACOLoader( dracoLoader );
*/

// Load a glTF resource
/*
loader.load(
	// resource URL
	'assets/paperboard/scene.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

        
		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Scene
		gltf.scenes; // Array<THREE.Scene>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
        */


function paperboard_load(gltf) {
    paperboard = gltf.scene.children[0];
    paperboard.scale.set(0.07, 0.07, 0.07);

    scene.add(paperboard);
    paperboard.position.x = 12;
    paperboard.position.z = -11;
    paperboard.rotation.z = Math.PI * 0.8;
    paperboard.position.y = 3.47;

}
//loader.load('assets/paperboard/scene.gltf', paperboard_load);


function maintable_load(gltf) {
    paperboard = gltf.scene.children[0];
    paperboard.scale.set(3.5, 3.5, 3.5);

    scene.add(paperboard);
    paperboard.position.x = 5;
    paperboard.position.z = -3;
    paperboard.rotation.z = Math.PI / 2.1;
    paperboard.position.y = 1.5;

}
loader.load('assets/maintable/scene.gltf', maintable_load);

function chair_load(gltf) {
    chair = gltf.scene.children[0];
    chair.scale.set(1.7, 1.7, 1.7);

    scene.add(chair);
    chair.position.x = 5;
    chair.position.z = -6;
    chair.rotation.z = Math.PI / 1.8;
    chair.position.y = 1.6;

}
loader.load('assets/chair/scene.gltf', chair_load);

function box_load(gltf) {
    box = gltf.scene.children[0];
    box.scale.set(1.7, 1.7, 1.7);

    scene.add(box);
    box.position.x = 13.8;
    box.position.z = 3;
    //box.rotation.z = Math.PI / 2.1;
    box.position.y = 0.85;

}
loader.load('assets/box/scene.gltf', box_load);
/*
function cabinet_load(gltf) {
    cabinet = gltf.scene.children[0];
    cabinet.scale.set(3, 3, 3);

    scene.add(cabinet);
    cabinet.position.x = 11;
    cabinet.position.z = -14;
    cabinet.rotation.z = Math.PI * 2 ;
    cabinet.position.y = 3;

}
loader.load('assets/cabinet/scene.gltf', cabinet_load); */

function lamp_load(gltf) {
    lamp = gltf.scene.children[0];
    lamp.scale.set(0.04, 0.04, 0.04);

    scene.add(lamp);
    lamp.position.x = 7;
    lamp.position.z = -2;
    lamp.rotation.z = Math.PI * 1.3;
    lamp.position.y = 3.9;

}
loader.load('assets/lamp/scene.gltf', lamp_load);

function shelf_load(gltf) {
    shelf = gltf.scene.children[0];
    shelf.scale.set(0.03, 0.03, 0.03);

    scene.add(shelf);
    shelf.position.x = 13.4;
    shelf.position.z = -2;
    shelf.rotation.z = Math.PI / 2;
    shelf.position.y = 0;

}
loader.load('assets/shelf/scene.gltf', shelf_load);

function metalshelf_load(gltf) {
    metalshelf = gltf.scene.children[0];
    metalshelf.scale.set(0.03, 0.03, 0.03);

    scene.add(metalshelf);
    metalshelf.position.x = -13.8;
    metalshelf.position.z = -10;
    //simpleTable.rotation.z = Math.PI / 2;
    metalshelf.position.y = 2.72;

}
loader.load('assets/metalshelf/scene.gltf', metalshelf_load);

/*
function simpleTable_load(gltf) {
    simpleTable = gltf.scene.children[0];
    simpleTable.scale.set(4, 4, 4);

    scene.add(simpleTable);
    simpleTable.position.x = -8;
    simpleTable.position.z = -1;
    //simpleTable.rotation.z = Math.PI / 2;
    simpleTable.position.y = 1.25;

}
loader.load('assets/simpletable/scene.gltf', simpleTable_load);
*/

/*
loader.load('assets/industriallight/scene.gltf', industriallight_load);
loader.load('assets/industriallight/scene.gltf', industriallight2_load);

function industriallight_load(gltf) {
    industriallight = gltf.scene.children[0];
    industriallight.scale.set(0.03, 0.03, 0.03);

    scene.add(industriallight);
    industriallight.position.x = -7;
    industriallight.position.y = 6.71;
    industriallight.position.z = -5;

}

function industriallight2_load(gltf) {
    industriallight2 = gltf.scene.children[0];
    industriallight2.scale.set(0.03, 0.03, 0.03);

    scene.add(industriallight2);
    industriallight2.position.x = 7;
    industriallight2.position.y = 6.71;
    industriallight2.position.z = -5;
}

loader.load('assets/metaldoor/scene.gltf', metaldoor_load);

function metaldoor_load(gltf) {
    metaldoor = gltf.scene.children[0];
    metaldoor.scale.set(3, 3, 3);

    scene.add(metaldoor);
    metaldoor.position.x = 11;
    metaldoor.position.y = 3;
    metaldoor.position.z = -15;
    metaldoor.rotation.z = Math.PI/2;

}
*/