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

    <form @submit.prevent="checkClick == 1 ? onLogin() : onRegister()">
      <h1 v-if="checkClick == 1">{{ $t("signin-form") }}</h1>
      <h1 v-else>{{ $t("signup-form") }}</h1>
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
        {{ $t("valid-form") }}
      </p>
      <div class="button-group">
        <div v-if="checkClick" class="fix-btn-group">
          <button type="submit" id="btn-login" v-if="checkClick == 1">
            {{ $t("login") }}
          </button>
          <button type="submit" id="btn-login" v-else>
            {{ $t("register") }}
          </button>
          <button
            type="button"
            @click.prevent="onChangeClick(2)"
            id="btn-signup"
            v-if="checkClick == 1"
          >
            {{ $t("re-register") }}
          </button>
          <button
            type="button"
            @click.prevent="onChangeClick(1)"
            id="btn-signup"
            v-else
          >
            {{ $t("re-login") }}
          </button>
        </div>
        <architect-button
          class="fix-btn-group-two"
          link
          typeClass="btn-link-hover"
          :path="'/auth/forgotpassword'"
          >{{ $t("forgotpassword") }} ?</architect-button
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
        console.log(err);
        this.error = this.$t("fail-authenticate");
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
        this.error = err.response.data.error || this.$t("fail");
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
@media (max-width: 992px) {
  .form-auth {
    margin-top: 30%;
  }
}
@media (max-width: 576px) {
  .fix-btn-group {
    flex-basis: 60%;
  }
  .fix-btn-group-two {
    flex-basis: 40%;
  }
}
</style>
