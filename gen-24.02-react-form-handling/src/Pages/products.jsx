import CardProduct from "../components/Fragments/CardProduct";
import Loading from "../components/Elements/Loading/index";
import { Link } from "react-router-dom";
import { useGetProducts } from "../hooks/useProducts";
import BasicLayout from "../components/Layouts/BasicLayout";

const ProductPages = () => {
    const fetch = useGetProducts();

    const products = fetch.data;
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
                            {products.map((product) => (
                                <CardProduct key={product.id}>
                                    <Link
                                        to={`/products/details/${product.id}`}
                                    >
                                        <CardProduct.Header
                                            images={product.img[0].src}
                                        />
                                        <CardProduct.Body
                                            title={product.nama}
                                            price={product.price}
                                            star={product.star}
                                            rating={product.rating}
                                        >
                                            {product.desc}
                                        </CardProduct.Body>
                                    </Link>
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
