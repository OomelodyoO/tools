<template>
    <div id="encryption">
        <el-row>
            <el-col :span="24">
                <h3>明文</h3>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">明文：</el-col>
            <el-col :span="10">
                <el-input v-model="plaintext" placeholder="请输入明文" @input="changeCipherText"></el-input>
            </el-col>
            <el-col :span="2">盐值：</el-col>
            <el-col :span="10">
                <el-input v-model="salt" placeholder="请输入盐值" @input="changeCipherText"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <h3>密文</h3>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">md5：</el-col>
            <el-col :span="10">
                <el-input v-model="md5CipherText" :readonly="true"></el-input>
            </el-col>
            <el-col :span="2">sha1：</el-col>
            <el-col :span="10">
                <el-input v-model="sha1CipherText" :readonly="true"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">sha256：</el-col>
            <el-col :span="10">
                <el-input v-model="sha256CipherText" :readonly="true"></el-input>
            </el-col>
            <el-col :span="2">sha512：</el-col>
            <el-col :span="10">
                <el-input v-model="sha512CipherText" :readonly="true"></el-input>
            </el-col>
        </el-row>

        <el-row>
            <el-button type="primary" @click="changeCase('upper')">转大写</el-button>
            <el-button type="primary" @click="changeCase('lower')">转小写</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'encryption',
        props: {},
        data() {
            return {
                plaintext: '',
                salt: '',
                md5CipherText: this.$crypto.MD5(this.plaintext + this.salt).toString(),
                sha1CipherText:  this.$crypto.SHA1(this.plaintext + this.salt).toString(),
                sha256CipherText:  this.$crypto.SHA256(this.plaintext + this.salt).toString(),
                sha512CipherText:  this.$crypto.SHA512(this.plaintext + this.salt).toString()
            }
        },
        methods: {
            changeCipherText() {
                this.md5CipherText = this.$crypto.MD5(this.plaintext + this.salt).toString();
                this.sha1CipherText = this.$crypto.SHA1(this.plaintext + this.salt).toString();
                this.sha256CipherText = this.$crypto.SHA256(this.plaintext + this.salt).toString();
                this.sha512CipherText = this.$crypto.SHA512(this.plaintext + this.salt).toString();
            },
            changeCase(str) {
                switch (str) {
                    case "upper":
                        this.md5CipherText = this.md5CipherText.toUpperCase();
                        this.sha1CipherText = this.sha1CipherText.toUpperCase();
                        this.sha256CipherText = this.sha256CipherText.toUpperCase();
                        this.sha512CipherText = this.sha512CipherText.toUpperCase();
                        break
                    case "lower":
                        this.md5CipherText = this.md5CipherText.toLowerCase()
                        this.sha1CipherText = this.sha1CipherText.toLowerCase();
                        this.sha256CipherText = this.sha256CipherText.toLowerCase();
                        this.sha512CipherText = this.sha512CipherText.toLowerCase();
                        break
                }
            },
        }
    };
</script>
<style scoped>
    .el-row {
        line-height: 40px;
        margin-bottom: 20px;
    }
</style>