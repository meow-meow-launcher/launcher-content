<script setup>
import { ref, onMounted, useAttrs } from 'vue'

const attrs = useAttrs()
const title = attrs.title || 'Окно'

const initialWidth = ref(400)
const initialHeight = ref(400)
const windowRef = ref(null)

onMounted(() => {
  // безопасно использовать window только после монтирования
  initialWidth.value = window.innerWidth / 3

  const el = windowRef.value
  if (!el) return

  let isDragging = false
  let offsetX = 0
  let offsetY = 0

  const onMouseDown = (e) => {
    if (!e.target.closest('.title-bar')) return
    isDragging = true
    offsetX = e.clientX - el.offsetLeft
    offsetY = e.clientY - el.offsetTop
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    el.style.left = `${e.clientX - offsetX}px`
    el.style.top = `${e.clientY - offsetY}px`
  }

  const onMouseUp = () => {
    isDragging = false
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  el.addEventListener('mousedown', onMouseDown)
})
</script>


<template>
  <div
    ref="windowRef"
    class="window"
    :style="{
      width: initialWidth + 'px',
      height: initialHeight + 'px',
      position: 'absolute',
      top: '100px',
      left: '100px'
    }"
  >
    <div class="title-bar">
      <div class="title-bar-text">{{ title }}</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    <div class="window-body">
      <div class="window-body-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.window {
  background: silver;
  box-shadow: inset -2px -2px #fff, inset 2px 2px #000;
  border: 2px solid #000;
  resize: both;
  overflow: auto;
  position: absolute;
  top: 100px;
  left: 100px;
  min-width: 300px;
  min-height: 200px;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.window-body {
  flex: 1;
  overflow: auto;
  background: #c0c0c0;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  font-family: 'MS Sans Serif', sans-serif;
  padding: 10px;
  box-sizing: border-box;
}



.title-bar {
  background: linear-gradient(to right, navy, #3a6ea5);
  color: white;
  font-weight: bold;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: move;
  box-shadow: inset -1px -1px #000, inset 1px 1px #808080;
}

.title-bar-text {
  font-size: 14px;
  padding-left: 4px;
}

.title-bar-controls {
  display: flex;
}

.title-bar-controls button {
  width: 16px;
  height: 16px;
  margin-left: 2px;
  background: #c0c0c0;
  border: 1px solid #000;
  box-shadow: inset -1px -1px #fff, inset 1px 1px #808080;
  padding: 0;
}

.window-body {
  flex: 1;
  overflow: auto;
  background: #c0c0c0;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  font-family: 'MS Sans Serif', sans-serif;
  display: flex;
  flex-direction: column;
}

.window-body-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
