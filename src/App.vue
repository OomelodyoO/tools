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
                    <Menu/>
                </el-aside>
                <el-main>
                    <Encryption/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Menu from './components/navigation/Navigation.vue'
    import Encryption from './components/content/encryption/Encryption.vue'

    export default {
        name: 'app',
        components: {
            Menu,
            Encryption
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
