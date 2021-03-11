<template>
  <div class="form-auth">
    <form>
      <h1>Forgot Password</h1>
      <p>If you have forgotten your password, you can reset it here.</p>
      <div class="input-group">
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="E-mail address"
        />
      </div>
      <p v-if="formIsInvalid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p>
      <div class="button-group">
        <button type="submit" id="btn-login">
          Reset my password
        </button>
      </div>
      <div class="back">
        <router-link to="/auth">Back to Login Page</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      formIsInvalid: false,
    };
  },
};
</script>
<style scoped>
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
  text-align: right;
  width: 100%;
}
.back a {
  color: #637b05;
}

.back a:hover {
  border-bottom: 2px solid #637b05;
}
</style>
