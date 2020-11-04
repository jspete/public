//structure details
var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var LPilar1 = new THREE.Mesh( geometry, SimpleGreyMat );
LPilar1.position.x =-50;
LPilar1.position.y =20;
LPilar1.position.z =50;
LPilar1.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var LPilar2 = new THREE.Mesh( geometry, SimpleGreyMat );
LPilar2.position.x =-50;
LPilar2.position.y =20;
LPilar2.position.z =30;
LPilar2.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var LPilar3 = new THREE.Mesh( geometry, SimpleGreyMat );
LPilar3.position.x =-50;
LPilar3.position.y =20;
LPilar3.position.z =10;
LPilar3.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var LPilar4 = new THREE.Mesh( geometry, SimpleGreyMat );
LPilar4.position.x =-50;
LPilar4.position.y =20;
LPilar4.position.z =-10;
LPilar4.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var LPilar5 = new THREE.Mesh( geometry, SimpleGreyMat );
LPilar5.position.x =-50;
LPilar5.position.y =20;
LPilar5.position.z =-30;
LPilar5.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var LPilar6 = new THREE.Mesh( geometry, SimpleGreyMat );
LPilar6.position.x =-50;
LPilar6.position.y =20;
LPilar6.position.z =-50;
LPilar6.rotation.z = 0;

//Left Pilars
var LPilar = new THREE.Group();
LPilar.add(LPilar6);
LPilar.add(LPilar5);
LPilar.add(LPilar4);
LPilar.add(LPilar3);
LPilar.add(LPilar2);
LPilar.add(LPilar1);
scene.add(LPilar);

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var RPilar1 = new THREE.Mesh( geometry, SimpleGreyMat );
RPilar1.position.x =50;
RPilar1.position.y =20;
RPilar1.position.z =50;
RPilar1.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var RPilar2 = new THREE.Mesh( geometry, SimpleGreyMat );
RPilar2.position.x =50;
RPilar2.position.y =20;
RPilar2.position.z =30;
RPilar2.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var RPilar3 = new THREE.Mesh( geometry, SimpleGreyMat );
RPilar3.position.x =50;
RPilar3.position.y =20;
RPilar3.position.z =10;
RPilar3.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var RPilar4 = new THREE.Mesh( geometry, SimpleGreyMat );
RPilar4.position.x =50;
RPilar4.position.y =20;
RPilar4.position.z =-10;
RPilar4.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var RPilar5 = new THREE.Mesh( geometry, SimpleGreyMat );
RPilar5.position.x =50;
RPilar5.position.y =20;
RPilar5.position.z =-30;
RPilar5.rotation.z = 0;

var geometry = new THREE.BoxGeometry( 2, 40, 2 );
var RPilar6 = new THREE.Mesh( geometry, SimpleGreyMat );
RPilar6.position.x =50;
RPilar6.position.y =20;
RPilar6.position.z =-50;
RPilar6.rotation.z = 0;

// Right pilars
var RPilar = new THREE.Group();
RPilar.add(RPilar6);
RPilar.add(RPilar5);
RPilar.add(RPilar4);
RPilar.add(RPilar3);
RPilar.add(RPilar2);
RPilar.add(RPilar1);
scene.add(RPilar);

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Llateral1 = new THREE.Mesh( geometry, SimpleGreyMat );
Llateral1.position.x =-50;
Llateral1.position.y =5;
Llateral1.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Llateral2 = new THREE.Mesh( geometry, SimpleGreyMat );
Llateral2.position.x =-50;
Llateral2.position.y =10;
Llateral2.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Llateral3 = new THREE.Mesh( geometry, SimpleGreyMat );
Llateral3.position.x =-50;
Llateral3.position.y =15;
Llateral3.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Llateral4 = new THREE.Mesh( geometry, SimpleGreyMat );
Llateral4.position.x =-50;
Llateral4.position.y =20;
Llateral4.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Llateral5 = new THREE.Mesh( geometry, SimpleGreyMat );
Llateral5.position.x =-50;
Llateral5.position.y =25;
Llateral5.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Llateral6 = new THREE.Mesh( geometry, SimpleGreyMat );
Llateral6.position.x =-50;
Llateral6.position.y =30;
Llateral6.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Llateral7 = new THREE.Mesh( geometry, SimpleGreyMat );
Llateral7.position.x =-50;
Llateral7.position.y =35;
Llateral7.position.z =0;

