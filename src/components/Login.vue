<template>
<div class="card-container">
  <md-layout md-gutter>
    <md-layout md-flex-xsmall="10" md-flex-small="20" md-flex-medium="25" md-flex-large="35">
    </md-layout>
    <md-layout md-flex-xsmall="80" md-flex-small="60" md-flex-medium="50" md-flex-large="30">
      <md-card>
        <md-card-header>
          <div>
            <div class="md-title">Console</div>
          </div>
        </md-card-header>

        <md-card-media class="logo-holder">
          <img class="logo" src="../assets/logo.png">
        </md-card-media>

        <form novalidate @submit.prevent="onSubmit">
          <md-card-content>
            <md-theme>
              <md-input-container>
                <label>Username</label>
                <md-input :model="loginForm.username"></md-input>
              </md-input-container>
              <md-input-container>
                <label>Password</label>
                <md-input type="password" :model="loginForm.password"></md-input>
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

<style scoped lang="scss">
@import "../styles-variables.scss";

.md-theme-default.md-card {
    width: 100%;
    background-color: $backdrop;
}

.card-container {
    display: table-cell;
    vertical-align: middle;
    width: 100vw;
    height: 100vh;
}

.logo-holder {
    text-align: center;
    margin-bottom: 30px;
}

.logo {
    width: 30%;
    max-width: 180px;
    height: auto;
}
</style>

<script>
export default {
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
      this.$router.push({
        path: '/dashboard'
      })
    }
  }
}
</script>
