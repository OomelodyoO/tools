<template>
    <div id="app">
        <el-container>
            <el-header>
                <h1>
                    工具
                </h1>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <Navigation/>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Navigation from '@/components/navigation/Navigation'

    export default {
        name: 'app',
        components: {
            Navigation
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
