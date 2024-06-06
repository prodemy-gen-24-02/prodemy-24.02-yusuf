const products = [
    {
        id: 1,
        nama: "Gaming Headphone 2",
        desc: "Gaming Headphone, ultra bass",
        category: "Headphone",
        price: 200,
        star: 3,
        rating: 121,
    },
    {
        nama: "Nike Waffle",
        desc: "Retro gets modernised with these sleek sneakers inspired by the Nike Daybreak. Era-echoing suede and nylon are paired in complementary colours, and the updated wedge midsole gives you an extra lift. Style, comfort, that iconic Waffle outsole—this is a perfect new addition to your daily rotation.",
        category: "Shoes",
        price: 128.99,
        star: 4,
        rating: 328,
        id: 2,
    },
    {
        id: 3,
        nama: "Gaming Shoes 2",
        desc: "Razer Gaming shoes with RGB, FPS++",
        category: "Shoes",
        price: 119.89,
        star: 3,
        rating: 284,
    },
    {
        id: 4,
        nama: "2TB NVME SSD",
        desc: "Samsung SSD 990 Pro 2TB M.2 MZ-V9P2T0BW",
        category: "SSD",
        price: 700,
        star: 5,
        rating: "3.2k",
    },
    {
        id: 5,
        nama: "Condenser Microphone",
        desc: "Karaoke Condenser Microphone 35mm",
        category: "Peripheral",
        price: 9.99,
        star: 2,
        rating: 86,
    },
    {
        id: 6,
        nama: "Wireless Gaming Mouse",
        desc: "Wireless Gaming Mouse with RGB",
        category: "Peripheral",
        price: 89.78,
        star: 4,
        rating: 48,
    },
    {
        id: 7,
        nama: "Carabiner",
        desc: "Strong Carabiner for Climbing Sport",
        category: "Sports",
        price: 1.49,
        star: 5,
        rating: "9.7k",
    },
    {
        id: 8,
        nama: "Gaming Mouse",
        desc: "Mesh Gaming Mouse with RGB, FPS+++",
        category: "Peripheral",
        price: 13.45,
        star: 3,
        rating: 32,
    },
];

function insert(item) {
    products.push(item);
    console.log("SUCCESS INSERT");
    console.log(products);
    console.log();
}

function deleteProductById(id) {
    const deleteProducts = products.filter((product) => product.id !== id);
    console.log("SUCCESS DELETE");
    console.log(deleteProducts);
    console.log();
}

function updateProductById(id, item) {
    const newProducts = products.map((product) =>
        product.id === id ? { ...product, ...item } : product
    );
    console.log("SUCCESS UPDATE");
    console.log(newProducts);
    console.log();
}

const payload = {
    id: 9,
    nama: "Laptop Gimang",
    desc: "Laptop Gaming Murah Spek Gahar",
    category: "Laptop",
    price: 200000,
    star: 3,
    rating: 121,
};

insert(payload);

updateProductById(9, {
    nama: "Laptop Kantor",
    desc: "Laptop Kantor Murah Spek Gahar",
    price: 199000,
});

deleteProductById(9);
