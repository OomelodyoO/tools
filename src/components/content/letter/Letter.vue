<template>
    <div id="letter">
        <el-row>
            <el-button type="primary" @click="changeCase('upper')">转大写</el-button>
            <el-button type="primary" @click="changeCase('lower')">转小写</el-button>
            <el-button type="primary" @click="changeNaming('camelBakToUnderLine')">驼峰 转 下划线</el-button>
            <el-button type="primary" @click="changeNaming('underLineToCamelBak')">下划线 转 驼峰</el-button>
        </el-row>
        <el-row>
            <el-col :span="1">输入：</el-col>
            <el-col :span="11">
                <el-input v-model="input" placeholder="输入" type="textarea"
                          :autosize="{ minRows: 10, maxRows: 10}"></el-input>
            </el-col>
            <el-col :span="1">输出：</el-col>
            <el-col :span="11">
                <el-input v-model="output" placeholder="输出" type="textarea"
                          :autosize="{ minRows: 10, maxRows: 10}"></el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Letter",
        data() {
            return {
                input: '',
                output: ''
            }
        },
        methods: {
            changeCase(str) {
                switch (str) {
                    case "upper":
                        this.output = this.input.toUpperCase();
                        break;
                    case "lower":
                        this.output = this.input.toLowerCase();
                        break;
                }
            },
            changeNaming(str) {
                switch (str) {
                    case "camelBakToUnderLine":
                        this.output = this.input.replace(/[A-Z]/g, function (match) {
                            return "_" + match.toLowerCase();
                        });
                        break;
                    case "underLineToCamelBak":
                        this.output = this.input.replace(/_(\w)/g, function (all, letter) {
                            return letter.toUpperCase();
                        });
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .el-row {
        line-height: 40px;
        margin-bottom: 20px;
    }
</style>