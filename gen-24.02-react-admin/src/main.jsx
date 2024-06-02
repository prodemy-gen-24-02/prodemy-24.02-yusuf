import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ProductPages from "./Pages/products.jsx";
import "./index.css";
import DetailProduct from "./Pages/detailProducts.jsx";
import ProductAdmin from "./Pages/productAdmin.jsx";
import AddProduct from "./Pages/addProduct.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductPages />,
    },
    {
        path: "/products/details/:id",
        element: <DetailProduct />,
    },
    {
        path: "/admin/products",
        element: <ProductAdmin />,
    },
    {
        path: "/admin/products/add",
        element: <AddProduct />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
