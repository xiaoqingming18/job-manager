<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock, View, Hide } from '@element-plus/icons-vue'
import { ElCard, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const handleLogin = () => {
  loading.value = true
  setTimeout(() => {
    router.push('/home')
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="branding">
        <img src="../assets/logo.svg" alt="Logo" class="logo" />
        <h1>建筑劳务中介平台-管理后台</h1>
      </div>

      <el-form @submit.prevent="handleLogin">
        <el-form-item>
          <el-input v-model="email" :prefix-icon="User" placeholder="用户名" size="large" />
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="password"
            :prefix-icon="Lock"
            :type="showPassword ? 'text' : 'password'"
            placeholder="登录密码"
            size="large"
          >
            <template #suffix>
              <component
                :is="showPassword ? Hide : View"
                class="password-toggle"
                @click="showPassword = !showPassword"
              />
            </template>
          </el-input>
        </el-form-item>

        <el-button
          type="primary"
          native-type="submit"
          size="large"
          :loading="loading"
          class="login-btn"
        >
          {{ loading ? '登录中...' : '立即登录' }}
        </el-button>
      </el-form>
      <div class="action-links">
        <router-link to="/company-register">公司首次注册</router-link>
        <router-link to="/forgot-password">忘记密码</router-link>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
}

.login-card {
  width: 100%;
  max-width: 450px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.branding {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

h1 {
  color: #1a73e8;
  font-size: 1.8rem;
  margin: 0;
}

.password-toggle {
  cursor: pointer;
  color: #666;
  transition: color 0.2s;
}

.password-toggle:hover {
  color: #1a73e8;
}

.login-btn {
  width: 100%;
  font-size: 1.1rem;
  letter-spacing: 2px;
  transition: all 0.3s;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(26, 115, 232, 0.3);
}

.action-links {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
</style>
