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
    <section class="comment_form">
      <div class="container">
        <div class="fomment_form_inner box_layout fix_box_layout">
          <div class="comment_title">
            <h2>{{ $t("leave-review") }}</h2>
          </div>
          <!-- <form
            class="row comment_fro m"
            @submit.prevent="sendComment()"
            novalidate="novalidate"
          >
            <div class="form-group col-md-12">
              <textarea
                class="form-control fix-textarea"
                id="comment"
                rows="1"
                name="comment"
                placeholder="Comment"
                v-model="comment"
                required
              ></textarea>
            </div>
            <div class="form-group p_star col-md-6">
              <input
                type="number"
                class="form-control"
                id="rating"
                name="rating"
                placeholder="Rating/10"
                min="1"
                max="10"
                v-model.number="rating"
                required
              />
            </div>
            <div class="form-group col-md-12">
              <architect-button value="value" type="submit" v-if="isAuth">{{
                $t("post-comment")
              }}</architect-button>
              <architect-button
                link
                :path="'/auth'"
                :query="linkQuery"
                value="value"
                type="submit"
                typeClass=" form-control fix_btn"
                v-else
                >{{ $t("post-comment") }}</architect-button
              >
            </div>
          </form> -->
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="Comment"
              prop="comment"
              :rules="[
                {
                  required: true,
                  message: 'Please input comment',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input v-model="ruleForm.comment"></el-input>
            </el-form-item>
            <el-form-item label="Rating" prop="rating">
              <el-input
                type="number"
                v-model.number="ruleForm.rating"
              ></el-input>
            </el-form-item>
            <div class="text-left">
              <el-button
                v-if="isAuth"
                type="primary"
                id="btn-submit"
                @click="submitForm('ruleForm')"
                >{{ $t("post-comment") }}</el-button
              >
            </div>
          </el-form>
        </div>
      </div>
    </section>
    <div class="link_btn">
      <architect-button link :path="'/contact'"
        >{{ $t("work-together") }} !</architect-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var checkRating = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the rating"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please input digits"));
        } else {
          if (value > 10) {
            callback(new Error("Rating must be less than 10"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      ruleForm: {
        comment: "",
        rating: "",
      },
      loading: false,
      error: null,
      rules: {
        rating: [{ validator: checkRating, trigger: "blur" }],
      },
    };
  },
  created() {
    this.fetchDetailReview();
  },

  computed: {
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    linkQuery() {
      return "project/" + this.$route.params.id;
    },
  },
  methods: {
    async fetchDetailReview() {
      try {
        this.$store.dispatch(
          "reviews/fetchDetailReview",
          this.$route.params.id
        );
      } catch (err) {
        this.error = err;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sendComment();
        } else {
          return false;
        }
      });
    },
    async sendComment() {
      this.loading = true;

      const data = {
        comment: this.ruleForm.comment,
        rating: this.ruleForm.rating,
      };

      try {
        await this.$store
          .dispatch("reviews/addUserReview", data)
          .then(() => this.fetchDetailReview())
          .then(() => {
            this.ruleForm.comment = "";
            this.ruleForm.rating = "";
          });
      } catch (err) {
        this.error = this.$t("notify-comment");
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
.comment_form {
  padding: 20px 0;
  background: transparent;
}

.comment_title {
  padding: 0;
}

.fix_btn {
  width: 170px;
  height: 50px;
  background: #263a4f;
  color: #fff;
  border-radius: 0px;
  border: none;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  letter-spacing: 0.35px;
  text-transform: uppercase;
}

.text-left {
  text-align: left;
  margin-left: 11%;
}

#btn-submit {
  background-color: #263a4f;
  border: none;
}
#btn-submit:hover {
  background-color: #a3cc01 !important;
}
</style>
