<template>
  <div v-if="isShowing" class="modal">
    <button @click="toggleShow">
      Close
    </button>
    <button @click="onDelete">
      Yes
    </button>
  </div>
</template>
<script>
export default {
  props: {
    isShowing: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleShow() {
      return !this.isShowing;
    },
  },
};
</script>
<style scoped>
.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
}
</style>
