<script setup>


</script>
<template>
    <el-container>
        <el-aside width="200px">
            <div style="margin:20px;">WD日程表</div>
            <!-- 菜单标签 -->
            <el-menu active-text-color="#ff04b" background-color="#232323" text-color="#ffffff" router>
                <el-menu-item index = "/schedule/summary">
                    <el-icon></el-icon>
                    <span>主页</span>
                </el-menu-item>
                <el-menu-item index = "/schedule/list">
                    <el-icon></el-icon>
                    <span>日程检索</span>
                </el-menu-item>
                <el-menu-item index = "/user/info">
                    <el-icon></el-icon>
                    <span>我的</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <div style="width: 80%;color:white">你好，<strong>111</strong></div>
                <!-- 下拉菜单 -->
                <el-dropdown style="width: 20%;" placement="bottom-end">
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
            <el-main style="padding: 0px;">
                <router-view></router-view>
            </el-main>
            <el-footer>
                <a href="https://beian.miit.gov.cn/" target="_blank">陇ICP备2022002835号-2</a>
            </el-footer>
        </el-container>
    </el-container>
</template>
<style scoped>
.el-container{
    width: 98vw;
    height: 97vh;
}
.el-aside{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color:#232323
}
.el-menu{
    height: 80%;
    width: 100%;
}
.el-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color:#232323;
}
.el-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
}


</style>