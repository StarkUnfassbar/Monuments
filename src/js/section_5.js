import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#section-5").appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff); // Небольшое освещение
scene.add(light);

const loader = new GLTFLoader();
let model;

loader.load( 
	'src/models/2.glb', 
	function ( gltf ) {
		model = gltf.scene;
		model.scale.set(0.5, 0.5, 0.5);
		model.position.set(0, 0, 0);
		scene.add( model );

		camera.position.set(1, 1, 1);
		camera.lookAt(model.position);

		animate();
	},
	(xhr) => {
		console.log((xhr.loaded / xhr.total * 100) + "% loaded");
	},
	(error) => {
		console.error("Error: " + error);
	}
);

// Variables for camera control
let zoomSpeed = 0.1;
let moveSpeed = 10; // Speed for moving camera

// Keyboard events for moving the camera
window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'a': // Move left
			camera.position.x -= moveSpeed;
			console.log(1)
			break;
		case 'd': // Move right
			camera.position.x += moveSpeed;
			console.log(2)
			break;
		case 's': // Move down (closer to the ground)
			camera.position.y -= moveSpeed;
			break;
		case 'w': // Move up (higher)
			camera.position.y += moveSpeed;
			break;
		case 'q': // Zoom in
			camera.position.z -= moveSpeed;
			break;
		case 'e': // Zoom out
			camera.position.z += moveSpeed;
			break;
	}

	// Ensure the camera always looks at the model
	camera.lookAt(model.position);
	animate();
});

const animate = function () {
	requestAnimationFrame(animate);
	// model.rotation.x += 0.01;
	// model.rotation.y += 0.01;
	renderer.render(scene, camera);
};
