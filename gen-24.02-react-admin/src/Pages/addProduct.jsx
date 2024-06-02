import { useState } from "react";
import Swal from "sweetalert2";
import ProductForm from "../components/Fragments/ProductForm";
import AdminLayout from "../components/Layouts/AdminLayout";

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([
        {
            src: "",
        },
    ]);

    console.log(product);
    console.log(images);

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

    return (
        <AdminLayout title={"Add Product"}>
            <ProductForm
                title="Form Add Product"
                onChangeForm={onChangeForm}
                onChangeImages={onChangeImages}
                imagesData={images}
                onClickDeleteImages={onClickDeleteImages}
                onClickImages={onClickImages}
            />
        </AdminLayout>
    );
};

export default AddProduct;
