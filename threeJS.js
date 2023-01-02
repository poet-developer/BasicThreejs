let scene, camera,renderer,cube,sphere, labelRendererc;
// let c = canvas.getContext('2d');
// console.log('ffdfd'); // be connetced.

function init(){  
    const canvas = document.querySelector('#c');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000 );    

renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: false});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000, 0);
// renderer.setClearColorHex( 0xffffff, 0 );
document.body.appendChild(renderer.domElement );

window.addEventListener('resize', onWindowResize, false);

const cubeGeometry = new THREE.BoxGeometry(1,1,1); //defalt
const sphereGeometry = new THREE.SphereGeometry( 0.7, 50, 50, 0, Math.PI * 2, 0, Math.PI );
const texture = new THREE.TextureLoader().load('textures/POP1.png');
const texture1 = new THREE.TextureLoader().load('textures/world.gif');
const material = new THREE.MeshBasicMaterial({map: texture});
const material1 = new THREE.MeshBasicMaterial({ map : texture1});

// let mtlLoader = new THREE.MTLLoader();
// mtlLoader.load('models/lotus.mtl',function(materials){
//     materials.preload();

//     let objLoader = new THREE.OBJLoader(); 
//     objLoader.setMaterials(materials);
//     objLoader.load('models/lotus.obj',function(object){
//         object.position.set(0,-1.5,0);
//         object.rotation.x +=0.02;
//         scene.add(object);
//     });
// });


// const controls = new THREE.OrbitControls (camera, renderer.domElement);
cube = new THREE.Mesh(cubeGeometry,material);
sphere = new THREE.Mesh(sphereGeometry,material1);

camera.position.z = 6;
controls = new THREE.OrbitControls (camera, renderer.domElement);
console.log(controls);

cube.position.set(-1,0,0);
sphere.position.set(1,0,0);
scene.add(cube);
scene.add(sphere);



// function called on successful load



// camera.position.y = 1;


}

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x +=0.02;
    cube.rotation.y +=0.01;
    sphere.rotation.x += 0.01;
    sphere.rotation.y +=0.02;

    // cube.rotation.z +=0.01;
    // controls.update();
   render();
   
}
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight; //도중에 바꾸는게 가능하도록 let변수 선언
    camera.updateProjectionMatrix(); //카메라 위치 변경 후 호출해야함.
    renderer.setSize( window.innerWidth, window.innerHeight );
    // labelRenderer.setSize( window.innerWidth, window.innerHeight );
    // onWindowResize.stopPropagation();
}

function render(){
    renderer.render(scene,camera);
    // labelRenderer.render( scene, camera );
}
//addEventlistener: i8이하 버전에서는 호환 안됨. resize는 내가 정하는 값이 아니라 click과 같음. 모범: addEventListener(‘발생이벤트’, function(){}, 이벤트의 발생 순서);

init();
animate();
// c.fillStyle ='rgba(255,0,0,0.5';
// c.fillRect(100,100,100,100);

// let camera, scene, renderer;
// let cube, cube_geometry, cube_material;
// // let controls;

// init();
// render();

// function init() {

//     scene = new THREE.Scene();

//     // renderer

//     renderer = new THREE.WebGLRenderer({
//         alpha: true
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // camera

//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 12;

//     // controls

//     // controls = new THREE.OrbitControls(camera, renderer.domElement);
//     // controls.addEventListener('change', render);
//     // controls.enableZoom = false;

//     // mesh - cube

//     cube_geometry = new THREE.CubeGeometry(5, 5, 5);

//     for (var i = 0; i < cube_geometry.faces.length; i += 2) {

//         var color = Math.random() * 0xffffff;

//         cube_geometry.faces[i].color.setHex(color);
//         cube_geometry.faces[i + 1].color.setHex(color);
//     }

//     cube_material = new THREE.MeshLambertMaterial({
//         color: 0xffffff,
//         vertexColors: THREE.FaceColors
//     });

//     cube = new THREE.Mesh(cube_geometry, cube_material);
//     scene.add(cube);

//     // Lights

//     var light = new THREE.DirectionalLight(0xffffff);
//     light.position.set(1, 1, 1);
//     scene.add(light);

//     var light = new THREE.DirectionalLight(0x002288);
//     light.position.set(-1, -1, -1);
//     scene.add(light);

//     var light = new THREE.AmbientLight(0x222222);
//     scene.add(light);

//     // events

//     window.addEventListener('resize', onWindowResize, false);

// }

// function render() {

//     renderer.render(scene, camera);

// }

// function onWindowResize(event) {

//     renderer.setSize(window.innerWidth, window.innerHeight);

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

// }

