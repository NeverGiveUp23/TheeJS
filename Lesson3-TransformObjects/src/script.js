import * as THREE from 'three'
import { Group } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
//  create a group, can move multiple complex objects at once as well as add multiple objects in the group
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
// dont forget to add the group to the scene
scene.add(group)
// creating the cube
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 'red'})
)
// adding the cube1 to the group object
group.add(cube1);
// creating the cube2
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
// assinging cube 2 another position
cube2.position.x = -2
// adding the cube2 to the group object
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
cube3.position.x = 2
group.add(cube3);


const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper)

// console.log(mesh.position.length());

// Mormalize will bring the object back to 1, dont need a console.log
// will take the vector length and reduce it to 1
// mesh.position.normalize();


/**
 * Sizes
*/
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 3
                //  x  y  z
// camera.position.set(.6, .1, 3)


scene.add(camera)

// LookAt
// camera.lookAt(new THREE.Vector3(3,0,0))
// camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)