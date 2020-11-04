/*
ALL objects geometry, texture and material.


*/

var maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
var textureLoader = new THREE.TextureLoader();

function gradientBox(cutInX, cutInY, opacity) {
    const c = document.createElement('canvas');
    const g = c.getContext('2d');
    c.width = c.height = 128;
    g.fillStyle = "white";
    g.fillRect(0,0,128,128);
    let grad = g.createLinearGradient(0,0,128,0);
    grad.addColorStop(0, `rgba(0,0,0,${opacity})`);
    grad.addColorStop(cutInX, `rgba(0,0,0,0)`);
    grad.addColorStop(1-cutInX, `rgba(0,0,0,0)`);
    grad.addColorStop(1, `rgba(0,0,0,${opacity})`);
    g.fillStyle = grad;
    g.fillRect(0,0,128,128);
    grad = g.createLinearGradient(0,0,0,128);
    grad.addColorStop(0, `rgba(255,255,255,${opacity})`);
    grad.addColorStop(cutInY, `rgba(255,255,255,0)`);
    grad.addColorStop(1-cutInY, `rgba(0,0,0,0)`);
    grad.addColorStop(1, `rgba(0,0,0,${opacity})`);
    g.fillStyle = grad;
    g.fillRect(0,0,128,128);
        
    return new THREE.CanvasTexture(c);
}

function noiseMap(size,low,high) {
    const c = document.createElement('canvas');
    const g = c.getContext('2d');
    c.width = c.height = size;
    const range = low-high;
    const data = g.getImageData(0,0,c.width,c.height);
    for(var i =0;i<data.data.length;i+=4) {
        var rand = Math.floor((Math.random()*range+low)*255);
        data.data[i+0] = rand;
        data.data[i+1] = rand;
        data.data[i+2] = rand;
        data.data[i+3] = 255;
    }
    g.putImageData(data,0,0);
    return new THREE.CanvasTexture(c);
}

var noiseWallMat = new THREE.MeshStandardMaterial( {
    color:0xa3a3a3,
    roughnessMap:this.gradientBox(0.3,0.3,1),
    roughness:0.9,
    metalnessMap:this.noiseMap(1024,0.2,0.6),
    metalness:0.05,
    map:this.gradientBox(0.3,0.3,0.05),
    side: THREE.DoubleSide,
} );

var noiseConcreteMat = new THREE.MeshStandardMaterial( {
    color:0x8e8e8e,
    roughnessMap:this.gradientBox(0.3,0.3,1),
    roughness:0.9,
    metalnessMap:this.noiseMap(1024,0.2,0.6),
    metalness:0.05,
    //wrapS: THREE.RepeatWrapping,
    //wrapT: THREE.RepeatWrapping,
    //repeat: ( 2, 8),
    map:this.gradientBox(0.3,0.3,0.05),
    side: THREE.DoubleSide,
} );

//textures

var WhiteInterlacedTex = new THREE.TextureLoader().load( 'assets/textures/interlaced.png' );
//WhiteInterlacedTex.anisotropy = maxAnisotropy; 
WhiteInterlacedTex.wrapS = WhiteInterlacedTex.wrapT = THREE.MirroredRepeatWrapping;
WhiteInterlacedTex.offset.set( 0, 0 );
WhiteInterlacedTex.repeat.set( 6, 2 );
var WhiteInterlacedMat = new THREE.MeshLambertMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:WhiteInterlacedTex, 
    opacity:1
} );

var TexWood = new THREE.TextureLoader().load( 'assets/floorwood.png' );
TexWood.wrapS = TexWood.wrapT = THREE.RepeatWrapping;
TexWood.offset.set( 0, 0 );
TexWood.repeat.set( 8, 3 );
var TexWoodMat = new THREE.MeshLambertMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:TexWood, 
    opacity:1
} );

var Ground1 = new THREE.TextureLoader().load( 'assets/textures/ground.jpg' );
Ground1.wrapS = Ground1.wrapT = THREE.RepeatWrapping;
Ground1.offset.set( 0, 0 );
Ground1.repeat.set( 2, 1 );
var Ground1Mat = new THREE.MeshPhysicalMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:Ground1, 
    opacity:1
} );

