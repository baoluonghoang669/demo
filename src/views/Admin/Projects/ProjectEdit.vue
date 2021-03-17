<template>
  <div class="container rounded bg-none">
    <form>
      <div class="col-md-8">
        <architect-button
          typeClass="fix-back-btn"
          link
          :path="'/dashboard/projects'"
        >
          <i class="fas fa-undo-alt"></i
        ></architect-button>
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-center">Form Edit Project</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Name</label
              ><input
                type="text"
                class="form-control"
                placeholder="Enter project name"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Select image:</label>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Description</label
              ><input
                type="text"
                class="form-control"
                placeholder="Enter description"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter address"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Category</label
              ><input type="text" class="form-control" placeholder="Category" />
            </div>
            <div class="col-md-12">
              <label class="labels">Architecture</label
              ><input
                type="text"
                class="form-control"
                placeholder="Architecture"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="labels">Client</label
              ><input type="text" class="form-control" placeholder="Client" />
            </div>
            <div class="col-md-6">
              <label class="labels">Cost</label
              ><input type="text" class="form-control" placeholder="Cost" />
            </div>
            <div class="col-md-6">
              <label class="labels">Area</label
              ><input type="number" class="form-control" placeholder="Area" />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary fixed-button" type="submit">
              Save and update
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
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
