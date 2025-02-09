<script setup>
</script>
<template>
<el-card class="page-container">
    <template #header>
        <div class="header">
            <span>日程检索</span>
            <div class="extra">
                <el-button type="primary">添加日程</el-button>
            </div>
        </div>
    </template>
    <!-- 搜索表单 -->
     <el-form inline>
        <el-form-item label="状态">
            <el-select placeholder="请选择">
                <el-option label="未开始" value="未开始"></el-option>
                <el-option label="进行中" value="进行中"></el-option>
                <el-option label="已完成" value="已完成"></el-option>
                <el-option label="已失效" value="已失效"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">搜索</el-button>
            <el-button>重置</el-button>
        </el-form-item>
     </el-form>
    <!-- 文章列表 -->
     <el-table :data="schedules" style="width: 100%;">
        <el-table-column label="标题" width="400" prop="title"></el-table-column>
        <el-table-column label="描述"  prop="description"></el-table-column>
        <el-table-column label="开始时间"  prop="startTime"></el-table-column>
        <el-table-column label="结束时间"  prop="endTime"></el-table-column>
        <el-table-column label="状态"  prop="status"></el-table-column>
        <el-table-column label="操作" width="100">
            <template #default="{row}">
                <el-button :icon="Edit" cricle plain type="primary"></el-button>
                <el-button :icon="Edit" cricle plain type="primary"></el-button>
                <el-button :icon="Delete" cricle plain type="danger"></el-button>
            </template>
            <template #empty>
                <el-empty despription="没有数据"></el-empty>
            </template>
        </el-table-column>
     </el-table>
    <!-- 分页条 -->
     <el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" :page-sizes="[3,5,10,15]"
     layout="jumper, total, sizes, prev, pager, next" background :total="total" @size-change="onSizeChange"
     @current-change="onCurrentChange" style="margin-top: 20px;justify-content: flex-end;"/>
</el-card>
</template>
<style lang="scss" scoped>
.page-container{
    min-height: 100%;
    box-sizing: border-box;
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>