var Ground2 = new THREE.TextureLoader().load( 'assets/textures/groundgreen.jpg' );
Ground2.wrapS = Ground2.wrapT = THREE.RepeatWrapping;
Ground2.offset.set( 0, 0 );
Ground2.repeat.set( 0.5, 1 );
var Ground2Mat = new THREE.MeshPhysicalMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:Ground2,
    opacity:1,
    metalness: 0.1,
    roughness: 0.9,
} );

var SubtleSwirl = new THREE.TextureLoader().load( 'assets/subtlepatterns/blconcrete_wall2.png' );
SubtleSwirl.wrapS = SubtleSwirl.wrapT = THREE.RepeatWrapping;
SubtleSwirl.offset.set( 0, 0 );
SubtleSwirl.repeat.set( 4, 3 );
var SubtleSwirlMat = new THREE.MeshLambertMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:SubtleSwirl, 
    opacity:1
} );

/*
var PilarMat = new THREE.MeshPhysicalMaterial( {
    metalness: 0.1,
    roughnessMap:this.gradientBox(0.2,0.2,1),
    roughness: 0.9,
    reflectivity: 0.0,
    //anisotropy: maxAnisotropy,
    side: THREE.FrontSide,
    color: 0xb2b2b2, 
} );

*/

var PilarMatTex = new THREE.TextureLoader().load( 'assets/textures/cards_concrete_grey.jpg' );

var PilarMat = PilarMatTex;
PilarMat.wrapS = PilarMat.wrapT = THREE.RepeatWrapping;
PilarMat.offset.set( 0, 0 );
PilarMat.repeat.set( 0.25, 2 );
var PilarMat = new THREE.MeshPhysicalMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:PilarMat,
    opacity:1,
    metalness: 0,
    roughness: 0.9,
} );

var PilarMat0 = new THREE.TextureLoader().load( 'assets/textures/cards_concrete_grey.jpg' );
PilarMat0.wrapS = PilarMat0.wrapT = THREE.RepeatWrapping;
PilarMat0.offset.set( 0, 0 );
PilarMat0.repeat.set( 0.25, 1 );
var PilarMat0 = new THREE.MeshPhysicalMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:PilarMat0,
    opacity:1,
    metalness: 0,
    roughness: 0.9,
} );

var PilarMat1 = new THREE.TextureLoader().load( 'assets/textures/cards_concrete_grey.jpg' );
PilarMat1.wrapS = PilarMat1.wrapT = THREE.RepeatWrapping;
PilarMat1.offset.set( 0, 0 );
PilarMat1.repeat.set( 3, 1 );
var PilarMat1 = new THREE.MeshPhysicalMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:PilarMat1,
    opacity:1,
    metalness: 0,
    roughness: 0.9,
} );

var PilarMat2 = new THREE.TextureLoader().load( 'assets/textures/cards_concrete_grey.jpg' );
PilarMat2.wrapS = PilarMat1.wrapT = THREE.RepeatWrapping;
PilarMat2.offset.set( 0, 0 );
PilarMat2.repeat.set( 3, 0.25 );
var PilarMat2 = new THREE.MeshPhysicalMaterial( {
    color: 0xd4d4d4, 
    side: THREE.FrontSide, 
    map:PilarMat2,
    opacity:1,
    metalness: 0,
    roughness: 0.9,
} );

var tilesTexNormal = textureLoader.load( "assets/textures/SD/floortiles/Tiles_011_NORM.jpg" );
tilesTexNormal.wrapS = THREE.RepeatWrapping;
tilesTexNormal.wrapT = THREE.RepeatWrapping;
tilesTexNormal.repeat.set( 6, 4.5 );
var tilesTexAO = textureLoader.load( "assets/textures/SD/floortiles/Tiles_011_OCC.jpg" );
tilesTexAO.wrapS = THREE.RepeatWrapping;
tilesTexAO.wrapT = THREE.RepeatWrapping;
tilesTexAO.repeat.set( 6, 4.5 );
var tilesTexRough = textureLoader.load( "assets/textures/SD/floortiles/Tiles_011_ROUGH.jpg" );
tilesTexRough.wrapS = THREE.RepeatWrapping;
tilesTexRough.wrapT = THREE.RepeatWrapping;
tilesTexRough.repeat.set( 6, 4.5 );
var tilesTexDisp = textureLoader.load( "assets/textures/SD/floortiles/Tiles_011_DISP.png" );
tilesTexDisp.wrapS = THREE.RepeatWrapping;
tilesTexDisp.wrapT = THREE.RepeatWrapping;
tilesTexDisp.repeat.set( 6, 4.5 );
var tilesTexMap = textureLoader.load( "assets/textures/SD/floortiles/Tiles_011_COLOR.jpg" );
tilesTexMap.wrapS = THREE.RepeatWrapping;
tilesTexMap.wrapT = THREE.RepeatWrapping;
tilesTexMap.repeat.set( 6, 4.5 );

