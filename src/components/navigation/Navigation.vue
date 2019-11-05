<template>
    <div id="navigation">
        <el-menu class="el-menu-vertical-demo" default-active="1">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">加密</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">时间</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">字母</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
        props: {},
    };
</script>
<style scoped>
</style>