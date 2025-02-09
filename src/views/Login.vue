<script setup>
import { Lock, User } from "@element-plus/icons-vue";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const isRegister = ref(false);
// 定义数据模型
const registerData = ref({
  email: "",
  password: "",
  rePassword: "",
});
// 校验密码的函数
const checkRePassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== registerData.value.password) {
    callback(new Error("两次输入密码不一致"));
  } else {
    callback();
  }
};

// 定义表单校验规则
const rules = {
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    { type: "email", message: "邮箱格式错误", trigger: "blur" },
    { max: 50, message: "邮箱太长啦~", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 5, max: 50, message: "密码长度应该在5~50位之间", trigger: "blur" },
  ],
  rePassword: [{ validator: checkRePassword, trigger: "blur" }],
};
// 调用后台接口，玩成注册
import { userLoginService, userRegisterService } from "@/api/user.js";
const register = async () => {
  let result = await userRegisterService(registerData.value);
  ElMessage.success (result.message ? result.message : '注册成功');
};

// 绑定数据
const loginData = ref({
  loginInfo: "",
  password: "",
});
// 表单数据校验
const rulesLogin = {
  loginInfo: [
    { required: true, message: "请输入用户名或邮箱", trigger: "blur" },
    { min: 5, max: 50, message: "长度应该在5~50之间哦", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 5, max: 50, message: "密码长度应该在5~50位之间", trigger: "blur" },
  ],
};
// 登录函数
import {useRouter} from 'vue-router';
import { useTokenStore } from "@/stores/token";

const tokenStore = useTokenStore();
const router = useRouter()
const login = async () => {
  let result = await userLoginService(loginData.value);
  tokenStore.setToken(result.data)
  ElMessage.success (result.message ? result.message : '登录成功');
  // 跳转到主页
  router.push('/')
};
// 定义函数清空模型中的数据
const clearData = () => {
  loginData.value = {
    loginInfo: "",
    password: "",
  };
  registerData.value = {
    email: "",
    password: "",
    rePassword: "",
  };
};
</script>
<template>
  <el-row type="flex" justify="center">
    <el-col :span="6">
      <!-- 注册表单 -->
      <el-form
        ref="form"
        size="large"
        autocomplate="off"
        v-if="isRegister"
        :model="registerData"
        :rules="rules"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            :prefix-icon="User"
            placeholder="请输入邮箱"
            v-model="registerData.email"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="registerData.password"
          />
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请再次输入密码"
            v-model="registerData.rePassword"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" auto-insert-space @click="register"
            >注册</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-link type="info" :underline="false" @click="isRegister = false; clearData()"
            >←返回</el-link
          >
        </el-form-item>
      </el-form>
      <!-- 登录表单 -->
      <el-form
        ref="form"
        size="large"
        autocomplete="off"
        v-else
        :model="loginData"
        :rules="rulesLogin"
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="loginInfo">
          <el-input
            :prefix-icon="User"
            placeholder="请输入用户名/邮箱"
            v-model="loginData.loginInfo"
            name="loginInfo"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="loginData.password"
          />
        </el-form-item>
        <el-form-item>
          <div>
            <el-checkbox name="remberMe">记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" auto-insert-space @click="login"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-link type="info" :underline="false" @click="isRegister = true; clearData()"
            >注册→</el-link
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style scoped></style>
