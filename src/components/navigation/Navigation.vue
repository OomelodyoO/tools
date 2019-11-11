<template>
    <div id="navigation">
        <el-menu class="el-menu-vertical-demo" default-active="1" :router="true">
            <el-menu-item index="1" route="/encryption">
                <i class="el-icon-menu"></i>
                <span slot="title">加密</span>
            </el-menu-item>

            <el-menu-item index="2" route="/transcoding">
                <i class="el-icon-menu"></i>
                <span slot="title">转码</span>
            </el-menu-item>

            <el-menu-item index="3" route="/time">
                <i class="el-icon-menu"></i>
                <span slot="title">时间</span>
            </el-menu-item>

            <el-menu-item index="4" route="/letter">
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