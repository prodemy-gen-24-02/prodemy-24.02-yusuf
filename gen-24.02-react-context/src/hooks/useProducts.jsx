import useSWR from "swr";
import {
    addProduct,
    editProductById,
    getProducts,
} from "../services/axios.service";

export const useGetProducts = () => {
    const { data, isLoading, error } = useSWR(
        import.meta.env.VITE_API_URL + "products",
        getProducts,
        {
            refreshInterval: 600000,
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    return {
        data,
        isLoading,
        error,
    };
};

export const useGetProductsById = (id) => {
    const { data, isLoading, error } = useSWR(
        `${import.meta.env.VITE_API_URL}products/${id}`,
        getProducts,
        {
            refreshInterval: 600000,
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    return {
        data,
        isLoading,
        error,
    };
};

export const useAddProduct = (payload) => {
    const { data, isLoading, error } = useSWR(
        import.meta.env.VITE_API_URL + "products",
        (url) => addProduct(url, payload)
    );

    return {
        data,
        isLoading,
        error,
    };
};

export const usePutProduct = (id, payload) => {
    const { data, isLoading, error } = useSWR(
        import.meta.env.VITE_API_URL + `products/${id}`,
        (url) => editProductById(url, payload)
    );

    return data, isLoading, error;
};
