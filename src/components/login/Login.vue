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

                    <md-card-content>
                        <form novalidate v-model="loginForm">
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
                        </form>
                    </md-card-content>

                    <md-card-actions>
                        <md-theme md-name="buttons">
                            <md-button class="md-raised md-primary" type="submit" v-on:click="submit">Login</md-button>
                        </md-theme>
                    </md-card-actions>
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
            submit() {
                console.log(this.loginForm);
                this.$router.push({ path: '/dashboard' })
            }
        }
    }
</script>

<style scoped lang="scss" src="./login.scss">
</style>