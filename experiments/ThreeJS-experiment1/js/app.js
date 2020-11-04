var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 50;
camera.position.z = 60;
//var cameraHelper = new THREE.CameraHelper(camera);
//scene.add(cameraHelper);

//Moving camera
scene.add(splineObject2);
var movingcamera = 2;
var camPosIndex = 0;

// resize function
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.setClearColor(0x090f2f, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.gammaFactor = 2;
renderer.gammaOutput = true;
// ToneMapping and params
renderer.toneMapping = THREE.CineonToneMapping;
//renderer.toneMappingWhitePoint = 1.0;
renderer.toneMappingExposure = 1.0;

document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);

// helpers
var axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);
/*
var helper = new THREE.CameraHelper( camera );
scene.add( helper );
*/
function animate() {
  //if ( camera.position.y < 0.25 ) camera.position.y = 0.25;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  if (movingcamera == 2 ) {
    camPosIndex++;
    if (camPosIndex > 10000) {
      camPosIndex = 0;
    }
    var camPos = spline.getPoint(camPosIndex / 3000);
    var camRot = spline.getTangent(camPosIndex / 3000);

    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;

    camera.rotation.x = camRot.x;
    camera.rotation.y = camRot.y;
    camera.rotation.z = camRot.z;

  //camera.lookAt(spline.getPoint((camPosIndex+1) / 3000));
  camera.lookAt (spitfire.position);
  }

}
animate();
