<template>
  <nav
    class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent"
  >
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle">
          <button type="button" class="navbar-toggler">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <router-link class="navbar-brand" to="/">Troc Design</router-link>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navigation">
        <ul class="navbar-nav">
          <li class="nav-item btn-rotate dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="far fa-bell"></i>

              <p>
                <span class="d-lg-none d-md-block">Some Actions</span>
              </p>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link btn-rotate" href="javascript:;">
              <i class="fas fa-cog"></i>
              <p>
                <span class="d-lg-none d-md-block">Account</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar.navbar-transparent {
  background-color: #263a4f !important;
}

a {
  color: #fff !important;
}

.input-group::placeholder {
  color: #fff !important;
}

.navbar-wrapper {
  transform: translateX(257px);
}

.fa-search {
  color: #fff !important;
  transform: translateX(5px);
  cursor: pointer;
}

.fa-search:hover {
  color: #a3cc01 !important;
}
</style>
