import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ProductPages from "./Pages/products.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductPages />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
