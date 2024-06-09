import axios from "axios";

export const getProducts = async (url) =>
    await axios.get(url).then((res) => res.data);

export const productsById = async (url, callback) => {
    await axios.get(url).then((res) => callback(res.data));
};

export const addProduct = async (url, payload) => {
    await axios.post(url, payload).then((res) => res.data);
};

export const editProductById = async (url, payload, callback) => {
    await axios
        .put(url, payload)
        .then((res) => callback(true, res.data))
        .catch((e) => callback(false, e));
};

export const deleteProductById = async (url, callback) => {
    await axios
        .delete(url)
        .then((res) => callback(true, res.data))
        .catch((e) => callback(false, e));
};