var tilesMat = new THREE.MeshPhysicalMaterial( {
    metalness: 0.05,
    roughness: 0.9,
    //clearcoat: 1.0,
    normalMap: tilesTexNormal,
    aoMap: tilesTexAO,
    //displacementMap: tilesTexDisp,
    //displacementScale: 0.05,
    //displacementBias: 0.05,
    map: tilesTexMap,
    roughnessMap: tilesTexRough,
    //normalScale: new THREE.Vector2( 0.1, 0.1 ),
    reflectivity: 0.0,
    //anisotropy: maxAnisotropy,
    //clearcoat: 0.0,
    //clearcoatRoughness: 0.0,
    side: THREE.FrontSide,
    color: 0x484848, 
} );

var TerrazzoTexNormal = textureLoader.load( "assets/textures/SD/terrazzo/Terrazzo_Tiles_001_normal.jpg" );
TerrazzoTexNormal.wrapS = THREE.RepeatWrapping;
TerrazzoTexNormal.wrapT = THREE.RepeatWrapping;
TerrazzoTexNormal.repeat.set( 10, 1);
var TerrazzoTexAO = textureLoader.load( "assets/textures/SD/terrazzo/Terrazzo_Tiles_001_ambientOcclusion.jpg" );
TerrazzoTexAO.wrapS = THREE.RepeatWrapping;
TerrazzoTexAO.wrapT = THREE.RepeatWrapping;
TerrazzoTexAO.repeat.set( 10, 1);
var TerrazzoTexRough = textureLoader.load( "assets/textures/SD/terrazzo/Terrazzo_Tiles_001_roughness.jpg" );
TerrazzoTexRough.wrapS = THREE.RepeatWrapping;
TerrazzoTexRough.wrapT = THREE.RepeatWrapping;
TerrazzoTexRough.repeat.set( 10, 1);
var TerrazzoTexDisp = textureLoader.load( "assets/textures/SD/terrazzo/Tiles_011_DISP.jpg" );
TerrazzoTexDisp.wrapS = THREE.RepeatWrapping;
TerrazzoTexDisp.wrapT = THREE.RepeatWrapping;
TerrazzoTexDisp.repeat.set( 10, 1);
var TerrazzoTexMap = textureLoader.load( "assets/textures/SD/terrazzo/Terrazzo_Tiles_001_basecolor.jpg" );
TerrazzoTexMap.wrapS = THREE.RepeatWrapping;
TerrazzoTexMap.wrapT = THREE.RepeatWrapping;
TerrazzoTexMap.repeat.set( 10, 1);

var TerrazzoMat = new THREE.MeshPhysicalMaterial( {
    metalness: 0.4,
    roughness: 1,
    //clearcoat: 1.0,
    normalMap: TerrazzoTexNormal,
    aoMap: TerrazzoTexAO,
    //displacementMap: tilesTexDisp,
    map: TerrazzoTexMap,
    roughnessMap: TerrazzoTexRough,
    //normalScale: new THREE.Vector2( 0.1, 0.1 ),
    
    reflectivity: 0.8,
    //anisotropy: maxAnisotropy,
    //clearcoat: 0.0,
    //clearcoatRoughness: 0.0,
    side: THREE.FrontSide
} );

