<script setup lang="ts">
import { ref } from 'vue'

const welcomeMessage = ref('欢迎使用职位管理系统')
</script>

<template>
  <div class="home-container">
    <h1>{{ welcomeMessage }}</h1>
    <nav>
      <router-link to="/login">切换账户</router-link>
    </nav>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  padding: 2rem;
}
</style>
