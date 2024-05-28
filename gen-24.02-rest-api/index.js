import axios from "axios";

const url = "https://dummyjson.com/products";

axios
    .get(url)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
