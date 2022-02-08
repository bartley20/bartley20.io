import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.
  PerspectiveCamera(
    75,
    innerWidth/innerHeight,
    .01, 
    1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(innerWidth, innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera)

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;

  controls.update();

  renderer.render(scene,camera);
}

animate();