var asphaltTexNormal = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_NORM.jpg" );
asphaltTexNormal.wrapS = THREE.RepeatWrapping;
asphaltTexNormal.wrapT = THREE.RepeatWrapping;
asphaltTexNormal.repeat.set( 3, 1);
var asphaltTexAO = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_OCC.jpg" );
asphaltTexAO.wrapS = THREE.RepeatWrapping;
asphaltTexAO.wrapT = THREE.RepeatWrapping;
asphaltTexAO.repeat.set( 3, 1);
var asphaltTexRough = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_ROUGH.jpg" );
asphaltTexRough.wrapS = THREE.RepeatWrapping;
asphaltTexRough.wrapT = THREE.RepeatWrapping;
asphaltTexRough.repeat.set( 3, 1);
var asphaltTexDisp = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_DISP.jpg" );
asphaltTexDisp.wrapS = THREE.RepeatWrapping;
asphaltTexDisp.wrapT = THREE.RepeatWrapping;
asphaltTexDisp.repeat.set( 3, 1);
var asphaltTexMap = textureLoader.load( "assets/textures/SD/asphalt/Asphalt_002_COLOR.jpg" );
asphaltTexMap.wrapS = THREE.RepeatWrapping;
asphaltTexMap.wrapT = THREE.RepeatWrapping;
asphaltTexMap.repeat.set( 3, 1);

var asphaltWallMat = new THREE.MeshPhysicalMaterial( {
    normalMap: asphaltTexNormal,
    aoMap: asphaltTexAO,
    displacementMap: asphaltTexDisp,
    map: asphaltTexMap,
    roughnessMap: concreteTexRough,
    //normalScale: new THREE.Vector2( 0.1, 0.1 ),
    side: THREE.FrontSide,
    color: 0x818181,
    shading: THREE.FlatShading,
    metalness: 0.1,
    roughness: 5,
} );

var concreteSimpleTexNormal = textureLoader.load( "assets/textures/noise02_n.jpg" );
concreteSimpleTexNormal.wrapS = THREE.RepeatWrapping;
concreteSimpleTexNormal.wrapT = THREE.RepeatWrapping;
concreteSimpleTexNormal.repeat.set( 3, 1);
var concreteTexMap = textureLoader.load( "assets/textures/concrete_simple.jpg" );
concreteTexMap.wrapS = THREE.RepeatWrapping;
concreteTexMap.wrapT = THREE.RepeatWrapping;
concreteTexMap.repeat.set( 3, 1);

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

var concreteblocksTexNormal = textureLoader.load( "assets/textures/SD/concrete4/Concrete_009_NORM.jpg" );
concreteblocksTexNormal.wrapS = THREE.RepeatWrapping;
concreteblocksTexNormal.wrapT = THREE.RepeatWrapping;
concreteblocksTexNormal.repeat.set( 3, 4);
var concreteblocksTexAO = textureLoader.load( "assets/textures/SD/concrete4/Concrete_009_OCC.jpg" );
concreteblocksTexAO.wrapS = THREE.RepeatWrapping;
concreteblocksTexAO.wrapT = THREE.RepeatWrapping;
concreteblocksTexAO.repeat.set( 3, 4);
var concreteblocksTexRough = textureLoader.load( "assets/textures/SD/concrete4/Concrete_009_ROUGH.jpg" );
concreteblocksTexRough.wrapS = THREE.RepeatWrapping;
concreteblocksTexRough.wrapT = THREE.RepeatWrapping;
concreteblocksTexRough.repeat.set( 3, 4);
var concreteblocksTexDisp = textureLoader.load( "assets/textures/SD/concrete4/Concrete_009_DISP.png" );
concreteblocksTexDisp.wrapS = THREE.RepeatWrapping;
concreteblocksTexDisp.wrapT = THREE.RepeatWrapping;
concreteblocksTexDisp.repeat.set( 3, 4);
var concreteblocksTexMap = textureLoader.load( "assets/textures/SD/concrete4/Concrete_009_COLOR.jpg" );
concreteblocksTexMap.wrapS = THREE.RepeatWrapping;
concreteblocksTexMap.wrapT = THREE.RepeatWrapping;
concreteblocksTexMap.repeat.set( 3, 4);

var concreteblocks = new THREE.MeshPhysicalMaterial( {
    normalMap: concreteblocksTexNormal,
    map: concreteblocksTexMap,
    aoMap: concreteblocksTexAO,
    //displacementMap: concreteblocksTexDisp,
    roughnessMap: concreteblocksTexRough,
    //roughnessMap: concreteTexRough,
    //normalScale: new THREE.Vector2( 0.1, 0.1 ),
    side: THREE.FrontSide,
    color: 0xd6d6d6,
    //shading: THREE.FlatShading,
    metalness: 0.05,
    roughness: 0.9,
} );

