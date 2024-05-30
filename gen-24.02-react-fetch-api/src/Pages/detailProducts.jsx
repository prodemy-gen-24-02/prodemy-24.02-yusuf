import { useState } from "react";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import NumberFormat from "../utility/NumberFormat";
import Button from "../components/Elements/Button/index";
import { useGetProductsById } from "../hooks/useProducts";
import useSWR from "swr";
import { getProducts } from "../services/axios.service";

const DetailProduct = () => {
    const { id } = useParams();
    const fetch = useSWR(
        import.meta.env.VITE_API_URL + "products/" + id,
        getProducts()
    );

    console.log(fetch);
    console.log(import.meta.env.VITE_API_URL + "products/" + id);
    const productArray = data.products.filter((product) => product.id == id);
    const product = productArray.length > 0 ? productArray[0] : null;
    const [image, setImage] = useState(product.img[0].src);
    const [isFading, setIsFading] = useState(false);

    // useEffect(() => {
    //     setImage(product.img[0].src);
    // }, [product]);

    const changeImage = (newImage) => {
        if (image === newImage) {
            return image;
        }
        setIsFading(true);
        setTimeout(() => {
            setImage(newImage);
            setIsFading(false);
        }, 300); // Duration of the fade-out effect
    };

    return (
        <>
            <Navbar />
            {product && (
                <div className="container-sm md:container-md md:flex justify-center items-center mx-2 md:mx-auto grid grid-rows-min md:grid-cols-2 gap-8 min-w-screen md:max-w-[768px] max-h-fit border-[1px] rounded border-slate-300 p-10 size-fit md:mb-5 md:px-6 mt-10">
                    <div className="md:grid md:grid-rows-1 md:justify-items-center mx-auto size-fit md:size-full">
                        <div className="overflow-hidden mb-3 size-auto md:max-h-[480px] md:max-w-[768px] h-full w-full bg-slate-50 flex justify-center items-center">
                            <img
                                className={`md:scale-125 hover:scale-150 duration-300 size-[240px] transition-all ease-in-out ${
                                    isFading ? "opacity-0" : "opacity-100"
                                }`}
                                src={image}
                                alt="Nike Waffle main"
                                id="main"
                            />
                        </div>
                        {product.img && (
                            <div className="flex grid-cols-4 gap-1 max-w-[240px] max-h-[60px] md:max-w-[360px] md:max-h-[103px] mt-5">
                                {product.img.map((image) => {
                                    return (
                                        <img
                                            key={image.id}
                                            className="active:ring active:ring-slate-300 md:hover:ring md:hover:ring-slate-300 thumbnail size-[60px] md:size-full"
                                            src={image.src}
                                            alt={`Nike Waffle ${image.id}`}
                                            onClick={() =>
                                                changeImage(image.src)
                                            }
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="grid grid-rows-auto size-full md:m-4 justifycenter items-center">
                        <h2 className="text-xl tracking-[10px] uppercase font-light font-serif text-slate-400 my-3 md:my-8 md:-mb-5">
                            {product.category}
                        </h2>
                        <h1 className="text-3xl font-black font-serif my-3 md:my-8 md:-mb-5">
                            {product.nama}
                        </h1>
                        <p className="text-l font-light font-serif text-slate-700 my-3 md:my-8 md:-mb-5">
                            {product.desc}
                        </p>
                        <div className="grid-cols-2 flex justify-items-center my-3 md:my-8 md:-mb-5">
                            <h2 className="text-3xl font-bold text-[#1a503e]">
                                {NumberFormat.toUsd(product.price)}
                            </h2>
                            {/* <span className="text-xs font-bold -top-5 text-[#1a503e]">
                                .00
                            </span> */}
                        </div>
                        <div className="h-10 mb-10 mt-8 pr-10">
                            <Button className="rounded bg-[#1a503e] text-white m-4 p-6 w-64 h-full inline-flex items-center justify-center font- hover:bg-[#36a580] active:bg-[#36a580] md:duration-200">
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default DetailProduct;
