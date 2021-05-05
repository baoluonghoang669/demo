import router from "../../router";
import http from "../../helpers/http";
import axios from "axios";

export default {
    //Login
    async onLogin({ commit }, payload) {
        const response = await http.post("auth/login", {
            email: payload.email,
            password: payload.password,
            token: true,
        });

        const responseData = response.data;

        if (responseData.success === false) {
            return;
        }
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("role", responseData.role);
        localStorage.setItem("idUser", responseData.idUser);

        commit("SET_USER", responseData.data);

        commit("SET_TOKEN", {
            token: responseData.token,
            role: responseData.role,
            id: responseData.idUser,
        });
    },

    //Register
    async onRegister({ commit }, payload) {
        const response = await http.post("auth/register", {
            email: payload.email,
            password: payload.password,
            token: true,
        });

        const responseData = response.data;

        if (responseData.success === false) {
            return;
        }

        localStorage.setItem("role", responseData.role);
        localStorage.setItem("idUser", responseData.idUser);

        commit("SET_TOKEN", {
            token: responseData.token,
            role: responseData.role,
            id: responseData.idUser,
        });
    },

    //Forgot password
    async onForgotPassword({ commit }, payload) {
        const response = await http.post("auth/forgotpassword", {
            email: payload.email,
        });
        const responseData = response.data;

        localStorage.setItem("resetToken", response.data.resetToken);

        commit("SET_RESET_TOKEN", {
            token: responseData.resetToken,
        });
    },

    //Reset password
    async onResetPassword({ commit }, payload) {
        const password = {
            password: payload.password,
        };

        const response = await http.put(
            `auth/resetpassword/${localStorage.getItem("resetToken")}`,
            password
        );

        const responseData = response.data.data;
        console.log(responseData);

        commit("SET_RESET_PASSWORD", password);
    },

    //Fetch detail logged user
    async fetchDetailUser({ commit }) {
        const response = await http.get("auth/me");

        const responseData = response.data.data;

        if (responseData.success === false) {
            return;
        }

        commit("SET_USER", responseData);
    },

    //update user detail profile
    async updateDetailUser({ commit }, payload) {
        const detailUser = {
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            address: payload.address,
            birthday: payload.birthday,
            city: payload.city,
            country: payload.country,
        };

        const response = http.put("auth/updatedetails", detailUser);

        if (response.success === false) {
            return;
        }

        commit("SET_PROFILE_USER", detailUser);
    },

    //update user's avatar
    async updateAvatar({ commit }, files) {
        let formData = new FormData();
        formData.append("file", files);

        const response = await http.put(
            `auth/${localStorage.getItem("idUser")}/avatar`,
            formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.success === false) {
            return;
        }

        commit("UPDATE_AVATAR", response.data.data);
    },

    //Logout
    async logout({ commit }) {
        const response = await http.get("auth/logout");
        const responseData = response.data;

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("idUser");
        router.push("/auth");

        commit("SET_TOKEN", {
            token: null,
            role: null,
            idUser: null,
            responseData,
        });
    },

    //Chat with chatbot
    async onSendChat({ commit }, payload) {
        return await axios
            .post("https://botapplication98.herokuapp.com/get", payload, {
                "Content-Type": `multipart/form-data`,
            })
            .then((response) => {
                commit("SET_HISTORY", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};