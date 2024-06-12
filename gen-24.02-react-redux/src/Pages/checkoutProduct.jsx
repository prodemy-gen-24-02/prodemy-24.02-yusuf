import { /* useContext, */ useEffect, useState } from "react";
import * as yup from "yup";
import Swal from "sweetalert2";
import Button from "../components/Elements/Button";
import InputForm from "../components/Elements/Input/Index";
import BasicLayout from "../components/Layouts/BasicLayout";
// import { CheckoutContext } from "../context/CheckoutContext";
import NumberFormats from "../utility/NumberFormat";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonLoading from "../components/Elements/ButtonLoading/Index";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";

const CheckoutProduct = () => {
    const dataCheckout = useSelector((state) => state.cart.cart);
    // console.log(dataCheckout);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        email: "",
        address: "",
        shipping: null,
    });
    const [totalPrice, setTotalPrice] = useState(0);
    // console.log(dataCheckout);

    useEffect(() => {
        const total = dataCheckout.reduce(
            (acc, product) => acc + product.price,
            0
        );
        setTotalPrice(total);
        // console.log(totalPrice);
    }, [dataCheckout, totalPrice]);

    const schema = yup.object().shape({
        name: yup.string("Field Name is required"),
        email: yup.string().email().required("Email is required"),
    });

    const onChangeForm = (event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
        // console.log(product);
    };

    const onClickSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const products = [];
        dataCheckout.forEach((product) => {
            products.push({
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: product.quantity,
            });
        });
        const payload = {
            name: product.name,
            email: product.email,
            address: product.address,
            shipping: product.shipping,
            products: products,
            totalPrice: totalPrice,
        };
        try {
            const validate = await schema.validate(payload);
            payload.shipping === 0
                ? (payload.shipping = "One day Service")
                : (payload.shipping = "Regular Service");
            await axios.post(import.meta.env.VITE_API_URL + "order", validate);
            dispatch(clearCart());
            Swal.fire({
                title: "Success!",
                text: "Checkout Success",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => navigate("/"));
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <BasicLayout>
            <div className="p-10 max-w-screen border-2 rounded-lg mx-20 my-10">
                <h1 className="text-3xl text-emerald-900 font-bold mb-10">
                    Checkout Product
                </h1>
                <div className="grid grid-cols-2 gap-14 p-4">
                    <div className="max-w-full min-w-full">
                        <div className="min-w-full h-fit border-b-2 mb-10">
                            <h2 className="text-2xl font-bold">
                                Shipping Details
                            </h2>
                        </div>
                        <form className="w-full" onSubmit={onClickSubmit}>
                            <InputForm
                                label="Name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full mb-5"
                                onChange={onChangeForm}
                            />
                            <InputForm
                                label="Email"
                                name="email"
                                placeholder="John Doe"
                                className="w-full mb-5"
                                onChange={onChangeForm}
                            />
                            <InputForm
                                label="Address"
                                name="address"
                                placeholder="John Doe"
                                className="w-full mb-5"
                                onChange={onChangeForm}
                            />
                            <div className="flex justify-start">
                                <InputForm
                                    type="radio"
                                    name="shipping"
                                    value={0}
                                    label="One day Service"
                                    checked={product.shipping === 0}
                                    className="max-w-[50%] mx-7"
                                    divClass="mx-5 p-2"
                                    onChange={onChangeForm}
                                />
                                <InputForm
                                    type="radio"
                                    label="Regular Service"
                                    checked={product.shipping === 1}
                                    name="shipping"
                                    value={1}
                                    className="max-w-[50%] mx-7"
                                    divClass="mx-5 p-2"
                                    onChange={onChangeForm}
                                />
                            </div>
                            <Button
                                className={`rounded-xl text-white m-4 p-6 w-full inline-flex items-center justify-center md:duration-200 ${
                                    isLoading
                                        ? "cursor-not-allowed bg-gray-300"
                                        : "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 "
                                }`}
                                type="submit"
                            >
                                {isLoading ? <ButtonLoading /> : "Place Order"}
                            </Button>
                        </form>
                    </div>
                    <div className="max-w-full">
                        <div className="w-full border-b-2 h-fit">
                            <h2 className="text-2xl font-bold text-emerald-950">
                                Order Details
                            </h2>
                        </div>
                        {dataCheckout &&
                            dataCheckout.map((data, index) => (
                                <div
                                    className="flex justify-between items-center w-full h-fit p-5 border-b-2"
                                    key={index}
                                >
                                    <img
                                        src={data.image}
                                        className="max-w-20 max-h-26"
                                        alt="foto produk"
                                    />
                                    <h3 className="text-xl font-semibold text-black">
                                        {data.name}
                                    </h3>
                                    <p className="text-xl font-semibold text-black">
                                        1
                                    </p>
                                    <p className="text-xl font-semibold text-black">
                                        {NumberFormats.toUsd(data.price)}
                                    </p>
                                </div>
                            ))}
                        <div className="flex justify-between w-full h-fit p-5">
                            <h3 className="text-xl font-semibold text-black">
                                Total
                            </h3>
                            <p className="text-xl font-semibold text-black">
                                {NumberFormats.toUsd(totalPrice)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    );
};

export default CheckoutProduct;
