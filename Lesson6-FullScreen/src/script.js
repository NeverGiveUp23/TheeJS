import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
// window listener when resizing the page
window.addEventListener('resize', () => {

    // Update sizes

    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // update Camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update Renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', () => {
    // console.log('double click')

// to go fullscreen mode use requestFullscreen() on the concerned element(our <canvas></canvas>)
// since safari is behind, we need to include it

// create a variable            //  Chrome           or              safari
const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
//if not fullscreen
    if(!fullscreenElement){
            // checkinbg if chrom version
        if(canvas.requestFullscreen){
            // go full screen for chrome version
            canvas.requestFullscreen();
        }   // go full screen if Safari version
        else if (canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen();
        }
    }
    else {   // exit full screen if chrome
        if(document.exitFullscreen){
            document.exitFullscreen();
        }  // exit full screen if safari
        else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }
    }

})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
// controls.enabled = false
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// update pixel ratio 
// assiging the pixel ratio to a minimum of 2
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()