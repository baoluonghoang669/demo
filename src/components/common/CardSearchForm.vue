<template>
  <el-card class="form-box-card form-search">
    <el-collapse class="form-search-collapse">
      <el-collapse-item class="form-search-collapse-item">
        <template #title>
          <i class="header-icon el-icon-search"></i>&nbsp; Tìm Kiếm
        </template>
        <slot></slot>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
export default {
  name: "CardSearchForm",
  props: {},
};
</script>
<style scoped>
.form-search ::v-deep(.el-collapse-item__wrap) {
  border-color: transparent;
}

.form-search ::v-deep(.el-collapse) {
  border-color: transparent;
}

.form-search ::v-deep(.el-card__body) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.form-search ::v-deep(.el-form-item) {
  text-align: left;
}

.form-search ::v-deep(.el-form-item) {
  margin-right: 20px;
}

.form-search ::v-deep(.el-collapse-item__header) {
  border: none;
}

.form-box-card {
  margin-bottom: 20px;
  margin-top: 20px;
}

.el-icon-search {
  padding-left: 10px;
}
</style>