var concreteTexNormal = textureLoader.load( "assets/textures/SD/concretewall/Concrete_Wall_001_Normal.jpg" );
concreteTexNormal.wrapS = THREE.RepeatWrapping;
concreteTexNormal.wrapT = THREE.RepeatWrapping;
concreteTexNormal.repeat.set( 4, 1);
var concreteTexAO = textureLoader.load( "assets/textures/SD/concretewall/Concrete_Wall_001_Ambient_Occlusion.jpg" );
concreteTexAO.wrapS = THREE.RepeatWrapping;
concreteTexAO.wrapT = THREE.RepeatWrapping;
concreteTexAO.repeat.set( 4, 1);
var concreteTexRough = textureLoader.load( "assets/textures/SD/concretewall/Concrete_Wall_001_Roughness.jpg" );
concreteTexRough.wrapS = THREE.RepeatWrapping;
concreteTexRough.wrapT = THREE.RepeatWrapping;
concreteTexRough.repeat.set( 4, 1);
var concreteTexDisp = textureLoader.load( "assets/textures/SD/concretewall/Asphalt_002_DISP.jpg" );
concreteTexDisp.wrapS = THREE.RepeatWrapping;
concreteTexDisp.wrapT = THREE.RepeatWrapping;
concreteTexDisp.repeat.set( 4, 1);
var concreteTexMap = textureLoader.load( "assets/textures/SD/concretewall/Concrete_Wall_001_Base_Color.jpg" );
concreteTexMap.wrapS = THREE.RepeatWrapping;
concreteTexMap.wrapT = THREE.RepeatWrapping;
concreteTexMap.repeat.set( 4, 1);

var concreteWall2Mat = new THREE.MeshPhysicalMaterial( {
    normalMap: concreteTexNormal,
    aoMap: concreteTexAO,
    //displacementMap: concreteTexDisp,
    map: concreteTexMap,
    roughnessMap: concreteTexRough,
    //normalScale: new THREE.Vector2( 0.1, 0.1 ),
    side: THREE.BackSide,
    color: 0x313131,
    shading: THREE.FlatShading,
    metalness: 0,
    roughness: 0.8,
    refractionRatio: 0.0
} );

var concreteTexNormal = textureLoader.load( "assets/textures/SD/concrete3/Rough_Painted_Wall_001_NORM.jpg" );
concreteTexNormal.wrapS = THREE.RepeatWrapping;
concreteTexNormal.wrapT = THREE.RepeatWrapping;
concreteTexNormal.repeat.set( 12, 3);
var concreteTexAO = textureLoader.load( "assets/textures/SD/concrete3/Rough_Painted_Wall_001_OCC.jpg" );
concreteTexAO.wrapS = THREE.RepeatWrapping;
concreteTexAO.wrapT = THREE.RepeatWrapping;
concreteTexAO.repeat.set( 12, 3);
var concreteTexRough = textureLoader.load( "assets/textures/SD/concrete3/Rough_Painted_Wall_001_ROUGH.jpg" );
concreteTexRough.wrapS = THREE.RepeatWrapping;
concreteTexRough.wrapT = THREE.RepeatWrapping;
concreteTexRough.repeat.set( 12, 3);
var concreteTexDisp = textureLoader.load( "assets/textures/SD/concrete3/Rough_Painted_Wall_001_DISP.jpg" );
concreteTexDisp.wrapS = THREE.RepeatWrapping;
concreteTexDisp.wrapT = THREE.RepeatWrapping;
concreteTexDisp.repeat.set( 12, 3);
var concreteTexMap = textureLoader.load( "assets/textures/SD/concrete3/Rough_Painted_Wall_001_COLOR.jpg" );
concreteTexMap.wrapS = THREE.RepeatWrapping;
concreteTexMap.wrapT = THREE.RepeatWrapping;
concreteTexMap.repeat.set( 12, 3);

var concreteWallMat = new THREE.MeshPhysicalMaterial( {
    normalMap: concreteTexNormal,
    aoMap: concreteTexAO,
    displacementMap: concreteTexDisp,
    //map: concreteTexMap,
    roughnessMap: concreteTexRough,
    //normalScale: new THREE.Vector2( 0.1, 0.1 ),
    side: THREE.FrontSide,
    color: 0x9f9f9f,
    shading: THREE.FlatShading,
    metalness: 0,
    roughness: 0.8,
    refractionRatio: 0.0
} );

