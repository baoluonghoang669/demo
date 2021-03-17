<template>
  <div class="container rounded bg-none">
    <form @submit.prevent="onAddUser()">
      <div class="col-md-8">
        <architect-button
          typeClass="fix-back-btn"
          link
          :path="'/dashboard/users'"
        >
          <i class="fas fa-undo-alt"></i
        ></architect-button>
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-center">Form Add User</h4>
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
                placeholder="Enter your email"
                v-model="email"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Phone Number</label
              ><input
                type="number"
                name="phone"
                class="form-control"
                placeholder="Enter phone number"
                v-model="phone"
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
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Role</label
              ><input
                type="text"
                name="role"
                class="form-control"
                placeholder="Role"
                v-model="role"
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
              />
            </div>
            <div class="col-md-6">
              <label class="labels">State/Region/City</label
              ><input
                type="text"
                name="city"
                class="form-control"
                v-model="city"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Password:</label>
              <input
                type="password"
                class="form-control"
                name="password"
                v-model="password"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary fixed-button" type="submit">
              Add User
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
      name: "",
      email: "",
      address: "",
      birthday: "",
      phone: "",
      city: "",
      country: "",
      role: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async onAddUser() {
      const data = {
        name: this.name,
        email: this.email,
        address: this.address,
        birthday: this.birthday,
        phone: this.phone,
        city: this.city,
        country: this.country,
        role: this.role,
        password: this.password,
      };
      try {
        await this.$store.dispatch("userAdmin/addUser", data);

        this.$router.replace("/dashboard/users");
      } catch (err) {
        this.error = err || "Fail to Add";
      }
    },
  },
};
</script>
<style scoped>
label {
  font-weight: 500;
}

.rounded form {
  display: flex;
  justify-content: center;
}

.text-center {
  width: 100%;
  font-size: 40px;
  font-weight: bolder;
}

.fixed-button {
  background-color: #263a4f;
  border: none;
}

.fixed-button:hover {
  background-color: #a3cc01 !important;
  transition: 0.3s all ease;
}
</style>
