import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let camera;
let controls;
let scene;
let renderer;

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x990000);
  scene.fog = new THREE.FogExp2(0x990000, 0.003);
  renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.setAttribute('id', 'canvas');
  document.body.appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(400, 200, 0);

  // controls
  controls = new OrbitControls(camera);
  // call this only in static scenes (i.e., if there is no animation loop)
  // controls.addEventListener('change', render);

  // an animation loop is required when either damping or auto-rotation are enabled
  // controls.enableDamping = true;
  // controls.dampingFactor = 0.25;
  // controls.screenSpacePanning = false;
  // controls.minDistance = 100;
  // controls.maxDistance = 500;
  controls.maxPolarAngle = Math.PI / 2;
  // world
  var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
  geometry.translate( 0, 0.5, 0 );
  var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } );
  for ( var i = 0; i < 500; i ++ ) {
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.x = Math.random() * 1600 - 800;
    mesh.position.y = 0;
    mesh.position.z = Math.random() * 1600 - 800;
    mesh.scale.x = 20;
    mesh.scale.y = Math.random() * 80 + 10;
    mesh.scale.z = 20;
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    scene.add( mesh );
  }

  const geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
  const mat = new THREE.MeshBasicMaterial({ color: 0x999999, side: THREE.DoubleSide });
  const plane = new THREE.Mesh(geo, mat);
  plane.rotateX(-Math.PI / 2);


  scene.add(plane);
  // lights
  const directionalLight1 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(1, 1, 1);
  scene.add(directionalLight1);

  const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
  directionalLight.position.set(-1, -1, -1);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0x222222);
  scene.add(ambientLight);
  //
  window.addEventListener('resize', onWindowResize);
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  // only required if controls.enableDamping = true, or if controls.autoRotate = true
  controls.update();
  render();
}

init();
// render(); // remove when using next line for animation loop (requestAnimationFrame)
animate();
