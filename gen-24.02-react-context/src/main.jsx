import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ProductPages from "./Pages/products.jsx";
import "./index.css";
import DetailProduct from "./Pages/detailProducts.jsx";
import ProductAdmin from "./Pages/productAdmin.jsx";
import AddProduct from "./Pages/addProduct.jsx";
import AddProductRHF from "./Pages/addProductRHF.jsx";
import AdminDashboard from "./Pages/adminDashboard.jsx";
import EditProduct from "./Pages/editProduct.jsx";
import { CheckoutProvider } from "./context/CheckoutContext.jsx";
import CheckoutProduct from "./Pages/checkoutProduct.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductPages />,
    },
    {
        path: "/products/details/:id",
        element: (
            <CheckoutProvider>
                <DetailProduct />
            </CheckoutProvider>
        ),
    },
    {
        path: "/products/checkout",
        element: (
            <CheckoutProvider>
                <CheckoutProduct />
            </CheckoutProvider>
        ),
    },
    {
        path: "/admin",
        element: <AdminDashboard />,
    },
    {
        path: "/admin/products",
        element: <ProductAdmin />,
    },
    {
        path: "/admin/products/add",
        element: <AddProduct />,
    },
    {
        path: "/admin/products/:id",
        element: <EditProduct />,
    },
    {
        path: "/admin/products/add/rhf",
        element: <AddProductRHF />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
