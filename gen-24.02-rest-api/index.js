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

const addProduct = async () => {
    const response = await axios.post("https://dummyjson.com/products/add", {
        title: "Gachapon",
    });
    console.log("product added:");
    console.log(response.data);
    console.log();
};

addProduct();

const updateProduct = async () => {
    try {
        const response = await axios.put(`https://dummyjson.com/products/1`, {
            title: "Gachapon edit",
        });
        console.log("product updated:");
        console.log(response.data);
        console.log();
    } catch (error) {
        console.log(error);
    }
};

updateProduct();

const search = async () => {
    await axios
        .get("https://dummyjson.com/products/1")
        .then((res) => {
            console.log("product by id:");
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.data);
        });
};

search();
