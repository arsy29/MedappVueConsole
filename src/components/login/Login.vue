<template>
    <div class="login">
        <el-row>
            <el-col :xs="0" :sm="0" :md="4" :lg="7">
                <br/>
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="10">
                <el-card class="box-card">
                    <div slot="header">
                        <h2>Log in to What's App Doc Console</h2>
                    </div>
                    <div>
                        <el-form ref="form" :model="loginForm">
                            <el-row class="logo-holder">
                                <img class="logo" src="../../assets/logo/logo.png" align="middle"/>
                            </el-row>
                            <el-form-item label="Username:">
                                <el-input placeholder="Username" v-model="loginForm.username">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="Password:">
                                <el-input type="password" placeholder="Password" v-model="loginForm.password">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="align-right">
                                <el-button class="submit-button" type="primary" @click="onSubmit">Login</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
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