//mainfloor
var geometry = new THREE.PlaneGeometry( 30, 20, 32 );
var floor = new THREE.Mesh( geometry, SubtleSwirlMat );
//floor.position.y =-10;
floor.position.y =0;
floor.rotation.x = -Math.PI / 2;
floor.position.z = -5;
scene.add(floor);

//floorCorr
var geometry = new THREE.PlaneGeometry( 100, 10, 32 );
var floorCorr = new THREE.Mesh( geometry, TerrazzoMat );
//floor.position.y =-10;
floorCorr.position.y =0;
floorCorr.rotation.x = -Math.PI / 2;
floorCorr.position.z = 10;
scene.add(floorCorr);


//baseWall1
var geometry = new THREE.PlaneGeometry( 20, 7, 20 );
var baseWall1 = new THREE.Mesh( geometry, concreteSimplelMat );
baseWall1.position.x =-15;
baseWall1.position.y =3.5;
baseWall1.rotation.y = Math.PI / 2;
baseWall1.position.z =-5;
scene.add(baseWall1);

//baseWall2
var geometry = new THREE.PlaneGeometry( 20, 7, 20 );
var baseWall2 = new THREE.Mesh( geometry, concreteSimplelMat );
baseWall2.position.x =15;
baseWall2.position.y =3.5;
baseWall2.rotation.y = -Math.PI / 2;
baseWall2.position.z =-5;
scene.add(baseWall2);

//baseWall3
var geometry = new THREE.PlaneGeometry( 30, 7, 20 );
var baseWall3 = new THREE.Mesh( geometry, concreteSimplelMat );
baseWall3.position.x =0;
baseWall3.position.y =3.5;
baseWall3.position.z =-15;
//baseWall3.rotation.y = -Math.PI / 2;
scene.add(baseWall3);

//baseWall4
var noiseBigWallMat = new THREE.MeshStandardMaterial( {
    color:0x555555,
    roughnessMap:this.gradientBox(0.3,0.3,0.9),
    roughness:0.9,
    metalnessMap:this.noiseMap(1024,15,200),
    metalness:0.1,
    map:this.gradientBox(0.3,0.3,0.05),
    side: THREE.BackSide,
} );

var geometry = new THREE.PlaneGeometry( 100, 18, 20 );
//var material = new THREE.MeshStandardMaterial( {color: 0x777777,wireframe: false,side: THREE.DoubleSide} );
var baseWall4 = new THREE.Mesh( geometry, concreteWall2Mat );
baseWall4.position.x =0;
baseWall4.position.y =9;
baseWall4.position.z =15;
//baseWall4.rotation.y = -Math.PI / 4;
scene.add(baseWall4);

//ceilling
var geometry = new THREE.PlaneGeometry( 30, 20, 32 );
var ceillingMat = new THREE.MeshStandardMaterial( {
    color:0xa3a3a3,
    roughnessMap:this.gradientBox(0.3,0.6,1),
    roughness:0.9,
    metalnessMap:this.noiseMap(1024,0.2,0.6),
    map:this.gradientBox(0.16,0.3,0.05),
    side: THREE.BackSide,
} );

var ceilling = new THREE.Mesh( geometry, ceillingMat );
ceilling.position.y =9;
ceilling.rotation.x = -Math.PI / 2;
ceilling.position.z =-5;
scene.add(ceilling);

//decowall
var geometry = new THREE.BoxGeometry( 2, 9, 2 );
var decowall1 = new THREE.Mesh( geometry, PilarMat0 );
decowall1.position.x =15;
decowall1.position.y =4.5;
decowall1.position.z =-15;
scene.add( decowall1 );

var decowall2 = new THREE.Mesh( geometry, PilarMat0 );
decowall2.position.x =-15;
decowall2.position.y =4.5;
decowall2.position.z =-15;
scene.add( decowall2 );

var decowall3 = new THREE.Mesh( geometry, PilarMat0 );
decowall3.position.x =0;
decowall3.position.y =4.5;
decowall3.position.z =-15;
scene.add( decowall3 );

var geometry = new THREE.BoxGeometry( 2, 18, 2 );
var outdecowall1 = new THREE.Mesh( geometry, PilarMat );
outdecowall1.position.x =15;
outdecowall1.position.y =9;
outdecowall1.position.z =14;
scene.add( outdecowall1 );

