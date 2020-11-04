/*
ALL LIGHTING SETUP.
*/

//AmbientLight soft white light
var AmbientLight = new THREE.AmbientLight(0xfefff0, 1);
AmbientLight.position.set(0, 20, 0);
scene.add(AmbientLight);
var sphereSize = 1;
var AmbientLightHelper = new THREE.PointLightHelper(AmbientLight, sphereSize);
scene.add(AmbientLightHelper);


//color intensity distance
var Pointlight1 = new THREE.PointLight(0x0f134d, 20, 50);
Pointlight1.position.set(0, 8, 0);
scene.add(Pointlight1);
var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper(Pointlight1, sphereSize);
scene.add(pointLightHelper);

/*
var directionalLight1 = new THREE.DirectionalLight( 0x20284d, 0.5 );
directionalLight1.position.set( 5, 12, 0 );
scene.add( directionalLight1 );
var directionalLight1helper = new THREE.DirectionalLightHelper( directionalLight1, 5 );
scene.add( directionalLight1helper );
*/

//color intensity distance angle penumbra decay
var SpotLight1 = new THREE.SpotLight(0x20284d, 2, 20);
SpotLight1.position.set(5, 30, 0);
SpotLight1.castShadow = true;
SpotLight1.angle = Math.PI / 4;
SpotLight1.penumbra = 0.05;
SpotLight1.decay = 2;
SpotLight1.distance = 35;
scene.add(SpotLight1);
var SpotLight1helper = new THREE.SpotLightHelper(SpotLight1, 5);
scene.add(SpotLight1helper);


/*
// RectLight
THREE.RectAreaLightUniformsLib.init();
//color, intensity,  width, height
var RALight1 = new THREE.RectAreaLight( 0xde0000, 100,  25, 20 );
RALight1.position.set( 0, 15, 0 );
RALight1.lookAt( 0, 0, 9 );
scene.add( RALight1 );

var RALight1Helper = new RectAreaLightHelper(RALight1,0xde0000);
RALight1.add( RALight1Helper );
*/
