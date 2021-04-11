function setup(instance) {
  instance.interceptors.request.use(
    function(config) {
      const token = getLocalToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
}
function checkToken(instance) {
  instance.interceptors.response.use(
    (response) => {
      if (response.headers["content-type"].startsWith("application/json")) {
        // response.data = camelcaseKeys(response.data, { deep: true })
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

function getLocalToken() {
  const token = window.localStorage.getItem("token");
  return token;
}

export default { setup, checkToken };
