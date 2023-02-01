import * as THREE from 'three'
import gsap from 'gsap'
// the purpose of requestAnimationFrame is to call the function provided on the next frame
// we call the same function on each new frame

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.CylinderGeometry(.9, 1, .5)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// Animations
// time will make it go at the right speed you set it
// let time = Date.now()

// Clock
// const clock = new THREE.Clock()


// GSAP option for animations
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

const tick = () => {
    //  adapt to the Frame Rate with time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime;

    // Clock
    // const elapseTime = clock.getElapsedTime()

    // Update Objects
    // camera.position.y =  Math.sin(elapseTime)
    // camera.position.x = Math.cos(elapseTime )
    // camera.lookAt(mesh.position)

    
        // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick();