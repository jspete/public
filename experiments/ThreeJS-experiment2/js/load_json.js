/*
ALL json objects loaded here.


*/

var loader = new THREE.ObjectLoader();

loader.load(
	// resource URL
	"assets/room_light.json",
    //"assets/model.json",
	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
        
        
        //var floorGeo = obj.geometry[ 1 ];
        //var floorMat = obj.material[ 1 ];
        //var floor = new THREE.Mesh( obj.ge, floorMat);
        //var floor = new THREE.Mesh(obj.children[1]);
        //console.log(floor.name);
		scene.add( obj );
         
	},
    
    
    function (object) {
            console.log(object);
            //console.log(materials);
    },

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);


// Alternatively, to parse a previously loaded JSON structure
//var floor = loader.parse( scene );
//scene.add( spacehome );