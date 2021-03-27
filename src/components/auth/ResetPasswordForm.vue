<template>
  <div class="form-auth">
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
    <form @submit.prevent="onResetPassword">
      <h1>Reset Password</h1>
      <div class="input-group">
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="New password"
        />
      </div>
      <p class="warning" v-if="formIsInvalid">
        Password must be at least 6 characters.
      </p>
      <div class="button-group">
        <button type="submit" id="btn-login">
          Update my password
        </button>
      </div>
      <div class="back">
        <architect-button link typeClass="btn-link-hover" :name="'Auth'"
          >Back to Login Page</architect-button
        >
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formIsInvalid: false,
      password: "",
      error: null,
      loading: false,
    };
  },
  methods: {
    async onResetPassword() {
      if (this.password === "" || this.password.length < 6) {
        this.formIsInvalid = true;
        return;
      }
      this.loading = true;
      try {
        await this.$store.dispatch("auth/onResetPassword", {
          password: this.password,
        });
        this.$router.replace({ name: "Auth" });
      } catch (err) {
        this.error = err.response.data.error || "Fail To update password ! ";
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
.form-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11%;
  margin-bottom: 2%;
}
h1 {
  color: #263a4f;
  font-weight: bolder;
  text-align: center;
}

p {
  text-align: center;
  color: #263a4f;
  font-weight: 400;
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

form .input-group input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid rgb(204, 204, 204);
  padding: 5px 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin: 10px auto;
}

.button-group #btn-login:hover {
  background-color: #637b05;
  transition: all 400ms ease;
}

.back {
  text-align: center;
  width: 100%;
}
.back a {
  color: #637b05;
}

.warning {
  color: red;
}
</style>
