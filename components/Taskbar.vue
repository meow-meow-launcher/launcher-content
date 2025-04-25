<template>
  <div class="taskbar">
    <!-- Start button -->
    <button class="start-button">
      <img src="/icons/win95-icon.png" alt="Start" class="start-icon" />
      Start
    </button>

    <!--
    <button class="start-button" @click="toggleStart">
      <img src="/icons/win95-icon.png" alt="Start" class="start-icon" />
      Start
    </button>
    -->

    <!-- Start Menu 
    <StartMenu :visible="startOpen" />
    -->
  </div>
</template>

  <!--<script setup>
  import { ref } from 'vue'
  import StartMenu from '~/components/disStartMenu.dis'

  const startOpen = ref(false)
  const toggleStart = () => {
    startOpen.value = !startOpen.value
  }
  </script>
  -->
  <style scoped>
  .taskbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #C0C0C0;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #000;
    padding: 2px;
    display: flex;
    align-items: center;
    box-shadow: inset -1px -1px #fff, inset 1px 1px #808080;
    font-family: 'MS Sans Serif', sans-serif;
  }
  
  .start-button {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'MS Sans Serif', sans-serif;
  padding: 2px 8px;
  background: #e0e0e0;
  border: 2px outset #fff;
  cursor: pointer;
  }

  .start-button:hover {
    background-color: #d0d0d0;
    border: 2px inset #fff;
  }

  .start-icon {
    width: 16px;
    height: 16px;
  }
  .taskbar-items {
    margin-left: 10px;
    color: black;
  }
  </style>