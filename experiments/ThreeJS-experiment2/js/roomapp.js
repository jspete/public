var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = -8;
camera.position.x = 1;
camera.position.y = 6;
//var cameraHelper = new THREE.CameraHelper(camera);
//scene.add(cameraHelper);

// resize function
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}


var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setClearColor(0x0095cc, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.gammaFactor = 2;
renderer.gammaOutput = true;
document.body.appendChild( renderer.domElement );
        
controls = new THREE.OrbitControls(camera,renderer.domElement);

//grid helper
/*
var size = 40;
var divisions = 40;
var gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );
*/

function animate() {
    //if ( camera.position.y < 0.25 ) camera.position.y = 0.25;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    //evolveSmoke();
}
animate();

//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );
/*

var w1g = new THREE.BoxBufferGeometry( 1, 7, 20 );
var w1t = new THREE.TextureLoader().load( '../assets/whitewall.png' );
        w1t.wrapS = w1t.wrapT = THREE.RepeatWrapping;
        w1t.offset.set( 0, 0 );
        w1t.repeat.set( 11, 11 );
var w1m = new THREE.MeshLambertMaterial( {
    color: 0x00ff00,
    roughness: 0.8,
    metalness: 0.1,
    emissive: 0,
    map:w1t, 
    side: THREE.DoubleSide,
    depthFunc: 3,
    depthTest: true,
    depthWrite: true,
    stencilWrite: false
} );

var w1 = new THREE.Mesh( w1g, w1m );
scene.add( w1 );


var geometry = new THREE.BoxBufferGeometry( 1, 7, 20 );
var texture = new THREE.TextureLoader().load( '../assets/greycarpet.png' );

texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.offset.set( 0, 0 );
texture.repeat.set( 4, 0.5 );
        
var material = new THREE.MeshStandardMaterial( {map:texture, side: THREE.DoubleSide} );
var wall1 = new THREE.Mesh( geometry, material );
//wall1.position.x =10;
//wall1.position.y =1.5;
//wall1.rotation.y = Math.PI / 2;
 scene.add(wall1);

*/



