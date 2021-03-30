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

    <!-- third dialog -->
    <architect-dialog
      :show="!!notify"
      title="Notification"
      @close="clearNotify"
      fixed
    >
      <p>{{ notify }}</p>
    </architect-dialog>
    <div class="flex">
      <!--form update profile -->
      <div class="col-md-4">
        <form id="uploadForm" enctype=multipart/form-data class="d-flex flex-column align-items-center text-center p-3 py-5" @submit.prevent="onUpload()">
          <div class="fix-avatar" v-if="user">
            <img class="rounded-circle mt-5" :src="avatar" />
          </div>
          <input type="file" ref="file" id="file" @change="onFileChange" name="file">
          <input type=submit button class="change-avatar" value="Upload avatar">
        </form>
      </div>
      <form @submit.prevent="onSave()" class="col-md-8" v-if="user">
        <div>
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">{{$t("update-profile")}}</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Username</label
                ><input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Enter your name"
                  v-model="name"
                  required
                />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Email</label
                ><input
                  type="text"
                  name="email"
                  class="form-control"
                  v-model="email"
                  disabled
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Phone Number</label
                ><input
                  type="number"
                  name="number"
                  class="form-control"
                  placeholder="Enter phone number"
                  v-model="phone"
                  required
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Address</label
                ><input
                  type="text"
                  name="address"
                  class="form-control"
                  placeholder="enter address"
                  v-model="address"
                  required
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Birthday</label
                ><input
                  type="text"
                  name="birthday"
                  class="form-control"
                  placeholder="Birthday"
                  v-model="birthday"
                  required
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Role</label
                ><input
                  name="role"
                  type="text"
                  class="form-control"
                  placeholder="Role"
                  v-model="role"
                  disabled
                  required
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Country</label
                ><input
                  type="text"
                  name="country"
                  class="form-control"
                  placeholder="country"
                  v-model="country"
                  required
                />
              </div>
              <div class="col-md-6">
                <label class="labels">State/Region/City</label
                ><input
                  type="text"
                  name="city"
                  class="form-control"
                  v-model="city"
                  required
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary fixed-button" type="submit">
                {{$t("save")}}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      error: null,
      loading: false,
      formIsInvalid: false,
      notify: null,
      fileUpload: null,
    };
  },
  created() {
    this.fetchDetailUser();
  },
  computed: {
    avatar: {
      get() {
        return this.$store.state.auth.user.avatar;
      },
      set(value) {
        this.$store.commit("auth/updateAvatar", value);
      },
    },
    name: {
      get() {
        return this.$store.state.auth.user.name;
      },
      set(value) {
        this.$store.commit("auth/updateName", value);
      },
    },
    email: {
      get() {
        return this.$store.state.auth.user.email;
      },
    },
    phone: {
      get() {
        return this.$store.state.auth.user.phone;
      },
      set(value) {
        this.$store.commit("auth/updatePhone", value);
      },
    },
    address: {
      get() {
        return this.$store.state.auth.user.address;
      },
      set(value) {
        this.$store.commit("auth/updateAddress", value);
      },
    },
    birthday: {
      get() {
        return this.$store.state.auth.user.birthday;
      },
      set(value) {
        this.$store.commit("auth/updateBirthday", value);
      },
    },
    role: {
      get() {
        return this.$store.state.auth.user.role;
      },
    },
    city: {
      get() {
        return this.$store.state.auth.user.city;
      },
      set(value) {
        this.$store.commit("auth/updateCity", value);
      },
    },
    country: {
      get() {
        return this.$store.state.auth.user.country;
      },
      set(value) {
        this.$store.commit("auth/updateCountry", value);
      },
    },
    file: {
      get() {
        return this.$store.state.auth.user.avatar;
      },
      set(value) {
        this.$store.commit("auth/updateAvatar", value);
      },
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    user() {
      return this.$store.getters["auth/user"];
    },
  },
  methods: {
    // Fetch detail user when logged in
    async fetchDetailUser() {
      try {
        await this.$store.dispatch("auth/fetchDetailUser");
      } catch (err) {
        this.error = err;
      }
    },
    //Save user informations
    async onSave() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        birthday: this.birthday,
        city: this.city,
        country: this.country,
      };
      try {
        await this.$store
          .dispatch("auth/updateDetailUser", data)
          .then(() => (this.notify = this.$t("update-success")));
      } catch (err) {
        this.error = err || this.$t("fail");
      }
      this.loading = false;
    },

    clearError() {
      this.error = null;
    },

    clearNotify() {
      this.notify = null;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.fileUpload = file
      var reader = new FileReader();
      reader.onload = (e) => {
        this.file = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async onUpload() {
      this.loading = true;
      try {
        await this.$store.dispatch("auth/updateAvatar", this.fileUpload);
      } catch (err) {
        this.error = err.response.data.error || "Fail to update"
      }
      this.loading = false;
    }
  },
};
</script>
<style scoped>
#file {
  margin: 10px 0;
  margin-left: 40%;
  cursor: pointer;
}

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.fix-avatar {
  vertical-align: middle;
  border-radius: 50%;
}

.fix-avatar img {
  width: 100%;
}

.fixed-button {
  background-color: #263a4f;
  border: none;
}

.fixed-button:hover {
  background-color: #a3cc01 !important;
  transition: 0.3s all ease;
}

.change-avatar {
  border: 1px solid #000;
  background: transparent;
  margin-top: 10px;
  border-radius: 5%;
  transition: 0.3s all ease;
  padding: 5px;
}

.change-avatar:hover {
  background-color: #263a4f !important;
  color: #fff;
}
</style>
