import CardProduct from "../components/Fragments/CardProduct";
import Loading from "../components/Elements/Loading/index";
// import { Link /* useNavigate */ } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { useGetProducts } from "../hooks/useProducts";
import BasicLayout from "../components/Layouts/BasicLayout";
import Swal from "sweetalert2";

const ProductPages = () => {
    const fetch = useGetProducts();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.user.id);
    // console.log(userId);
    // const navigate = useNavigate();

    const products = fetch.data;

    const onClickAddCart = (id) => {
        const produk = products.filter((product) => product.id === id);
        const payload = { ...produk[0] };
        payload.image = payload.img[0].src;
        payload.qty = 1;
        payload.productId = payload.id;
        payload.userId = userId;
        delete payload.id;
        delete payload.img;
        // console.log(payload);
        dispatch(addToCart(payload));
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Product added to cart",
        });
    };

    return (
        <BasicLayout>
            <div className="flex flex-wrap mb-10 mx-auto py-4 w-full max-w-screen overflow-hidden lg:p-20">
                <div className="min-w-full h-10 mb-10">
                    <h3 className="capitalize mb-10 font-black text-3xl mx-5">
                        Popular Product
                    </h3>
                </div>
                <div className="w-full float-none leading-5 static z-auto justify-center items-center">
                    {fetch.isLoading ? (
                        <div className="flex justify-center items-center w-full">
                            <Loading />
                        </div>
                    ) : (
                        <div className="mx-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full z-0 rounded-xl flex-none mr-6 max-w-full">
                            {products &&
                                products.map((product) => (
                                    <CardProduct key={product.id}>
                                        {/* <Link
                                            to={`/products/details/${product.id}`}
                                        > */}
                                        <CardProduct.Header
                                            images={product.img[0].src}
                                            id={product.id}
                                        />
                                        <CardProduct.Body
                                            title={product.nama}
                                            price={product.price}
                                            star={product.star}
                                            rating={product.rating}
                                            onClick={() =>
                                                onClickAddCart(product.id)
                                            }
                                        >
                                            {product.desc}
                                        </CardProduct.Body>
                                        {/* </Link> */}
                                    </CardProduct>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </BasicLayout>
    );
};

export default ProductPages;
