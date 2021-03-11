<template>
  <div class="container rounded bg-white">
    <form @submit.prevent="onSave()" class="row" v-if="user">
      <div class="col-md-4">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <div class="fix-avatar">
            <img class="rounded-circle mt-5" src="./../assets/avatar.jpg" />
          </div>
          <span class="font-weight-bold">{{ user.name }}</span
          ><span class="text-black-50">{{ user.email }}</span
          ><span> </span>
        </div>
      </div>
      <div class="col-md-8">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Username</label
              ><input
                type="text"
                class="form-control"
                placeholder="Enter your name"
                v-model="username"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Phone Number</label
              ><input
                type="number"
                class="form-control"
                placeholder="Enter phone number"
                v-model="phone"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter address"
                v-model="address"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Birthday</label
              ><input
                type="text"
                class="form-control"
                placeholder="Birthday"
                v-model="birthday"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Role</label
              ><input
                type="text"
                class="form-control"
                placeholder="Role"
                v-model="role"
                disabled
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="labels">Country</label
              ><input
                type="text"
                class="form-control"
                placeholder="country"
                v-model="country"
              />
            </div>
            <div class="col-md-6">
              <label class="labels">State/Region/City</label
              ><input type="text" class="form-control" v-model="city" />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary profile-button" type="submit">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: this.user,
      phone: "",
      address: "",
      birthday: "",
      role: "",
      city: "",
      country: "",
    };
  },
  created() {
    this.fetchDetailUser();
  },
  watch: {
    user() {
      return this.$store.getters["auth/user"].name;
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
  },
  methods: {
    // Fetch detail user when logged in
    async fetchDetailUser() {
      try {
        await this.$store.dispatch("auth/fetchDetailUser");
      } catch (error) {
        console.log(error);
      }
    },
    //Save user informations
    onSave() {
      const data = {
        username: this.username,
        phone: this.phone,
        address: this.address,
        birthday: this.birthday,
        city: this.city,
        country: this.country,
      };
      this.$store.dispatch("auth/saveDetailUser", data);
      console.log(data);
    },
  },
};
</script>
<style scoped>
.rounded {
  margin-top: 200px;
}
.fix-avatar {
  vertical-align: middle;
  border-radius: 50%;
}

.fix-avatar img {
  width: 100%;
}

.profile-button {
  background-color: #263a4f;
  border: none;
}

.profile-button:hover {
  background-color: #a3cc01;
  transition: 0.3s all ease;
}
</style>
