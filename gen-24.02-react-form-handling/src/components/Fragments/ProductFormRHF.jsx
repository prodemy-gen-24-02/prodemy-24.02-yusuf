// import InputRhf from "../Elements/Input/Rhf";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Elements/Button/index";
import { Link } from "react-router-dom";
import { Fragment, useEffect } from "react";

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
    } = props;

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
            .min(1, "Product must be atleast have 1 Images"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // console.log(errors);

    useEffect(() => {}, [imagesData]);
    return (
        <div>
            <h1 className="text-3xl text-emerald-900 font-bold mb-6">
                {title}
            </h1>
            <form onSubmit={handleSubmit(onClickSubmit)}>
                <div className="w-full h-full py-10 grid grid-cols-2 gap-10">
                    <div>
                        {/* <InputRhf
                        label="Product Name"
                        rhf={register("nama")}
                        type="text"
                        onChange={onChangeForm}
                        /> */}

                        <label
                            htmlFor="nama"
                            className="block text-slate-800 text-sm font-bold mb-2"
                        >
                            Nama
                        </label>
                        <input
                            className={`text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder:opacity-50 mb-3`}
                            placeholder="nama"
                            {...register("nama")}
                            id="nama"
                            onChange={onChangeForm}
                        />
                        {errors.nama && (
                            <p className="text-red-500">
                                {errors.nama?.message}
                            </p>
                        )}
                    </div>
                    {/* <InputRhf
                        label="Product Description"
                        rhf={register("desc")}
                        type="text"
                        onChange={onChangeForm}
                    /> */}
                    <div>
                        <label
                            htmlFor="desc"
                            className="block text-slate-800 text-sm font-bold mb-2"
                        >
                            Description
                        </label>
                        <input
                            className={`text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder:opacity-50 mb-3`}
                            placeholder="Product Description"
                            {...register("desc")}
                            id="desc"
                            onChange={onChangeForm}
                        />
                        {errors.desc && (
                            <p className="text-red-500">
                                {errors.desc?.message}
                            </p>
                        )}
                    </div>
                    {/* <InputRhf
                        label="Product Category"
                        rhf={register("category")}
                        type="text"
                        onChange={onChangeForm}
                    /> */}
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-slate-800 text-sm font-bold mb-2"
                        >
                            Category
                        </label>
                        <input
                            className={`text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder:opacity-50 mb-3`}
                            placeholder="Product Category"
                            {...register("category")}
                            id="category"
                            onChange={onChangeForm}
                        />
                        {errors.category && (
                            <p className="text-red-500">
                                {errors.category?.message}
                            </p>
                        )}
                    </div>
                    {/* <InputRhf
                        label="Product Price"
                        rhf={register("price")}
                        type="number"
                        onChange={onChangeForm}
                    /> */}
                    <div>
                        <label
                            htmlFor="price"
                            className="block text-slate-800 text-sm font-bold mb-2"
                        >
                            Product Price
                        </label>
                        <input
                            className={`text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder:opacity-50 mb-3`}
                            placeholder="price"
                            {...register("price")}
                            id="price"
                            onChange={onChangeForm}
                        />
                        {errors.price && (
                            <p className="text-red-500">
                                {errors.price?.message}
                            </p>
                        )}
                    </div>
                    {/* <InputRhf
                        label="Product Star"
                        rhf={register("star")}
                        type="number"
                        onChange={onChangeForm}
                    /> */}
                    <div>
                        <label
                            htmlFor="star"
                            className="block text-slate-800 text-sm font-bold mb-2"
                        >
                            Product Star
                        </label>
                        <input
                            className={`text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder:opacity-50 mb-3`}
                            placeholder="star"
                            {...register("star")}
                            id="star"
                            onChange={onChangeForm}
                        />
                        {errors.star && (
                            <p className="text-red-500">
                                {errors.star?.message}
                            </p>
                        )}
                    </div>
                    {/* <InputRhf
                        label="Product Rating"
                        rhf={register("rating")}
                        type="number"
                        onChange={onChangeForm}
                    /> */}
                    <div>
                        <label
                            htmlFor="rating"
                            className="block text-slate-800 text-sm font-bold mb-2"
                        >
                            Product Rating
                        </label>
                        <input
                            className={`text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder:opacity-50 mb-3`}
                            placeholder="rating"
                            {...register("rating")}
                            id="rating"
                            onChange={onChangeForm}
                        />
                        {errors.rating && (
                            <p className="text-red-500">
                                {errors.rating?.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full h-full py-8 grid grid-cols-2 gap-8 border-2 col-span-2 px-10">
                        <h2 className="text-3xl text-emerald-900 font-bold mb-6 col-span-2">
                            Product Images
                        </h2>
                        {imagesData.map((image, index) => (
                            <Fragment key={index}>
                                {/* <InputRhf
                                    label={`Product Image Link ${index + 1}`}
                                    name="src"
                                    type="text"
                                    className="w-full"
                                    onChange={(e) => {
                                        onChangeImages(e, index);
                                    }}
                                /> */}
                                <div>
                                    <label
                                        htmlFor="src"
                                        className="block text-slate-800 text-sm font-bold mb-2"
                                    >
                                        Image Link
                                    </label>
                                    <input
                                        className={`text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder:opacity-50 mb-3`}
                                        placeholder="src"
                                        {...register("src")}
                                        id="src"
                                        onChange={(e) =>
                                            onChangeImages(e, index)
                                        }
                                    />
                                    {errors.src && (
                                        <p className="text-red-500">
                                            {errors.src?.message}
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
