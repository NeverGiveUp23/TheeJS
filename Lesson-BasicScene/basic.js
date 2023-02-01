
const scene = new THREE.Scene();

// Red Cube

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 'blue' });
// add both geo and material to the mesh
const mesh = new THREE.Mesh(geometry, material);

// add mesh to the scene
scene.add(mesh);

// camera & Sizes
const sizes = {
  width: 800,
  height: 600
}

const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height);
camera.position.z = 3
camera.position.x = 1

//  adding camera to the scene
scene.add(camera);


// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
// setting the size of the render
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)