var outdecowall2 = new THREE.Mesh( geometry, PilarMat );
outdecowall2.position.x =-15;
outdecowall2.position.y =9;
outdecowall2.position.z =14;
scene.add( outdecowall2 );

var outdecowall3 = new THREE.Mesh( geometry, PilarMat );
outdecowall3.position.x =0;
outdecowall3.position.y =9;
outdecowall3.position.z =14;
scene.add( outdecowall3 );

var outdecowall4 = new THREE.Mesh( geometry, PilarMat );
outdecowall4.position.x =-30;
outdecowall4.position.y =9;
outdecowall4.position.z =14;
scene.add( outdecowall4 );

var outdecowall5 = new THREE.Mesh( geometry, PilarMat );
outdecowall5.position.x =30;
outdecowall5.position.y =9;
outdecowall5.position.z =14;
scene.add( outdecowall5 );

var outdecowall6 = new THREE.Mesh( geometry, PilarMat );
outdecowall6.position.x =45;
outdecowall6.position.y =9;
outdecowall6.position.z =14;
scene.add( outdecowall6 );

var outdecowall7 = new THREE.Mesh( geometry, PilarMat );
outdecowall7.position.x =-45;
outdecowall7.position.y =9;
outdecowall7.position.z =14;
scene.add( outdecowall7 );

var geometry = new THREE.BoxGeometry( 1, 11, 27 );
var material = new THREE.MeshStandardMaterial( {color: 0x989898,wireframe: false} );
var crossdecow1 = new THREE.Mesh( geometry, PilarMat1 );
crossdecow1.position.x =15;
crossdecow1.position.y =12.5;
crossdecow1.position.z =-0.5;
scene.add( crossdecow1 );

var geometry = new THREE.BoxGeometry( 1, 11, 27 );
var crossdecow2 = new THREE.Mesh( geometry, PilarMat1 );
crossdecow2.position.x =-15;
crossdecow2.position.y =12.5;
crossdecow2.position.z =-0.5;
scene.add( crossdecow2 );

var geometry = new THREE.BoxGeometry( 28, 2, 0.5 );
var crossdecow3 = new THREE.Mesh( geometry, PilarMat2 );
crossdecow3.position.x =0;
crossdecow3.position.y =8;
crossdecow3.position.z =-14.75;
scene.add( crossdecow3 );

// Roof
var geometry = new THREE.PlaneGeometry( 100, 20, 32 );
var material = new THREE.MeshStandardMaterial( {color: 0x555555,side: THREE.DoubleSide} );
var Roof = new THREE.Mesh( geometry, material );
//floor.position.y =-10;
Roof.position.y =18;
Roof.rotation.x = -Math.PI / 2;
Roof.position.z = 5;
scene.add(Roof);

//outWall1
var geometry = new THREE.PlaneGeometry( 20, 18, 20 );
var outWall1 = new THREE.Mesh( geometry, material );
outWall1.position.x =-50;
outWall1.position.y =9;
outWall1.rotation.y = Math.PI / 2;
outWall1.position.z =5;
scene.add(outWall1);

