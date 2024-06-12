import { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import ProductForm from "../components/Fragments/ProductForm";
import AdminLayout from "../components/Layouts/AdminLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProduct } from "../services/axios.service";

const AddProduct = () => {
    const [product, setProduct] = useState({
        nama: "",
        desc: "",
        category: "",
        price: 0,
        star: 0,
        rating: 0,
    });
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
    } = useForm({
        resolver: yupResolver(schema),
    });

    // console.log(product);
    // console.log(images);

    const onClickImages = () => {
        setImages([...images, { src: "" }]);
    };

    const onClickDeleteImages = (index) => {
        if (images.length === 1) {
            return Swal.fire({
                title: "Error!",
                text: "Product must be atleast have 1 Images",
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
    };

    const onChangeImages = (event, index) => {
        const { name, value } = event.target;
        const newImages = [...images];
        newImages[index][name] = value;
        setImages(newImages);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        images.map((img, i) => {
            img.id = i + 1;
        });
        const data = { ...product, img: images };
        try {
            const validation = await schema.validate(data);
            console.log(validation);
            await addProduct(
                import.meta.env.VITE_API_URL + "products",
                validation
            );
            Swal.fire({
                title: "Success!",
                text: "Product has been added",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                window.location.href = "/admin/products";
            });
            // console.log(data);
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
        <AdminLayout title={"Add Product"}>
            <ProductForm
                title="Form Add Product"
                onChangeForm={onChangeForm}
                onChangeImages={onChangeImages}
                data={product}
                imagesData={images}
                onClickDeleteImages={onClickDeleteImages}
                onClickImages={onClickImages}
                onClickSubmit={onSubmit}
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
            />
        </AdminLayout>
    );
};

export default AddProduct;
