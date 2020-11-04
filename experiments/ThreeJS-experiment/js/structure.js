/*
ALL objects geometry, texture and material.


*/

var maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
var textureLoader = new THREE.TextureLoader();

//Textures
var asphaltTexNormal = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_NORM.jpg" );
asphaltTexNormal.wrapS = THREE.RepeatWrapping;
asphaltTexNormal.wrapT = THREE.RepeatWrapping;
asphaltTexNormal.repeat.set( 3, 2);
var asphaltTexAO = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_OCC.jpg" );
asphaltTexAO.wrapS = THREE.RepeatWrapping;
asphaltTexAO.wrapT = THREE.RepeatWrapping;
asphaltTexAO.repeat.set( 3, 2);
var asphaltTexRough = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_ROUGH.jpg" );
asphaltTexRough.wrapS = THREE.RepeatWrapping;
asphaltTexRough.wrapT = THREE.RepeatWrapping;
asphaltTexRough.repeat.set( 3, 2);
var asphaltTexDisp = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_DISP.png" );
asphaltTexDisp.wrapS = THREE.RepeatWrapping;
asphaltTexDisp.wrapT = THREE.RepeatWrapping;
asphaltTexDisp.repeat.set( 3, 2);
var asphaltTexMap = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_COLOR.jpg" );
asphaltTexMap.wrapS = THREE.RepeatWrapping;
asphaltTexMap.wrapT = THREE.RepeatWrapping;
asphaltTexMap.repeat.set( 3, 2);

var asphaltWallMat = new THREE.MeshPhysicalMaterial( {
    normalMap: asphaltTexNormal,
    normalScale: new THREE.Vector2( 5, 5 ),
    aoMap: asphaltTexAO,
    aoMapIntensity: 5,
    displacementMap: asphaltTexDisp,
    displacementScale: 15,
    map: asphaltTexMap,
    roughnessMap: asphaltTexRough,
    side: THREE.FrontSide,
    //color: 0x111852,
    //shading: THREE.FlatShading,
    //metalness: 0.1,
    //roughness: 5,
    opacity: 1,
} );

var concrete5TexNormal = textureLoader.load( "assets/textures/SD/concrete5/Concrete_Wall_001_Normal.jpg" );
concrete5TexNormal.wrapS = THREE.RepeatWrapping;
concrete5TexNormal.wrapT = THREE.RepeatWrapping;
concrete5TexNormal.repeat.set( 3, 1);
var concrete5TexAO = textureLoader.load( "assets/textures/SD/concrete5/Concrete_Wall_001_Ambient_Occlusion.jpg" );
concrete5TexAO.wrapS = THREE.RepeatWrapping;
concrete5TexAO.wrapT = THREE.RepeatWrapping;
concrete5TexAO.repeat.set( 3, 1);
var concrete5TexRough = textureLoader.load( "assets/textures/SD/concrete5/Concrete_Wall_001_Roughness.jpg" );
concrete5TexRough.wrapS = THREE.RepeatWrapping;
concrete5TexRough.wrapT = THREE.RepeatWrapping;
concrete5TexRough.repeat.set( 3, 1);
var concrete5TexDisp = textureLoader.load( "assets/textures/SD/concrete5/Concrete_Wall_001_Height.png" );
concrete5TexDisp.wrapS = THREE.RepeatWrapping;
concrete5TexDisp.wrapT = THREE.RepeatWrapping;
concrete5TexDisp.repeat.set( 3, 1);
var concrete5TexMap = textureLoader.load( "assets/textures/SD/concrete5/Concrete_Wall_001_Base_Color.jpg" );
concrete5TexMap.wrapS = THREE.RepeatWrapping;
concrete5TexMap.wrapT = THREE.RepeatWrapping;
concrete5TexMap.repeat.set( 3, 1);

var concrete5WallMat = new THREE.MeshPhysicalMaterial( {
    normalMap: concrete5TexNormal,
    //normalScale: new THREE.Vector2( 5, 5 ),
    aoMap: concrete5TexAO,
    displacementMap: concrete5TexDisp,
    displacementScale: 1,
    map: concrete5TexMap,
    roughnessMap: concrete5TexRough,
    side: THREE.FrontSide,
    //color: 0x111852,
    //shading: THREE.FlatShading,
    //metalness: 0.1,
    //roughness: 5,
    opacity: 1,
} );

var concreteSimpleTexNormal = textureLoader.load( "assets/textures/noise02_n.jpg" );
concreteSimpleTexNormal.wrapS = THREE.RepeatWrapping;
concreteSimpleTexNormal.wrapT = THREE.RepeatWrapping;
concreteSimpleTexNormal.repeat.set( 3, 1);
var concreteTexMap = textureLoader.load( "assets/textures/concrete_simple.jpg" );
concreteTexMap.wrapS = THREE.RepeatWrapping;
concreteTexMap.wrapT = THREE.RepeatWrapping;
concreteTexMap.repeat.set( 4, 1);

