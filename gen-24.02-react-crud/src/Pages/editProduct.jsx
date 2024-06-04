import { useParams } from "react-router-dom";
import * as yup from "yup";
import Swal from "sweetalert2";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useGetProductsById } from "../hooks/useProducts";
import Loading from "../components/Elements/Loading";
import { useEffect, useState } from "react";
import ProductForm from "../components/Fragments/ProductForm";
import { editProductById } from "../services/axios.service";

const EditProduct = () => {
    const { id } = useParams();
    const swr = useGetProductsById(id);
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([
        {
            src: "",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        nama: yup.string().required("Nama field is Required"),
        desc: yup.string().required("Description field is Required"),
        category: yup.string().required("Category field is Required"),
        price: yup.number().required("Price field is Required"),
        star: yup.number().required("Star field is Required"),
        rating: yup.number().required("Rating field is Required"),
        img: yup
            .array()
            .of(
                yup.object().shape({
                    src: yup.string().required("Images field is Required"),
                })
            )
            .min(1, "Product must be at least have 1 Images"),
    });

    useEffect(() => {
        const newProduct = { ...swr.data };
        if (swr.data?.img) {
            delete newProduct?.img;
        }
        setProduct(newProduct);
        setImages(swr.data?.img || []);
    }, [swr.data]);

    const onClickImages = () => {
        setImages([...images, { src: "" }]);
    };

    const onClickDeleteImages = (index) => {
        if (images.length === 1) {
            return Swal.fire({
                title: "Error!",
                text: "Product must be at least have 1 Image",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
        setImages(images.filter((_, i) => i !== index));
    };

    const onChangeForm = (event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
        console.log(product);
    };

    const onChangeImages = (event, index) => {
        const { name, value } = event.target;
        const newImages = [...images];
        newImages[index][name] = value;
        setImages(newImages);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const dataToSubmit = { ...product, img: images };
        try {
            const validation = await schema.validate(dataToSubmit);
            console.log(validation);
            await editProductById(
                `${import.meta.env.VITE_API_URL}products/${id}`,
                dataToSubmit,
                (status, res) => {
                    setIsLoading(!isLoading);
                    if (status) {
                        Swal.fire({
                            title: "Success!",
                            text: res.message,
                            icon: "success",
                            confirmButtonText: "OK",
                        }).then(() => {
                            window.location.href = "/admin/products";
                        });
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: res.message,
                            icon: "error",
                            confirmButtonText: "OK",
                        });
                        setIsLoading(!isLoading);
                    }
                }
            );
        } catch (e) {
            Swal.fire({
                title: "Error!",
                text: e.message,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <AdminLayout>
            {swr.isLoading ? (
                <Loading />
            ) : (
                swr.data && (
                    <ProductForm
                        title="Edit Product"
                        data={product}
                        imagesData={images}
                        onChangeForm={onChangeForm}
                        onChangeImages={onChangeImages}
                        onClickDeleteImages={onClickDeleteImages}
                        onClickImages={onClickImages}
                        onClickSubmit={onSubmit}
                        isLoading={isLoading}
                    />
                )
            )}
        </AdminLayout>
    );
};

export default EditProduct;
