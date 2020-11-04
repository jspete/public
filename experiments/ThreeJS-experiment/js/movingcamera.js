//MOVING Camera

/*
var CurvePlane = new THREE.SplineCurve3( [
  //x y z
  new THREE.Vector3( 60, 0, 50 );
	new THREE.Vector3( 0, 10, 0 );

] );



var points = CurvePlane.getPoints( 50 );
var geometry = new THREE.BufferGeometry().setFromPoints( points );
var material = new THREE.LineBasicMaterial( { color : 0xffffff } );

var splineObject2 = new THREE.Line( geometry, material );

scene.add(splineObject2);

*/

//x y z
var spline = new THREE.SplineCurve3( [
	new THREE.Vector3( 0, 50, 60 ),
	new THREE.Vector3( -10, 20, 20 ),
  new THREE.Vector3( -5, 5, -40 ),
  //new THREE.Vector3( 30, 20, 60 ),
] );

var points = spline.getPoints( 20 );
var geometry = new THREE.BufferGeometry().setFromPoints( points );
var material = new THREE.LineBasicMaterial( { color : 0xffffff } );
var splineObject2 = new THREE.Line( geometry, material );
