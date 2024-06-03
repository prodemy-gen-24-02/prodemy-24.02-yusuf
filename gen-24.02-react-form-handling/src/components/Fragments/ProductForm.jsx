import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/index";
import { Link } from "react-router-dom";
import { Fragment, useEffect } from "react";

const ProductForm = (props) => {
    const {
        title = "Product Form",
        data = {},
        imagesData = [],
        onChangeImages = () => {},
        onChangeForm = () => {},
        onClickSubmit = () => {},
        onClickImages = () => {},
        onClickDeleteImages = () => {},
        // errors = [],
    } = props;

    useEffect(() => {}, [imagesData]);
    return (
        <div>
            <h1 className="text-3xl text-emerald-900 font-bold mb-6">
                {title}
            </h1>
            <form onSubmit={onClickSubmit}>
                <div className="w-full h-full py-10 grid grid-cols-2 gap-10">
                    <InputForm
                        label="Product Name"
                        name="nama"
                        type="text"
                        onChange={onChangeForm}
                    />
                    <InputForm
                        label="Product Description"
                        name="desc"
                        type="text"
                        onChange={onChangeForm}
                    />
                    <InputForm
                        label="Product Category"
                        name="category"
                        type="text"
                        onChange={onChangeForm}
                    />
                    <InputForm
                        label="Product Price"
                        name="price"
                        type="number"
                        onChange={onChangeForm}
                    />
                    <InputForm
                        label="Product Star"
                        name="star"
                        type="number"
                        onChange={onChangeForm}
                    />
                    <InputForm
                        label="Product Rating"
                        name="rating"
                        type="number"
                        onChange={onChangeForm}
                    />
                    <div className="w-full h-full py-8 grid grid-cols-2 gap-8 border-2 col-span-2 px-10">
                        <h2 className="text-3xl text-emerald-900 font-bold mb-6 col-span-2">
                            Product Images
                        </h2>
                        {imagesData.map((image, index) => (
                            <Fragment key={index}>
                                <InputForm
                                    label={`Product Image Link ${index + 1}`}
                                    name="src"
                                    type="text"
                                    className="w-full"
                                    onChange={(e) => {
                                        onChangeImages(e, index);
                                    }}
                                />
                                <div className="flex justify-start items-center py-6 w-full">
                                    <Button
                                        className="text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 p-5 rounded-lg mx-2"
                                        onClick={onClickImages}
                                    >
                                        Add More Product Images
                                    </Button>
                                    <Button
                                        className="text-white bg-red-500 hover:bg-red-600 active:bg-red-700 p-5 rounded-lg mx-2"
                                        onClick={() => {
                                            onClickDeleteImages(
                                                imagesData.length - 1
                                            );
                                        }}
                                    >
                                        Delete Product Images
                                    </Button>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <Button
                        type="submit"
                        className="text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 p-5 rounded-lg mx-2"
                    >
                        Save
                    </Button>
                    <Link to="/admin/products" className="w-full">
                        <Button className="text-white bg-gray-600 hover:bg-gray-700 active:bg-gray-800 p-5 rounded-lg mx-2 w-full">
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
