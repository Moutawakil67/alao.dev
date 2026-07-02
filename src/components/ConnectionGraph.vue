<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const canvasWrap = ref(null)
let renderer, scene, camera, animId, points, lineMesh
let mouse = { x: 0, y: 0 }
const NODE_COUNT = 46

function onResize() {
  if (!renderer || !canvasWrap.value) return
  const { clientWidth: w, clientHeight: h } = canvasWrap.value
  renderer.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
}

function onMouseMove(e) {
  const rect = canvasWrap.value.getBoundingClientRect()
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
}

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const el = canvasWrap.value
  const w = el.clientWidth, h = el.clientHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100)
  camera.position.z = 9

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(w, h)
  el.appendChild(renderer.domElement)

  const nodes = []
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push(new THREE.Vector3(
      (Math.random() - 0.5) * 11,
      (Math.random() - 0.5) * 6.5,
      (Math.random() - 0.5) * 4
    ))
  }

  const dotGeo = new THREE.BufferGeometry().setFromPoints(nodes)
  const dotMat = new THREE.PointsMaterial({ color: 0x5dcaa5, size: 0.06 })
  points = new THREE.Points(dotGeo, dotMat)
  scene.add(points)

  const lineGeo = new THREE.BufferGeometry()
  const lineMat = new THREE.LineBasicMaterial({ color: 0x5dcaa5, transparent: true, opacity: 0.18 })
  lineMesh = new THREE.LineSegments(lineGeo, lineMat)
  scene.add(lineMesh)

  function updateLines() {
    const positions = []
    const maxDist = 3.1
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z)
        }
      }
    }
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  }
  updateLines()

  const clock = new THREE.Clock()
  function animate() {
    animId = requestAnimationFrame(animate)
    const t = clock.getElapsedTime()
    if (!prefersReduced) {
      scene.rotation.y = t * 0.035 + mouse.x * 0.15
      scene.rotation.x = mouse.y * 0.08
    }
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', onResize)
  el.addEventListener('mousemove', onMouseMove)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
  if (renderer) renderer.dispose()
})
</script>

<template>
  <div ref="canvasWrap" class="graph" aria-hidden="true"></div>
</template>

<style scoped>
.graph {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.85;
}
</style>
