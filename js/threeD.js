var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

var renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


//setting viewport
window.addEventListener('resize',function(){
    var width= window.innerWidth;
    var height=window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();

});

//controls
controls =new THREE.OrbitControls(camera, renderer.domElement);
var materials=[
    new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('../img/1.jpeg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('../img/2.jpeg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('../img/3.jpeg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('../img/4.jpeg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('../img/5.jpeg'), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('../img/6.jpeg'), side: THREE.DoubleSide}), 

];

// shape
var geometry =new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshFaceMaterial(materials);
var cube= new THREE.Mesh(geometry,material);
scene.add(cube);

camera.position.z=3;


var update = function(){
    cube.rotation.x+=0.01;
    cube.rotation.y+=0.005;
    cube.rotation.z+=0.01;
};

var render=function(){
    renderer.render(scene,camera);
};


var Gameloop =function(){
    requestAnimationFrame(Gameloop);

    update();
    render();

};

Gameloop();