//outWall2 
var geometry = new THREE.PlaneGeometry( 20, 18, 20 );
var outWall2 = new THREE.Mesh( geometry, material );
outWall2.position.x =50;
outWall2.position.y =9;
outWall2.rotation.y = -Math.PI / 2;
outWall2.position.z =5;
scene.add(outWall2);
/*
//miniCyl1 
var geometry = new THREE.CylinderGeometry( 0.25, 0.25, 30, 32 );
var material = new THREE.MeshStandardMaterial( {color: 0x986642, metalness:0.4, roughness:0.4} );
var miniCyl1 = new THREE.Mesh( geometry, material );
miniCyl1.position.x =0;
miniCyl1.position.y =8.5;
miniCyl1.rotation.x = -Math.PI / 2;
miniCyl1.rotation.z = -Math.PI / 2;
miniCyl1.position.z =-12;
scene.add( miniCyl1 );

//miniCyl2 
var geometry = new THREE.CylinderGeometry( 0.25, 0.25, 30, 32 );
var miniCyl2 = new THREE.Mesh( geometry, material );
miniCyl2.position.x =0;
miniCyl2.position.y =8.5;
miniCyl2.rotation.x = -Math.PI / 2;
miniCyl2.rotation.z = -Math.PI / 2;
miniCyl2.position.z =-13;
scene.add( miniCyl2 );

//industriall1
var geometry = new THREE.BoxGeometry( 10, 0.25, 0.25 );
var material = new THREE.MeshStandardMaterial( {color: 0x484848, metalness:0.1, roughness:0.8} );
var industriall1 = new THREE.Mesh( geometry, material );
industriall1.position.x =0;
industriall1.position.y =8.9;
industriall1.position.z =0;
scene.add( industriall1 );

//industriall2
var geometry = new THREE.BoxGeometry( 10, 0.25, 0.25 );
var material = new THREE.MeshStandardMaterial( {color: 0x484848, metalness:0.1, roughness:0.8} );
var industriall2 = new THREE.Mesh( geometry, material );
industriall2.position.x =0;
industriall2.position.y =8.9;
industriall2.position.z =-8;
scene.add( industriall2 );

//DecTrans1
var geometry = new THREE.PlaneGeometry( 12, 6, 5 );
var material = new THREE.MeshStandardMaterial( {color: 0xb40000,side: THREE.FrontSide} );

var DecTrans1Mat = new THREE.TextureLoader().load( 'assets/textures/transparent/s2.png' );
DecTrans1Mat.wrapS = DecTrans1Mat.wrapT = THREE.RepeatWrapping;
DecTrans1Mat.offset.set( 0, 0 );
DecTrans1Mat.repeat.set( 1, 1 );
var DecTrans1Mat = new THREE.MeshPhongMaterial( {
    map: DecTrans1Mat,
    color: 0x000000,
    transparent: true,
    opacity: 0.8,
    side: THREE.FrontSide,
    alphaTest: 0.1,
} );

var DecTrans1 = new THREE.Mesh( geometry, DecTrans1Mat );
DecTrans1.position.x =-7;
DecTrans1.position.y =3;
//DecTrans1.rotation.y = -Math.PI / 2;
DecTrans1.position.z =-14.99;
scene.add(DecTrans1);

//DecTrans2
var geometry = new THREE.PlaneGeometry( 12, 6, 5 );
var material = new THREE.MeshStandardMaterial( {color: 0xb40000,side: THREE.FrontSide} );

var DecTrans2Mat = new THREE.TextureLoader().load( 'assets/textures/transparent/s3.png' );
DecTrans2Mat.wrapS = DecTrans2Mat.wrapT = THREE.RepeatWrapping;
DecTrans2Mat.offset.set( 0, 0 );
DecTrans2Mat.repeat.set( 1, 1 );
var DecTrans2Mat = new THREE.MeshPhongMaterial( {
    map: DecTrans2Mat,
    //color: 0x000000,
    transparent: true,
    opacity: 0.9,
    side: THREE.FrontSide,
    alphaTest: 0.1,
} );

var DecTrans2 = new THREE.Mesh( geometry, DecTrans2Mat );
DecTrans2.position.x =7.5;
DecTrans2.position.y =3;
//DecTrans1.rotation.y = -Math.PI / 2;
DecTrans2.position.z =-14.99;
scene.add(DecTrans2);

*/
//FloorTrans
var geometry = new THREE.PlaneGeometry( 30, 20, 32 );
var material = new THREE.MeshStandardMaterial( {color: 0xb40000,side: THREE.FrontSide} );

var FloorTransMat = new THREE.TextureLoader().load( 'assets/textures/transparent/floor_transparent_logo.png' );
FloorTransMat.wrapS = FloorTransMat.wrapT = THREE.RepeatWrapping;
FloorTransMat.offset.set( 0, 0 );
FloorTransMat.repeat.set( 1, 1 );
var FloorTransMat = new THREE.MeshPhongMaterial( {
    map: FloorTransMat,
    color: 0x000000,
    transparent: true,
    opacity: 0.4,
    side: THREE.FrontSide,
    alphaTest: 0.1,
} );
var FloorTrans = new THREE.Mesh( geometry, FloorTransMat );
FloorTrans.rotation.x = -Math.PI / 2;
FloorTrans.position.y =0.02;
//FloorTransMat.rotation.x = -Math.PI / 2;
FloorTrans.position.z = -5;
scene.add(FloorTrans);
