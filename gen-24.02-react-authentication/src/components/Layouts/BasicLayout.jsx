import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { resetAuthData } from "../../redux/slice/authSlice";

const BasicLayout = ({ children }) => {
    const isLogin = useSelector((state) => state.user.token !== "");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
    });

    const onClickLogout = () => {
        Swal.fire({
            title: "Are you sure to Logout?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log me out!",
            cancelButtonText: "No, stay logged in",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(resetAuthData());
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Logout success",
                });
            }
        });
    };

    return (
        <>
            <Navbar onClickLogout={onClickLogout} />
            {children}
            <Footer />
        </>
    );
};
export default BasicLayout;
