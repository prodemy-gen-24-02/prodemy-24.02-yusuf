import axios from "axios";

export const login = (data, callback) => {
    axios
        .post(import.meta.env.VITE_API_URL + "login", data)
        .then((res) => {
            callback(true, res.data);
            // console.log(res.data);
        })
        .catch((err) => {
            callback(false, err);
        });
};

export const register = (data, callback) => {
    axios
        .post(import.meta.env.VITE_API_URL + "register", data)
        .then((res) => {
            callback(true, res.data);
        })
        .catch((err) => {
            callback(false, err);
        });
};
