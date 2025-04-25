<template>
    <div class="desktop-icons">
      <div class="icon" v-for="icon in icons" :key="icon.label">
        <NuxtLink :to="icon.to">
          <img :src="icon.icon" :alt="icon.label" />
          <span>{{ icon.label }}</span>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  const icons = [
    { label: 'Правила', to: '/rules', icon: '/icons/book.png' },
    { label: 'Сервер', to: '/server', icon: '/icons/folder.png' },
    { label: 'Мой компьютер', to: '/', icon: '/icons/computer.png' },
    { label: 'Лаунчер', to: '/launcher', icon: '/icons/disket.png'}
  ]
  </script>
  
  <style scoped>
  .desktop-icons {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  
  .icon {
  width: 64px;
  text-align: center;
  cursor: pointer;
  }

  .icon a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  
  .icon img {
    width: 32px;
    height: 32px;
  }
  
  .icon span {
    font-size: 12px;
    color: white;
    text-shadow: 1px 1px #000;
  }
  </style>
  