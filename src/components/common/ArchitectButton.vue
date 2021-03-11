<template>
  <div>
    <button
      v-if="!link"
      :type="type"
      :value="value"
      class="btn comment_btn form-control fix_btn"
    >
      <slot></slot>
    </button>

    <router-link v-else :to="{ path: path, query: { redirect: query } }" :class="typeClass">
      <slot></slot>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: null,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
    typeClass: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    path: {
      type: String,
      required: false,
      default: "/",
    },
    query: {
      type: String,
      required: false,
    },
  },
};
</script>
<style scoped>
.fix_btn {
  width: 170px;
  height: 50px;
  background: #263a4f;
  color: #fff;
  border-radius: 0px;
  border: none;
  box-shadow: none !important;
  outline: none !important;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  transition: all 400ms linear 0s;
  letter-spacing: 0.35px;
  text-transform: uppercase;
}
</style>
