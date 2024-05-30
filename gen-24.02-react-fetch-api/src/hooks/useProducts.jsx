import useSWR from "swr";
import { getProducts } from "../services/axios.service";

export const useGetProducts = () => {
    const { data, isLoading, error } = useSWR(
        import.meta.env.VITE_API_URL + "products",
        getProducts,
        {
            refreshInterval: 10000,
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
        () => getProducts()
    );

    return {
        data,
        isLoading,
        error,
    };
};
