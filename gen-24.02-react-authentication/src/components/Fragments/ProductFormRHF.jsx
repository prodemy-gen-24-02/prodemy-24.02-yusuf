import { Fragment } from "react";
import { Link } from "react-router-dom";
import InputRhf from "../Elements/Input/Rhf";
import Button from "../Elements/Button/index";

const ProductFormHF = (props) => {
    const {
        title = "Product Form",
        data = {},
        imagesData = [],
        onChangeImages = () => {},
        onChangeForm = () => {},
        onClickSubmit = () => {},
        onClickImages = () => {},
        onClickDeleteImages = () => {},
        register = () => {},
        errors,
        handleSubmit = () => {},
        // setValue = () => {},
    } = props;

    // useEffect(() => {
    //     if (data) {
    //         setValue("nama", data?.nama || "");
    //         setValue("desc", data?.desc || "");
    //         setValue("category", data?.category || "");
    //         setValue("price", data?.price || "");
    //         setValue("star", data?.star || "");
    //         setValue("rating", data?.rating || "");
    //         if (data?.img) {
    //             data.img.forEach((img, index) => {
    //                 setValue(`src${index}`, img.src || "");
    //             });
    //         }
    //     }
    // });

    // console.log(data);

    return (
        <div>
            <h1 className="text-3xl text-emerald-900 font-bold mb-6">
                {title}
            </h1>
            <form onSubmit={handleSubmit(onClickSubmit)}>
                <div className="w-full h-full py-10 grid grid-cols-2 gap-10">
                    <div>
                        <InputRhf
                            label="Product Name"
                            register={register}
                            name="nama"
                            // type="text"
                            onChange={onChangeForm}
                            value={data?.nama || ""}
                        />
                        {errors?.nama && (
                            <p className="text-red-500">
                                {errors?.nama?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <InputRhf
                            label="Product Description"
                            register={register}
                            name="desc"
                            // type="text"
                            onChange={onChangeForm}
                            value={data?.desc || ""}
                        />
                        {errors?.desc && (
                            <p className="text-red-500">
                                {errors?.desc?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <InputRhf
                            label="Product Category"
                            register={register}
                            name="category"
                            // type="text"
                            onChange={onChangeForm}
                            value={data?.category || ""}
                        />
                        {errors?.category && (
                            <p className="text-red-500">
                                {errors?.category?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <InputRhf
                            label="Product Price"
                            register={register}
                            name="price"
                            // type="number"
                            onChange={onChangeForm}
                            value={data?.price || 0}
                        />
                        {errors?.price && (
                            <p className="text-red-500">
                                {errors?.price?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <InputRhf
                            label="Product Star"
                            register={register}
                            name="star"
                            // type="number"
                            onChange={onChangeForm}
                            value={data?.star || 0}
                        />
                        {errors?.star && (
                            <p className="text-red-500">
                                {errors?.star?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <InputRhf
                            label="Product Rating"
                            register={register}
                            name="rating"
                            // type="number"
                            onChange={onChangeForm}
                            value={data?.rating || 0}
                        />
                        {errors?.rating && (
                            <p className="text-red-500">
                                {errors?.rating?.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full h-full py-8 grid grid-cols-2 gap-8 border-2 col-span-2 px-10">
                        <h2 className="text-3xl text-emerald-900 font-bold mb-6 col-span-2">
                            Product Images
                        </h2>
                        {imagesData.map((image, index) => (
                            <Fragment key={index}>
                                <div>
                                    <InputRhf
                                        label={`Product Image Link ${
                                            index + 1
                                        }`}
                                        register={register}
                                        name={`src${index}`}
                                        // type="text"
                                        className="w-full"
                                        onChange={(e) => {
                                            onChangeImages(e, index);
                                        }}
                                        value={imagesData[index]?.src || ""}
                                    />
                                    {errors?.[`src${index}`] && (
                                        <p className="text-red-500">
                                            {errors?.[`src${index}`]?.message}
                                        </p>
                                    )}
                                </div>
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

export default ProductFormHF;
