import axios from "axios";

const url = "https://dummyjson.com/products";

const getProduct = async () =>
    await axios
        .get(url)
        .then((response) => {
            console.log("products:");
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

// getProduct();

let id = 1;

const addProduct = async () => {
    const response = await axios.post("https://dummyjson.com/products/add", {
        title: "Gachapon",
    });
    console.log(response.data);
};

addProduct();

const updateProduct = (id) => {
    const response = axios.put(`https://dummyjson.com/products/${id}`, {
        title: "Gachapon edit",
    });
    console.log(response.data);
};

updateProduct(id);
