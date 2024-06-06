const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('card3D').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const textureFront = loader.load('brettfront.png');
const textureBack = loader.load('brettback.png');

// Create a cylinder geometry to mimic a coin (3D circle)
const geometry = new THREE.CylinderGeometry(1, 1, 0.1, 64);
const materialFront = new THREE.MeshBasicMaterial({ map: textureFront });
const materialBack = new THREE.MeshBasicMaterial({ map: textureBack });
const materialSide = new THREE.MeshBasicMaterial({ color: 0x333333 });

const materials = [
    materialSide, // Side
    materialSide, // Side
    materialFront, // Front
    materialBack // Back
];

const coin = new THREE.Mesh(geometry, materials);
scene.add(coin);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    coin.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();

