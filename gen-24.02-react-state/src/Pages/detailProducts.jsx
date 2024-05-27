import { useState } from "react";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";

const DetailProduct = () => {
    const [image, setImage] = useState(
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b629b25-26ec-4d73-a330-da71843d3018/waffle-debut-shoes-hbBJtw.png"
    );
    const [isFading, setIsFading] = useState(false);

    const product = {
        id: 2,
        nama: "Nike Waffle",
        desc: "Nike waffle shoes, white color",
        price: 99.99,
        star: 4,
        rating: 328,
        img: [
            {
                id: 1,
                src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b629b25-26ec-4d73-a330-da71843d3018/waffle-debut-shoes-hbBJtw.png",
            },
            {
                id: 2,
                src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f5ccef1e-75d8-4eec-a2ec-c73f15f7b04e/waffle-debut-shoes-hbBJtw.png",
            },
            {
                id: 3,
                src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e43bc784-567b-4ed3-9c22-498bf7ca7f0f/waffle-debut-shoes-hbBJtw.png",
            },
            {
                id: 4,
                src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/227b2c9d-6952-4934-a0b0-1f5eda37aed3/waffle-debut-shoes-hbBJtw.png",
            },
        ],
    };

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
                    <div className="flex grid-cols-4 gap-1 max-w-[240px] max-h-[60px] md:max-w-[360px] md:max-h-[103px] mt-5">
                        {product.img.map((image) => {
                            return (
                                <img
                                    key={image.id}
                                    className="active:ring active:ring-slate-300 md:hover:ring md:hover:ring-slate-300 thumbnail size-[60px] md:size-full"
                                    src={image.src}
                                    alt={`Nike Waffle ${image.id}`}
                                    onClick={() => changeImage(image.src)}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-rows-auto size-full md:m-4 justifycenter items-center">
                    <h2 className="text-xl font-light font-serif text-slate-400 my-3 md:my-8 md:-mb-5">
                        S H O E S
                    </h2>
                    <h1 className="text-3xl font-black font-serif my-3 md:my-8 md:-mb-5">
                        Nike - Waffle
                    </h1>
                    <p className="text-l font-light font-serif text-slate-700 my-3 md:my-8 md:-mb-5">
                        Retro gets modernised with these sleek sneakers inspired
                        by the Nike Daybreak. Era-echoing suede and nylon are
                        paired in complementary colours, and the updated wedge
                        midsole gives you an extra lift. Style, comfort, that
                        iconic Waffle outsole—this is a perfect new addition to
                        your daily rotation.
                    </p>
                    <div className="grid-cols-2 flex justify-items-center my-3 md:my-8 md:-mb-5">
                        <h2 className="text-3xl font-bold text-[#1a503e]">
                            $ 99
                        </h2>
                        <span className="text-xs font-bold -top-5 text-[#1a503e]">
                            .00
                        </span>
                    </div>
                    <div className="h-10 mb-10 mt-8">
                        <button className="rounded bg-[#1a503e] text-white m-4 p-6 w-64 h-full inline-flex items-center justify-center font- hover:bg-[#36a580] active:bg-[#36a580] md:duration-200">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DetailProduct;
