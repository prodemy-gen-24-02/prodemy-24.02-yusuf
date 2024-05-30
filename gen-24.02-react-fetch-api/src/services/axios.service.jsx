import axios from "axios";

export const getProducts = (url) => axios.get(url).then((res) => res.data);
