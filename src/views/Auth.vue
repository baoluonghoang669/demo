<template>
  <div class="form-auth">
    <form @submit.prevent="authForm()">
      <h1>Login Form / Register form</h1>
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
      <p v-if="formIsInvalid">
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
      </div>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  name: "CoachLoginForm",
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
    authForm() {
      console.log("hihi");
    },
  },
};
</script>
<style scoped>
h1 {
  color: #263a4f;
  font-weight: bolder;
}
.form-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11%;
  margin-bottom: 2%;
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
  background-color: #637b05;
  border: 1px solid #637b05;
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
  color: #637b05;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  outline: none;
}

.button-group #btn-signup:hover {
  background-color: #a3cc01;
}
</style>