// Left laterals
var Llaterals = new THREE.Group();
Llaterals.add(Llateral1);
Llaterals.add(Llateral2);
Llaterals.add(Llateral3);
Llaterals.add(Llateral4);
Llaterals.add(Llateral5);
Llaterals.add(Llateral6);
Llaterals.add(Llateral7);
scene.add(Llaterals);

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Rlateral1 = new THREE.Mesh( geometry, SimpleGreyMat );
Rlateral1.position.x =50;
Rlateral1.position.y =5;
Rlateral1.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Rlateral2 = new THREE.Mesh( geometry, SimpleGreyMat );
Rlateral2.position.x =50;
Rlateral2.position.y =10;
Rlateral2.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Rlateral3 = new THREE.Mesh( geometry, SimpleGreyMat );
Rlateral3.position.x =50;
Rlateral3.position.y =15;
Rlateral3.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Rlateral4 = new THREE.Mesh( geometry, SimpleGreyMat );
Rlateral4.position.x =50;
Rlateral4.position.y =20;
Rlateral4.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Rlateral5 = new THREE.Mesh( geometry, SimpleGreyMat );
Rlateral5.position.x =50;
Rlateral5.position.y =25;
Rlateral5.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Rlateral6 = new THREE.Mesh( geometry, SimpleGreyMat );
Rlateral6.position.x =50;
Rlateral6.position.y =30;
Rlateral6.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Rlateral7 = new THREE.Mesh( geometry, SimpleGreyMat );
Rlateral7.position.x =50;
Rlateral7.position.y =35;
Rlateral7.position.z =0;

// Right laterals
var Rlaterals = new THREE.Group();
Rlaterals.add(Rlateral1);
Rlaterals.add(Rlateral2);
Rlaterals.add(Rlateral3);
Rlaterals.add(Rlateral4);
Rlaterals.add(Rlateral5);
Rlaterals.add(Rlateral6);
Rlaterals.add(Rlateral7);
scene.add(Rlaterals);

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Clateral1 = new THREE.Mesh( geometry, SimpleGreyMat );
Clateral1.position.x =45;
Clateral1.position.y =40;
Clateral1.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Clateral2 = new THREE.Mesh( geometry, SimpleGreyMat );
Clateral2.position.x =35;
Clateral2.position.y =44;
Clateral2.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Clateral3 = new THREE.Mesh( geometry, SimpleGreyMat );
Clateral3.position.x =25;
Clateral3.position.y =47;
Clateral3.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Clateral4 = new THREE.Mesh( geometry, SimpleGreyMat );
Clateral4.position.x =15;
Clateral4.position.y =50;
Clateral4.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var Clateral5 = new THREE.Mesh( geometry, SimpleGreyMat );
Clateral5.position.x =5;
Clateral5.position.y =53;
Clateral5.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var CRlateral1 = new THREE.Mesh( geometry, SimpleGreyMat );
CRlateral1.position.x =-45;
CRlateral1.position.y =40;
CRlateral1.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var CRlateral2 = new THREE.Mesh( geometry, SimpleGreyMat );
CRlateral2.position.x =-35;
CRlateral2.position.y =44;
CRlateral2.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var CRlateral3 = new THREE.Mesh( geometry, SimpleGreyMat );
CRlateral3.position.x =-25;
CRlateral3.position.y =47;
CRlateral3.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var CRlateral4 = new THREE.Mesh( geometry, SimpleGreyMat );
CRlateral4.position.x =-15;
CRlateral4.position.y =50;
CRlateral4.position.z =0;

var geometry = new THREE.BoxGeometry( 0.3, 0.3, 100 );
var CRlateral5 = new THREE.Mesh( geometry, SimpleGreyMat );
CRlateral5.position.x =-5;
CRlateral5.position.y =53;
CRlateral5.position.z =0;

