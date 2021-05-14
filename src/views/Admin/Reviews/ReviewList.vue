<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">All Reviews</h4>
          </div>
          <card-search-form>
            <search-form
              :inputs="searchFormData.inputs"
              :handleSearch="handleSearch"
              :handleClear="handleClear"
            >
            </search-form>
          </card-search-form>
          <div class="related-btn">
            <b class="fix-quantity">Quantity: {{ reviews.length }}</b>
            <button
              type="button"
              class="btn btn-success"
              @click="onExportExcels"
            >
              Export Excel
            </button>
          </div>
          <div class="card-body">
            <div v-if="loading"><architect-loading></architect-loading></div>
            <div
              class="table-responsive"
              v-else-if="!loading && reviews && reviews.length > 0"
            >
              <table class="table table-bordered">
                <thead class=" text-primary">
                  <th>
                    Comment
                  </th>
                  <th>
                    Rating
                  </th>
                  <th>
                    Related Projects
                  </th>
                  <th>
                    User
                  </th>
                  <th>
                    Actions
                  </th>
                </thead>
                <tbody v-for="review in reviews" :key="review.id">
                  <tr>
                    <td>
                      {{ review.comment }}
                    </td>
                    <td>
                      {{ review.rating }}
                    </td>
                    <td v-if="review.project">
                      {{ review.project.name }}
                    </td>
                    <td v-else>No project!</td>
                    <td v-if="review.user">
                      {{ review.user.name }}
                    </td>
                    <td v-else>No user!</td>
                    <td class="flex-edit">
                      <architect-button
                        link
                        :path="'/dashboard/reviews/editReview/' + review._id"
                        ><i class="far fa-edit"></i
                      ></architect-button>
                      <el-popconfirm
                        title="Are you sure to delete this review?"
                        @confirm="onConfirm(review._id)"
                      >
                        <template #reference>
                          <i class="far fa-trash-alt"></i>
                        </template>
                      </el-popconfirm>
                      <i
                        class="fas fa-file-export"
                        @click="onExport(review._id)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>There is no reviews !</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArchitectButton from '../../../components/common/ArchitectButton.vue';
export default {
  components: { ArchitectButton },
  data() {
    return {
      loading: false,
      err: null,
      file: '',
      dialogVisible: false,
      formSearch: {},
      total: 0,
    };
  },
  computed: {
    searchFormData: function() {
      return {
        inputs: [
          {
            inputType: 'input',
            label: 'Comment',
            name: 'comment',
            attributes: { clearable: true },
            trim: true,
          },
        ],
      };
    },
    reviews() {
      return this.$store.getters['reviews/getReviews'];
    },
  },
  async mounted() {
    await Promise.all([this.eventRefresh(), this.fetchAllReviews()]);
  },
  methods: {
    onConfirm(id) {
      this.onDelete(id);
    },
    async eventRefresh(page) {
      this.loading = true;
      await this.$store.dispatch('reviews/index', {
        page: page || 1,
        ...this.formSearch,
      });
      this.total = this.reviews.totalCount;
      this.loading = false;
    },
    async handleSearch(form, refs) {
      this.formSearch = form;
      await this.eventRefresh();
      refs.validate((valid) => {
        console.log(valid);
      });
    },
    async handleClear(form, refs) {
      await this.$store.dispatch('reviews/index', { page: 1 });
      refs.resetFields();
      this.total = this.reviews.totalCount;
    },
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(() => {
          done();
          this.dialogVisible = false;
        })
        .catch(() => {});
    },
    async onDelete(id) {
      try {
        await this.$store.dispatch('reviews/onDeleteReview', id);
      } catch (error) {
        this.err = error;
      }
      this.dialogVisible = false;
    },
    async fetchAllReviews() {
      this.loading = true;
      try {
        await this.$store.dispatch('reviews/fetchAllReviews');
      } catch (error) {
        this.err = error;
      }
      this.loading = false;
    },

    async onExport(id) {
      try {
        await this.$store.dispatch('reviews/getExcelFileById', id);
      } catch (error) {
        this.err = error || this.$t('fail');
      }
    },
    async onExportExcels() {
      try {
        await this.$store.dispatch('reviews/getExcelFiles');
      } catch (error) {
        this.err = error || this.$t('fail');
      }
    },
  },
};
</script>
<style scoped>
.btn-info {
  background-color: #409eff;
}
.btn {
  font-size: 12px;
}
.btn-success:hover {
  border-color: #28a745;
}
.fa {
  cursor: pointer;
}
.flex-edit {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fix-position-input {
  width: 40%;
  left: 58%;
  transform: translateY(-35px);
  outline: none;
}

.fa-file-export {
  color: rgb(39, 131, 198);
  margin-left: 5px;
  cursor: pointer;
}

.related-btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
.dialog-footer {
  display: flex;
  justify-content: center;
}
.fa-trash-alt {
  padding: 0 4px;
}
.fix-dialog {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>
