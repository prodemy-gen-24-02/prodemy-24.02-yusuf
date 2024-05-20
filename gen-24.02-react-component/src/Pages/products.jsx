import { Fragment } from "react";
import Navbar from "../components/Fragments/Navbar";
import CardProduct from "../components/Fragments/CardProduct";
import Footer from "../components/Fragments/Footer";

const products = [
    {
        id: 1,
        nama: "Gaming Headphone",
        desc: "Gaming Headphone, ultra bass",
        price: 200,
        cent: "00",
        star: 3,
        rating: 121,
        img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png",
    },
    {
        id: 2,
        nama: "Nike Waffle",
        desc: "Nike waffle shoes, white color",
        price: 99,
        cent: "99",
        star: 4,
        rating: 328,
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b629b25-26ec-4d73-a330-da71843d3018/waffle-debut-shoes-hbBJtw.png",
    },
    {
        id: 3,
        nama: "Gaming Shoes",
        desc: "Razer Gaming shoes with RGB, FPS++",
        price: 119,
        cent: "99",
        star: 3,
        rating: 284,
        img: "https://i.redd.it/j51v4llxyoh41.jpg",
    },
    {
        id: 4,
        nama: "2TB NVME SSD",
        desc: "Samsung SSD 990 Pro 2TB M.2 MZ-V9P2T0BW",
        price: 700,
        cent: "00",
        star: 5,
        rating: "3.2k",
        img: "https://media.dinomarket.com/docs/imgTD/2023-06/DM_DD7A3E11CA38FDDB700D3725A6E195B8_210623170636_ll.jpg.jpg",
    },
    {
        id: 5,
        nama: "Condenser Microphone",
        desc: "Karaoke Condenser Microphone 35mm",
        price: 9,
        cent: "00",
        star: 2,
        rating: 86,
        img: "https://upload.jaknot.com/2022/07/images/products/2d0a21/original/taffstudio-karaoke-condenser-microphone-35mm-with-stand-mk-f200tl.jpg",
    },
    {
        id: 6,
        nama: "Wireless Gaming Mouse",
        desc: "Wireless Gaming Mouse with RGB",
        price: 89,
        cent: 99,
        star: 4,
        rating: 48,
        img: "https://images-cdn.ubuy.co.id/633af67651ba8d64847d5064-versiontech-wireless-gaming-mouse.jpg",
    },
    {
        id: 7,
        nama: "Carabiner",
        desc: "Strong Carabiner for Climbing Sport",
        price: 1,
        cent: 55,
        star: 5,
        rating: "9.7k",
        img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/102/MTA-120891917/br-m036969-10265_black-diamond-rocklock-screwgate-carabiner-black-alat-panjat-tebing_full02-e1acb410.jpg",
    },
    {
        id: 8,
        nama: "Gaming Mouse",
        desc: "Mesh Gaming Mouse with RGB, FPS+++",
        price: 13,
        cent: 79,
        star: 3,
        rating: 32,
        img: "https://i.ebayimg.com/images/g/4CMAAOSwbqFinet1/s-l1200.webp",
    },
];

const productPages = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="flex flex-wrap mb-10 mx-auto py-4 w-full max-w-screen overflow-hidden lg:p-20">
                <div className="min-w-full h-10 mb-10">
                    <h3 className="capitalize mb-10 font-black text-3xl mx-5">
                        Popular Product
                    </h3>
                </div>
                <div className="w-full float-none leading-5 static z-auto justify-center items-center">
                    <div className="mx-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full z-0 rounded-xl flex-none mr-6 max-w-full">
                        {products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header images={product.img} />
                                <CardProduct.Body
                                    title={product.nama}
                                    price={product.price}
                                    cent={product.cent}
                                    star={product.star}
                                    rating={product.rating}
                                >
                                    {product.desc}
                                </CardProduct.Body>
                            </CardProduct>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default productPages;
