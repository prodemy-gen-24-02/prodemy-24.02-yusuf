import { /* useContext, */ useEffect, useState } from "react";
import { /* useNavigate, */ useParams } from "react-router-dom";
import NumberFormat from "../utility/NumberFormat";
import Button from "../components/Elements/Button/index";
import Loading from "../components/Elements/Loading/index";
import { useGetProductsById } from "../hooks/useProducts";
// import { CheckoutContext } from "../context/CheckoutContext";
import BasicLayout from "../components/Layouts/BasicLayout";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import ButtonLoading from "../components/Elements/ButtonLoading/Index";

const DetailProduct = () => {
    const { id } = useParams();
    const swr = useGetProductsById(id);
    const product = swr.data;
    console.log(swr);
    const [image, setImage] = useState(product?.img[0]?.src);
    const [isFading, setIsFading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    // const navigate = useNavigate();
    const dispatch = useDispatch();

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

    useEffect(() => {
        setImage(product?.img[0]?.src);
    }, [product]);

    const onClickAddCart = () => {
        setButtonLoading(true);
        const produk = { ...product };
        delete produk.img;
        produk.image = image;
        dispatch(addToCart(produk));
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Product added to cart",
        }).then(() => {
            setButtonLoading(false);
        });
        // navigate("/products");
    };
    // const onClickAddCart = () => {
    //     const produk = { ...product };
    //     delete produk.img;
    //     setDataCheckout({
    //         ...produk,
    //         image,
    //     });
    //     navigate("/products/checkout");
    // };

    return (
        <BasicLayout>
            <div className="container-sm md:container-md md:flex justify-center items-center mx-2 md:mx-auto grid grid-rows-min md:grid-cols-2 gap-8 min-w-screen md:max-w-[768px] max-h-fit border-[1px] rounded border-slate-300 p-10 size-fit md:mb-5 md:px-6 mt-10">
                {swr.isLoading ? (
                    <div className="flex justify-center items-center w-full">
                        <Loading />
                    </div>
                ) : (
                    <>
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
                                <Button
                                    className={`rounded text-white m-4 p-6 w-64 h-full inline-flex items-center justify-center font-  md:duration-200 ${
                                        buttonLoading
                                            ? "cursor-not-allowed bg-gray-300"
                                            : "bg-[#1a503e] hover:bg-[#36a580] active:bg-[#36a580] "
                                    }`}
                                    onClick={onClickAddCart}
                                >
                                    {buttonLoading ? (
                                        <ButtonLoading />
                                    ) : (
                                        "Add to cart"
                                    )}
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </BasicLayout>
    );
};

export default DetailProduct;
