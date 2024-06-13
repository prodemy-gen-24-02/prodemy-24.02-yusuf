import { Link } from "react-router-dom";
import Button from "../components/Elements/Button";
import Loading from "../components/Elements/Loading";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useGetProducts } from "../hooks/useProducts";
import { deleteProductById } from "../services/axios.service";
import Swal from "sweetalert2";
import { useState } from "react";
import ButtonLoading from "../components/Elements/ButtonLoading/Index";

const ProductAdmin = () => {
    const swr = useGetProducts();
    const products = swr.data || {};
    const [isLoading, setIsloading] = useState(false);

    const onClickDelete = async (id) => {
        setIsloading(!isLoading);
        await deleteProductById(
            import.meta.env.VITE_API_URL + `products/${id}`,
            (status, res) => {
                if (status) {
                    Swal.fire({
                        title: "Success!",
                        text: res.message,
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(() => {
                        setIsloading(!isLoading);
                        window.location.reload();
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: res.message,
                        icon: "error",
                        confirmButtonText: "OK",
                    }).then(() => {
                        setIsloading(!isLoading);
                    });
                }
            }
        );
    };
    return (
        <AdminLayout title={"Product Admin"}>
            <h1 className="text-3xl text-emerald-900 font-bold mb-6">
                List Product
            </h1>
            <div className="flex justify-end items-center mx-10">
                <Link to={"/admin/products/add"}>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-lg text-2xl font-bold p-6 mb-7 mx-10">
                        Add New Product
                    </Button>
                </Link>
            </div>
            {swr.isLoading ? (
                <Loading />
            ) : (
                products.length > 0 && (
                    <div className="rounded-lg overflow-hidden mx-4 md:mx-10">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr className="w-1/4 bg-slate-200 py-4 px-6 font-bold uppercase">
                                    <th className="w-60 max-w-[60px] py-2 px-6 border-2 border-r-slate-300 font-bold">
                                        #
                                    </th>
                                    <th className="py-2 px-6 border-2 border-r-slate-300 font-bold">
                                        Name
                                    </th>
                                    <th className="py-2 px-6 border-2 border-r-slate-300 font-bold">
                                        Category
                                    </th>
                                    <th className="py-2 px-6 border-2 border-r-slate-300 font-bold">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white border-2 border-slate-300 rounded-lg">
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-6 border-2 border-r-slate-300">
                                            {product.id}
                                        </td>
                                        <td className="py-2 px-6 border-2 border-r-slate-300">
                                            {product.nama}
                                        </td>
                                        <td className="py-2 px-6 border-2 border-r-slate-300">
                                            {product.category}
                                        </td>
                                        <td className="flex justify-center py-2 px-5 border-[1px] border-slate-300">
                                            <Button
                                                className={`${
                                                    isLoading
                                                        ? "cursor-not-allowed bg-gray-300"
                                                        : "bg-red-500 hover:bg-red-600 active:bg-red-700"
                                                } mx-5 w-1/4 rounded-lg text-white`}
                                                onClick={() =>
                                                    onClickDelete(product.id)
                                                }
                                            >
                                                {isLoading ? (
                                                    <ButtonLoading />
                                                ) : (
                                                    "Delete"
                                                )}
                                            </Button>
                                            <Link
                                                to={`/admin/products/${product.id}`}
                                                className="w-1/4"
                                            >
                                                <Button className="bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 mx-5 w-full rounded-lg text-white">
                                                    Edit
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            )}
        </AdminLayout>
    );
};

export default ProductAdmin;