// Ceilling laterals
var Claterals = new THREE.Group();
Claterals.add(CRlateral5);
Claterals.add(CRlateral4);
Claterals.add(CRlateral3);
Claterals.add(CRlateral2);
Claterals.add(CRlateral1);
Claterals.add(Clateral5);
Claterals.add(Clateral4);
Claterals.add(Clateral3);
Claterals.add(Clateral2);
Claterals.add(Clateral1);
scene.add(Claterals);

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var LCPilar1 = new THREE.Mesh( geometry, SimpleGreyMat );
LCPilar1.position.x =-25;
LCPilar1.position.y =47;
LCPilar1.position.z =50;
LCPilar1.rotation.z = -1.25;

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var LCPilar2 = new THREE.Mesh( geometry, SimpleGreyMat );
LCPilar2.position.x =-25;
LCPilar2.position.y =47;
LCPilar2.position.z =30;
LCPilar2.rotation.z = -1.25;

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var LCPilar3 = new THREE.Mesh( geometry, SimpleGreyMat );
LCPilar3.position.x =-25;
LCPilar3.position.y =47;
LCPilar3.position.z =10;
LCPilar3.rotation.z = -1.25;

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var LCPilar4 = new THREE.Mesh( geometry, SimpleGreyMat );
LCPilar4.position.x =-25;
LCPilar4.position.y =47;
LCPilar4.position.z =-10;
LCPilar4.rotation.z = -1.25;

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var LCPilar5 = new THREE.Mesh( geometry, SimpleGreyMat );
LCPilar5.position.x =-25;
LCPilar5.position.y =47;
LCPilar5.position.z =-30;
LCPilar5.rotation.z = -1.25;

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var LCPilar6 = new THREE.Mesh( geometry, SimpleGreyMat );
LCPilar6.position.x =-25;
LCPilar6.position.y =47;
LCPilar6.position.z =-50;
LCPilar6.rotation.z = -1.25;

// Left Ceilling Pilars
var LCPilar = new THREE.Group();
LCPilar.add(LCPilar1);
LCPilar.add(LCPilar2);
LCPilar.add(LCPilar3);
LCPilar.add(LCPilar4);
LCPilar.add(LCPilar5);
LCPilar.add(LCPilar6);
scene.add(LCPilar);

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var RCPilar1 = new THREE.Mesh( geometry, SimpleGreyMat );
RCPilar1.position.x =25;
RCPilar1.position.y =47;
RCPilar1.position.z =50;
RCPilar1.rotation.z =1.25;
scene.add(RCPilar1);

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var RCPilar2 = new THREE.Mesh( geometry, SimpleGreyMat );
RCPilar2.position.x =25;
RCPilar2.position.y =47;
RCPilar2.position.z =30;
RCPilar2.rotation.z =1.25;
scene.add(RCPilar2);

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var RCPilar3 = new THREE.Mesh( geometry, SimpleGreyMat );
RCPilar3.position.x =25;
RCPilar3.position.y =47;
RCPilar3.position.z =10;
RCPilar3.rotation.z =1.25;
scene.add(RCPilar3);

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var RCPilar4 = new THREE.Mesh( geometry, SimpleGreyMat );
RCPilar4.position.x =25;
RCPilar4.position.y =47;
RCPilar4.position.z =-10;
RCPilar4.rotation.z =1.25;
scene.add(RCPilar4);

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var RCPilar5 = new THREE.Mesh( geometry, SimpleGreyMat );
RCPilar5.position.x =25;
RCPilar5.position.y =47;
RCPilar5.position.z =-30;
RCPilar5.rotation.z =1.25;
scene.add(RCPilar5);

var geometry = new THREE.BoxGeometry( 2, 53, 2 );
var RCPilar6 = new THREE.Mesh( geometry, SimpleGreyMat );
RCPilar6.position.x =25;
RCPilar6.position.y =47;
RCPilar6.position.z =-50;
RCPilar6.rotation.z =1.25;
scene.add(RCPilar6);

