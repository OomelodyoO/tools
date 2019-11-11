<template>
    <div id="transcoding">
        <el-row>
            <el-button type="primary" @click="changeTranscoding('characterToBase64')">Character 转 Base64</el-button>
            <el-button type="primary" @click="changeTranscoding('base64ToCharacter')">Base64 转 Character</el-button>
            <el-button type="primary" @click="changeTranscoding('unicodeToCharacter')">Unicode 转 Character</el-button>
            <el-button type="primary" @click="changeTranscoding('characterToUnicode')">Character 转 Unicode</el-button>
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
        name: "Transcoding",
        data() {
            return {
                input: '',
                output: ''
            }
        },
        methods: {
            changeTranscoding(str) {
                switch (str) {
                    case "characterToBase64":
                        this.output = this.$crypto.enc.Base64.stringify(this.$crypto.enc.Utf8.parse(this.input));
                        break;
                    case "base64ToCharacter":
                        this.output = this.$crypto.enc.Base64.parse(this.input).toString(this.$crypto.enc.Utf8);
                        break;
                    case "unicodeToCharacter":
                        this.output = unescape(this.input.replace(/&#x/g, '%u').replace(/\\u/g, '%u').replace(/;/g, ''));
                        break;
                    case "characterToUnicode":
                        // eslint-disable-next-line no-control-regex
                        this.output = this.input.replace(/[^\u0000-\u00FF]/g, function($0) {
                            return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;")
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