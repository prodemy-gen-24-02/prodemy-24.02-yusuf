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

const updateProduct = async (id) => {
    try {
        const response = await axios.put(`https://dummyjson.com/products/1`, {
            title: "Gachapon edit",
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

updateProduct(id);

const search = async () => {
    await axios
        .get("https://dummyjson.com/products/1")
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.data);
        });
};

search();
