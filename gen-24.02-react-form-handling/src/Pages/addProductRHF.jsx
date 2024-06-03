import { useState } from "react";
import Swal from "sweetalert2";
import AdminLayout from "../components/Layouts/AdminLayout";
import ProductFormHF from "../components/Fragments/ProductFormRHF";

const AddProductRHF = () => {
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([
        {
            src: "",
        },
    ]);

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

    const onClickSubmit = () => {
        if (images[0].src === "") {
            return Swal.fire({
                title: "Error!",
                text: "Product must be atleast have 1 Images",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
        const data = { ...product, img: images };
        console.log(data);
    };

    return (
        <AdminLayout title={"Add Product"}>
            <ProductFormHF
                title="Form Add Product"
                onChangeForm={onChangeForm}
                onChangeImages={onChangeImages}
                imagesData={images}
                onClickDeleteImages={onClickDeleteImages}
                onClickImages={onClickImages}
                onClickSubmit={onClickSubmit}
            />
        </AdminLayout>
    );
};

export default AddProductRHF;