// Left Ceilling Pilars
var RCPilar = new THREE.Group();
RCPilar.add(RCPilar1);
RCPilar.add(RCPilar2);
RCPilar.add(RCPilar3);
RCPilar.add(RCPilar4);
RCPilar.add(RCPilar5);
RCPilar.add(RCPilar6);
scene.add(RCPilar);

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var LCSPilar1 = new THREE.Mesh( geometry, SimpleLightGreyMat );
LCSPilar1.position.x =-42.5;
LCSPilar1.position.y =40;
LCSPilar1.position.z =50;
LCSPilar1.rotation.z = -1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var LCSPilar2 = new THREE.Mesh( geometry, SimpleLightGreyMat );
LCSPilar2.position.x =-42.5;
LCSPilar2.position.y =40;
LCSPilar2.position.z =30;
LCSPilar2.rotation.z = -1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var LCSPilar3 = new THREE.Mesh( geometry, SimpleLightGreyMat );
LCSPilar3.position.x =-42.5;
LCSPilar3.position.y =40;
LCSPilar3.position.z =10;
LCSPilar3.rotation.z = -1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var LCSPilar4 = new THREE.Mesh( geometry, SimpleLightGreyMat );
LCSPilar4.position.x =-42.5;
LCSPilar4.position.y =40;
LCSPilar4.position.z =-10;
LCSPilar4.rotation.z = -1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var LCSPilar5 = new THREE.Mesh( geometry, SimpleLightGreyMat );
LCSPilar5.position.x =-42.5;
LCSPilar5.position.y =40;
LCSPilar5.position.z =-30;
LCSPilar5.rotation.z = -1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var LCSPilar6 = new THREE.Mesh( geometry, SimpleLightGreyMat );
LCSPilar6.position.x =-42.5;
LCSPilar6.position.y =40;
LCSPilar6.position.z =-50;
LCSPilar6.rotation.z = -1.00;

// LCSP
var LCSPilar = new THREE.Group();
LCSPilar.add(LCSPilar1);
LCSPilar.add(LCSPilar2);
LCSPilar.add(LCSPilar3);
LCSPilar.add(LCSPilar4);
LCSPilar.add(LCSPilar5);
LCSPilar.add(LCSPilar6);
scene.add(LCSPilar);

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var RCSPilar1 = new THREE.Mesh( geometry, SimpleLightGreyMat );
RCSPilar1.position.x =42.5;
RCSPilar1.position.y =40;
RCSPilar1.position.z =50;
RCSPilar1.rotation.z = 1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var RCSPilar2 = new THREE.Mesh( geometry, SimpleLightGreyMat );
RCSPilar2.position.x =42.5;
RCSPilar2.position.y =40;
RCSPilar2.position.z =30;
RCSPilar2.rotation.z = 1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var RCSPilar3 = new THREE.Mesh( geometry, SimpleLightGreyMat );
RCSPilar3.position.x =42.5;
RCSPilar3.position.y =40;
RCSPilar3.position.z =10;
RCSPilar3.rotation.z = 1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var RCSPilar4 = new THREE.Mesh( geometry, SimpleLightGreyMat );
RCSPilar4.position.x =42.5;
RCSPilar4.position.y =40;
RCSPilar4.position.z =-10;
RCSPilar4.rotation.z = 1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var RCSPilar5 = new THREE.Mesh( geometry, SimpleLightGreyMat );
RCSPilar5.position.x =42.5;
RCSPilar5.position.y =40;
RCSPilar5.position.z =-30;
RCSPilar5.rotation.z = 1.00;

var geometry = new THREE.BoxGeometry( 5, 20, 1 );
var RCSPilar6 = new THREE.Mesh( geometry, SimpleLightGreyMat );
RCSPilar6.position.x =42.5;
RCSPilar6.position.y =40;
RCSPilar6.position.z =-50;
RCSPilar6.rotation.z = 1.00;

// RCSP
var RCSPilar = new THREE.Group();
RCSPilar.add(RCSPilar1);
RCSPilar.add(RCSPilar2);
RCSPilar.add(RCSPilar3);
RCSPilar.add(RCSPilar4);
RCSPilar.add(RCSPilar5);
RCSPilar.add(RCSPilar6);
scene.add(RCSPilar);

// Left cylinder
//radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float
var geometry = new THREE.CylinderGeometry( 0.8, 0.8, 102, 10);
var LeftCylinder = new THREE.Mesh( geometry, SimpleRedMat );
LeftCylinder.position.x =44;
LeftCylinder.position.y =30;
LeftCylinder.position.z =0;
LeftCylinder.rotation.x = Math.PI / 2;;
scene.add( LeftCylinder );

//LightSupport
var geometry = new THREE.BoxGeometry( 1.4, 0.4, 100 );
var RLightSupport = new THREE.Mesh( geometry, SimpleGreyMat );
RLightSupport.position.x =-17;
RLightSupport.position.y =48;
RLightSupport.position.z =0;
scene.add(RLightSupport);

//ALight1
