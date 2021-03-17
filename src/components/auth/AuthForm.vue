<template>
  <div>
    <!-- first dialog -->
    <architect-dialog :show="loading" title="Authenticating...">
      <architect-loading></architect-loading>
    </architect-dialog>

    <!-- second dialog -->
    <architect-dialog
      :show="!!error"
      title="An error occurred"
      @close="clearError"
      fixed
    >
      <p>{{ error }}</p>
    </architect-dialog>

    <form @submit.prevent="checkClick == 1 ? onLogin() : onRegister()">
      <h1 v-if="checkClick == 1">Login Form</h1>
      <h1 v-else>Register Form</h1>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>
      <p class="inValid" v-if="formIsInvalid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p>
      <div class="button-group">
        <div v-if="checkClick">
          <button type="submit" id="btn-login" v-if="checkClick == 1">
            Login
          </button>
          <button type="submit" id="btn-login" v-else>
            Sign Up
          </button>
          <button
            type="button"
            @click.prevent="onChangeClick(2)"
            id="btn-signup"
            v-if="checkClick == 1"
          >
            Sign Up Instead
          </button>
          <button
            type="button"
            @click.prevent="onChangeClick(1)"
            id="btn-signup"
            v-else
          >
            Login Instead
          </button>
        </div>
        <router-link class="forgot" to="/forgotpassword"
          >Forgot password ?</router-link
        >
      </div>
    </form>
  </div>
</template>
<script>
import ArchitectDialog from "../common/ArchitectDialog.vue";
export default {
  components: { ArchitectDialog },
  data() {
    return {
      email: "",
      password: "",
      checkClick: 1,
      formIsInvalid: false,
      error: null,
      loading: false,
    };
  },
  computed: {},
  methods: {
    onChangeClick(number) {
      this.checkClick = number;
    },
    async onLogin() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsInvalid = true;
        return;
      }

      this.loading = true;

      try {
        await this.$store.dispatch("auth/onLogin", {
          email: this.email,
          password: this.password,
        });

        const redirectTo = "/" + (this.$route.query.redirect || "");

        this.$router.replace(redirectTo);
      } catch (err) {
        this.error = err.response.data.error || "Fail to authenticate.";
      }
      this.loading = false;
    },
    async onRegister() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsInvalid = true;
        return;
      }
      this.loading = true;
      try {
        await this.$store.dispatch("auth/onRegister", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/");
      } catch (err) {
        this.error = err.response.data.error || "Fail to authenticate.";
      }
      this.loading = false;
    },

    clearError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
h1 {
  color: #263a4f;
  font-weight: bolder;
  text-align: center;
}
form {
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 4rem;
}

form .input-group {
  margin: 10px 0;
}

form .input-group label {
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
  color: #263a4f;
}

form .input-group input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid rgb(204, 204, 204);
  padding: 5px;
}

.button-group #btn-login {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #263a4f;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  outline: none;
}

.button-group #btn-signup {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: transparent;
  border: none;
  color: #263a4f;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  outline: none;
}

.button-group #btn-login:hover {
  background-color: #637b05;
}
.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group #btn-signup:hover {
  color: #637b05;
}

.forgot {
  color: #637b05;
  padding: 5px 0;
}

.inValid {
  width: 392px;
  color: red;
}
</style>
