<template>
  <div class="desktop">
    <!-- Иконки -->
    <DesktopIcons />

    <!-- Активное окно -->
    <div class="window-area">
      <NuxtPage />
    </div>

    <!-- Панель задач -->
    <Taskbar />
  </div>
</template>

<script setup>
import DesktopIcons from '~/components/DesktopIcons.vue'
import Taskbar from '~/components/Taskbar.vue'
</script>

<style>

body {
  cursor: url('./public/cursors/Windows-98-arrow.cur'), default;
}

.desktop {
  background: #008080;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'MS Sans Serif', sans-serif;
}

.window-area {
  flex: 1;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
