/*
ALL LIGHTING SETUP.


*/


//AmbientLight soft white light
var AmbientLight = new THREE.AmbientLight( 0xd4d4d4, 1 ); 
AmbientLight.position.set( 0, 6, 0 );
scene.add( AmbientLight );
var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( AmbientLight, sphereSize );
scene.add( pointLightHelper );

/*
// RectLight
var rectLight = new THREE.RectAreaLight( 0xffffff, 1,  24, 2 );
rectLight.position.set( 0, 17.75, 9 );
rectLight.lookAt( 0, 0, 9 );
scene.add( rectLight );

rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
rectLight.add( rectLightHelper );

var rectLight2 = new THREE.RectAreaLight( 0xff964b, 4,  10, 0.25 );
rectLight2.position.set( 0, 8.76, 0 );
rectLight2.lookAt( 0, 1.5, 0 );
scene.add( rectLight2 );

rectLight2Helper = new THREE.RectAreaLightHelper( rectLight2 );
rectLight2.add( rectLight2Helper );

var rectLight3 = new THREE.RectAreaLight( 0xff964b, 4,  10, 0.25 );
rectLight3.position.set( 0, 8.76, -8 );
rectLight3.lookAt( 0, 1.5, -8 );
scene.add( rectLight3 );

rectLight3Helper = new THREE.RectAreaLightHelper( rectLight3 );
rectLight3.add( rectLight3Helper );

//lightTop1
var lightTop1 = new THREE.PointLight(0xfff4dc,1,20);
lightTop1.position.set( 0, 16, 5 );
scene.add(lightTop1);
var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( lightTop1, sphereSize );
scene.add( pointLightHelper );

//lightTop2
var lightTop2 = new THREE.PointLight(0xfff4dc,1,20);
lightTop2.position.set( -10, 16, 5 );
scene.add(lightTop2);
var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( lightTop2, sphereSize );
scene.add( pointLightHelper );

//lightTop3
var lightTop3 = new THREE.PointLight(0xfff4dc,1,20);
lightTop3.position.set( 10, 16, 5 );
scene.add(lightTop3);
var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( lightTop3, sphereSize );
scene.add( pointLightHelper );*/


//IndustrialLight1
/*
var IndustrialLight1 = new THREE.SpotLight( 0xff964b, 0.5 ); 
IndustrialLight1.position.set( 7, 6.5, -5 );
scene.add( IndustrialLight1 );
var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( IndustrialLight1, sphereSize );
scene.add( pointLightHelper );
*/

var LampLight1 = new THREE.SpotLight( 0xff964b, 1 ); 
LampLight1.position.set( 7.5, 4.35, -1.4 );
//LampLight1.rotation.z = Math.PI / 4 ;
LampLight1.angle = 0.4;
LampLight1.penumbra = 0.1;
LampLight1.decay = 1;
LampLight1.distance = 200;
scene.add( LampLight1.target );
scene.add( LampLight1 );

var targetObject = new THREE.Object3D();
scene.add(targetObject);
targetObject.position.x =4;
targetObject.position.y =2;
targetObject.position.z =-5;

LampLight1.target = targetObject;


var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( LampLight1, sphereSize );
scene.add( pointLightHelper );
/*

//IndustrialLight2
var IndustrialLight2 = new THREE.PointLight( 0xff7a1b, 0.5 ); 
IndustrialLight2.position.set( -7, 6.5, -5 );
scene.add( IndustrialLight2 );
var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( IndustrialLight2, sphereSize );
scene.add( pointLightHelper ); */
/*

smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
smokeMaterial = new THREE.MeshLambertMaterial({color: 0x00dddd, map: smokeTexture, transparent: true});
smokeGeo = new THREE.PlaneGeometry(300,300);
smokeParticles = [];

for (p = 0; p < 150; p++) {
    var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
    particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
    particle.rotation.z = Math.random() * 360;
    scene.add(particle);
    smokeParticles.push(particle);
}

 
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}*/