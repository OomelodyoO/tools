<template>
    <div id="time">
        <el-row>
            <el-col :span="2">时间戳（秒）</el-col>
            <el-col :span="4">
                <el-input v-model="timestamp" placeholder="时间戳（秒）"></el-input>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="changeTime('timeStampToTime')">时间戳 转 时间</el-button>
                <el-button type="primary" @click="changeTime('timeToTimeStamp')">时间  转 时间戳</el-button>
            </el-col>
            <el-col :span="2">北京时间</el-col>
            <el-col :span="4">
                <el-date-picker
                        v-model="date"
                        :default-value="new Date()"
                        type="datetime"
                        placeholder="北京时间">
                </el-date-picker>
            </el-col>
        </el-row>
    </div>


</template>

<script>
    export default {
        name: "Time",
        data() {
            return {
                timestamp: '',
                date: new Date()
            }
        },
        methods: {
            changeTime(str) {
                switch (str) {
                    case "timeStampToTime":
                        this.date = new Date(this.timestamp * 1000);
                        break;
                    case "timeToTimeStamp":
                        this.timestamp = (this.date.getTime() - this.date.getTime() % 1000) / 1000;
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