var concreteSimplelMat = new THREE.MeshPhysicalMaterial( {
    normalMap: concreteSimpleTexNormal,
    map: concreteTexMap,
    //roughnessMap: concreteTexRough,
    //normalScale: new THREE.Vector2( 0.1, 0.1 ),
    side: THREE.FrontSide,
    color: 0xc9c9c9,
    //shading: THREE.FlatShading,
    metalness: 0.05,
    roughness: 0.9,
} );

var SimpleBlackMat = new THREE.MeshStandardMaterial({
  side: THREE.FrontSide,
  color: 0x0d182a,
  FlatShading: true,
  metalness: 0,
  roughness: 1,
  opacity: 1,
})

var SimpleLightGreyMat = new THREE.MeshStandardMaterial({
  side: THREE.FrontSide,
  color: 0x535353,
})

var SimpleGreyMat = new THREE.MeshStandardMaterial({
  side: THREE.FrontSide,
  color: 0x31363e,
})

var SimpleFloorMat = new THREE.MeshStandardMaterial({
  side: THREE.FrontSide,
  color: 0x090f2f,
})

var SimpleWhiteMat = new THREE.MeshStandardMaterial({
  side: THREE.FrontSide,
  color: 0xe4e4e4,
})

var SimpleRedMat = new THREE.MeshStandardMaterial({
  side: THREE.FrontSide,
  color: 0x7e002a,
})



//mainfloor
var geometry = new THREE.PlaneGeometry( 102, 102, 32 );
var floor = new THREE.Mesh( geometry, SimpleFloorMat );
//floor.position.y =-10;
floor.position.y =0;
floor.rotation.x = -Math.PI / 2;
floor.position.z =0;
scene.add(floor);

//Walls
var geometry = new THREE.PlaneGeometry( 102, 67, 20 );
var FrontWall = new THREE.Mesh( geometry, SimpleWhiteMat );
//FrontWall.position.x =-15;
FrontWall.position.y =33.5;
FrontWall.rotation.y = Math.PI;
FrontWall.position.z =51;
scene.add(FrontWall);

var geometry = new THREE.PlaneGeometry( 102, 67, 20 );
var BackWall = new THREE.Mesh( geometry, SimpleWhiteMat );
//BackWall.position.x =-15;
BackWall.position.y =33.5;
BackWall.rotation.y = 2*Math.PI;
BackWall.position.z =-51;
scene.add(BackWall);

var geometry = new THREE.PlaneGeometry( 102, 40, 20 );
var LeftWall = new THREE.Mesh( geometry, SimpleWhiteMat );
LeftWall.position.x =51;
LeftWall.position.y =20;
LeftWall.rotation.y = -Math.PI / 2;
LeftWall.position.z =0;
scene.add(LeftWall);

var geometry = new THREE.PlaneGeometry( 102, 40, 20 );
var RightWall = new THREE.Mesh( geometry, SimpleWhiteMat );
RightWall.position.x =-51;
RightWall.position.y =20;
RightWall.rotation.y = Math.PI / 2;
RightWall.position.z =0;
scene.add(RightWall);

//Ceilling
var geometry = new THREE.BoxGeometry( 1, 55, 102 );
var LeftCeil = new THREE.Mesh( geometry, SimpleFloorMat );
LeftCeil.position.x =26;
LeftCeil.position.y =48;
//LeftCeil.rotation.y = -Math.PI / 2;
LeftCeil.position.z =0;
LeftCeil.rotation.z = 1.25;
//LeftCeil.name=LeftCeil;
scene.add(LeftCeil);

var geometry = new THREE.BoxGeometry( 1, 55, 102 );
var RightCeil = new THREE.Mesh( geometry, SimpleFloorMat );
RightCeil.position.x =-26;
RightCeil.position.y =48;
//LeftCeil.rotation.y = -Math.PI / 2;
RightCeil.position.z =0;
RightCeil.rotation.z =-1.25;
//LeftCeil.name=LeftCeil;
scene.add(RightCeil);

//DecTrans1
var geometry = new THREE.PlaneGeometry( 20, 20, 10 );
var material = new THREE.MeshStandardMaterial( {color: 0xb40000,side: THREE.FrontSide} );

var DecTrans1Mat = new THREE.TextureLoader().load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png' );
DecTrans1Mat.wrapS = DecTrans1Mat.wrapT = THREE.RepeatWrapping;
DecTrans1Mat.offset.set( 0, 0 );
DecTrans1Mat.repeat.set( 1, 1 );
var DecTrans1Mat = new THREE.MeshPhongMaterial( {
    map: DecTrans1Mat,
    color: 0x000000,
    transparent: true,
    opacity: 0.55,
    side: THREE.FrontSide,
    alphaTest: 0.1,
} );

var DecTrans1 = new THREE.Mesh( geometry, DecTrans1Mat );
DecTrans1.rotation.x =-Math.PI / 2;;
DecTrans1.position.y =0.05;
//DecTrans1.rotation.y = Math.PI*2;
DecTrans1.position.z =0;
scene.add(DecTrans1);
