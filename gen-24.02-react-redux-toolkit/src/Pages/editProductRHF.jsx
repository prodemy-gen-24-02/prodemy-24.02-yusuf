import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import ProductFormHF from "../components/Fragments/ProductFormRHF";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useGetProductsById } from "../hooks/useProducts";
import Loading from "../components/Elements/Loading";
import { useEffect, useState } from "react";

const EditProductRHF = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetProductsById(id);
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([
        {
            src: "",
        },
    ]);

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

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const newProduct = { ...data };
        if (data?.img) {
            delete newProduct?.img;
        }
        setProduct(newProduct);
        setImages(data?.img || []);
    }, [data]);

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

    const onSubmit = async (data) => {
        const dataToSubmit = { ...product, img: images };
        console.log(dataToSubmit);
        // Submit the form
        // Swal.fire({
        //     title: "Error!",
        //     text: e.message,
        //     icon: "error",
        //     confirmButtonText: "OK",
        // });
    };

    return (
        <AdminLayout>
            {isLoading ? (
                <Loading />
            ) : (
                data && (
                    <ProductFormHF
                        title="Edit Product"
                        data={product}
                        imagesData={images}
                        onChangeForm={onChangeForm}
                        onChangeImages={onChangeImages}
                        onClickDeleteImages={onClickDeleteImages}
                        onClickImages={onClickImages}
                        onClickSubmit={onSubmit}
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        handleSubmit={handleSubmit}
                    />
                )
            )}
        </AdminLayout>
    );
};

export default EditProductRHF;
