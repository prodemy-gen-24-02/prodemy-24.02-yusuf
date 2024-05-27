import { Fragment } from "react";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardProduct from "../components/Fragments/CardProduct";
import { Link } from "react-router-dom";
import data from "../data/data.json";

const ProductPages = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("/data.json")
    //         .then((res) => {
    //             if (!res.ok) {
    //                 console.log(res);
    //             }
    //             console.log(res.json());
    //             return res.json();
    //         })
    //         .then((products) => setProducts(products))
    //         .catch((err) => console.log(err));
    // }, []);

    const products = data;
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
                                <Link to={`/products/details/${product.id}`}>
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
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default ProductPages;
