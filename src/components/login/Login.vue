<template>
    <el-dialog title="Log in to What's App Doc Console" :visible.sync="displayLoginPopUp" size="tiny" top="15%" :close-on-click-modal="false"
        :close-on-press-escape="false" :show-close="false">
        <div>
            <el-form ref="form" :model="loginForm">
                <el-row class="logo-holder">
                    <img class="logo" src="../../assets/logo/logo.png" align="middle"/>
                </el-row>
                <el-form-item>
                    <el-input placeholder="Username" v-model="loginForm.username">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" placeholder="Password" v-model="loginForm.password">
                    </el-input>
                </el-form-item>
                <el-form-item class="align-right">
                    <el-button class="submit-button" type="primary" @click="onSubmit">Login</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                loginForm: {
                    username: '',
                    Password: '',
                },
                displayLoginPopUp: true
            };
        },
        methods: {
            onSubmit() {
                console.log(this.loginForm);
                this.displayLoginPopUp = false;
            }
        }
    }
</script>

<style scoped lang="scss" src="./login.scss">
</style>