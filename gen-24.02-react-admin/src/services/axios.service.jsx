import axios from "axios";

export const getProducts = async (url) =>
    await axios.get(url).then((res) => res.data);

export const productsById = async (url, callback) => {
    await axios.get(url).then((res) => callback(res.data));
};
