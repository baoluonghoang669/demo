<template>
  <el-row>
    <el-form
      ref="form"
      :model="form"
      class="search-form"
      label-position="top"
      size="small"
      :rules="rules"
    >
      <el-row>
        <template v-for="(inputData, index) in inputs">
          <template v-if="inputData.inputType === 'input'">
            <el-col :span="span" :key="index">
              <el-form-item :label="inputData.label" :prop="inputData.name">
                <el-input
                  :placeholder="inputData.placeholder"
                  :trim="inputData.trim"
                  v-bind="{ ...inputData.attributes }"
                  :disabled="inputData.disabled"
                  v-model="form[inputData.name]"
                ></el-input>
              </el-form-item>
            </el-col>
          </template>
          <template v-else-if="inputData.inputType === 'select'">
            <el-col :span="span" :key="index">
              <el-form-item :label="inputData.label" :prop="inputData.name">
                <el-select
                  :placeholder="inputData.placeholder"
                  v-bind="{ ...inputData.attributes }"
                  v-model="form[inputData.name]"
                  @change="inputData.optionOnChanged"
                  :disabled="inputData.disabled"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in inputData.optionList"
                    :label="option[inputData.optionLabelField]"
                    :key="option[inputData.optionValueField]"
                    :value="option[inputData.optionValueField]"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </template>
          <template
            v-else-if="['date', 'datetime'].includes(inputData.inputType)"
          >
            <el-col :span="span" :key="index">
              <el-form-item :label="inputData.label" :prop="inputData.name">
                <el-date-picker
                  v-bind="{ ...inputData.attributes }"
                  v-model="form[inputData.name]"
                  :type="inputData.inputType"
                  :placeholder="inputData.placeholder"
                  :disabled-date="inputData?.disabledDate"
                  :shortcuts="inputData?.shortcuts"
                  :format="inputData?.format"
                  :default-time="inputData?.defaultTime"
                  @change="inputData.eventOnChange"
                  @blur="inputData.eventOnBlur"
                  @focus="inputData.eventOnFocus"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </template>
          <template
            v-else-if="
              ['daterange', 'datetimerange', 'monthrange'].includes(
                inputData.inputType
              )
            "
          >
            <el-col :span="span + 5" :key="index">
              <el-form-item :label="inputData.label" :prop="inputData.name">
                <el-date-picker
                  v-bind="{ ...inputData.attributes }"
                  v-model="form[inputData.name]"
                  :type="inputData.inputType"
                  :align="inputData.align"
                  :placeholder="inputData.placeholder"
                  :rangeSeparator="inputData.rangeSeparator"
                  :start-placeholder="inputData.startPlaceholder"
                  :end-placeholder="inputData.endPlaceholder"
                  :disabled-date="inputData.disabledDate"
                  :shortcuts="inputData.shortcuts"
                  :format="inputData.format"
                  :default-time="inputData.defaultTime"
                  @change="inputData.eventOnChange"
                  @blur="inputData.eventOnBlur"
                  @focus="inputData.eventOnFocus"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </template>
          <template v-else-if="inputData.inputType === 'break'">
            <div style="width: 100%" :key="index"></div>
          </template>
        </template>
      </el-row>
      <div style="text-align: right">
        <el-form-item class="float-right" style="margin-right: 0">
          <el-button @click="handleClear(form, $refs['form'])" size="mini">{{
            clearText
          }}</el-button>
          <el-button
            type="primary"
            @click="handleSearch(form, $refs['form'])"
            size="mini"
          >
            {{ searchText }}</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </el-row>
</template>
<script>
export default {
  name: "SearchForm",
  components: {},
  props: {
    inputs: { type: Array, required: true },
    handleSearch: { type: Function, required: false },
    handleClear: { type: Function, required: false },
    clearText: { type: String, default: "Xóa" },
    searchText: { type: String, default: "Tìm kiếm" },
    rules: { type: Object },
  },
  data() {
    return {
      span: 5,
      form: {},
    };
  },
  created() {
    window.addEventListener("resize", this.CheckWidth);
  },
  computed: {
    itemClasses: function() {
      if (this.formItemClasses) {
        return this.formItemClasses.join(" ");
      }
      return "";
    },
  },
  mounted() {
    this.CheckWidth();
  },
  methods: {
    CheckWidth() {
      if (window.innerWidth <= 1440 && window.innerWidth > 768) {
        return (this.span = 8);
      } else if (window.innerWidth <= 768 && window.innerWidth > 425) {
        return (this.span = 11);
      } else if (window.innerWidth <= 425 && window.innerWidth >= 320) {
        return (this.span = 24);
      }
    },
  },
};
</script>
<style scoped>
.el-form {
  width: 100%;
}
.float-right {
  float: right;
  margin: 10px 0;
}
.search-form ::v-deep(.el-form-item__label) {
  text-align: left !important;
  margin-right: 15px;
}
.search-form ::v-deep(.el-input__inner),
.search-form ::v-deep(.el-range-input) {
  background-color: #f2f4f7;
}
.search-form ::v-deep(.el-form-item) {
  padding: 0 10px;
}
.search-form ::v-deep(.el-input .el-form-item),
.search-form ::v-deep(.el-select .el-form-item) {
  width: 200px !important;
}
::v-deep(.el-form-item.is-required .el-form-item__label::after) {
  top: 5px !important;
}

::v-deep(.el-date-editor.el-input) {
  width: 100%;
}
</style>
