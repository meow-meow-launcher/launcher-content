<template>
    <div class="desktop">
      <div class="desktop-icons">
        <Icon label="Мой компьютер" img="/icons/computer.png" to="/" />
        <Icon label="Правила" img="/icons/docs.png" to="/rules" />
        <Icon label="Сервер" img="/icons/network.png" to="/server" />
      </div>
  
      <slot />
  
      <Taskbar />
    </div>
  </template>
  
  <script setup>
  import Taskbar from '@/components/Taskbar.vue'
  import Icon from '@/components/DesktopIcons.vue'
  </script>
  
  <style scoped>
  .desktop {
    background-color: #008080;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    font-family: 'MS Sans Serif', sans-serif;
    cursor: url('/cursors/win95.cur'), auto;
  }
  
  .desktop-icons {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1;
  }
  </style>