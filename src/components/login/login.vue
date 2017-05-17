<template>
    <div class="card-container">
        <md-layout md-gutter>
            <md-layout md-flex-xsmall="10" md-flex-small="20" md-flex-medium="25" md-flex-large="35">
            </md-layout>
            <md-layout md-flex-xsmall="80" md-flex-small="60" md-flex-medium="50" md-flex-large="30">
                <md-card>
                    <md-card-header>
                        <div class="md-title">Console</div>
                    </md-card-header>
                    <form novalidate v-on:submit.prevent="onSubmit">
                        <md-card-content>
                            <md-theme>
                                <md-input-container>
                                    <label>Username</label>
                                    <md-input v-model="loginForm.username"></md-input>
                                </md-input-container>
                                <md-input-container>
                                    <label>Password</label>
                                    <md-input type="password" v-model="loginForm.password"></md-input>
                                </md-input-container>
                            </md-theme>
                        </md-card-content>
                        <md-card-actions>
                            <md-theme md-name="buttons">
                                <md-button class="md-raised md-primary" type="submit">Login</md-button>
                            </md-theme>
                        </md-card-actions>
                    </form>
                </md-card>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                }
            };
        },
        methods: {
            onSubmit(event) {
                console.log(this.loginForm);
                this.$router.push({ path: '/dashboard' })
            }
        }
    }
</script>

<style scoped lang="scss" src="./login.scss">
</style>