<script setup>
</script>
<template>
    <el-container>
        <el-aside width="200px">
            <div></div>
            <!-- 菜单标签 -->
            <el-menu active-text-color="#ff04b" background-color="#232323" text-color="#ffffff">
                <el-menu-item>
                    <el-icon></el-icon>
                    <span></span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <div>你好，<strong>111</strong></div>
                <!-- 下拉菜单 -->
                <el-dropdown placement="bottom-end">
                    <span>
                        <el-avatar />
                        <el-icon>

                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>基本资料</el-dropdown-item>
                            <el-dropdown-item>重置密码</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-main></el-main>
            <el-footer>
                <a href="https://beian.miit.gov.cn/" target="_blank">陇ICP备2022002835号-2</a>
            </el-footer>
        </el-container>
    </el-container>
</template>
<style scoped>
</style>