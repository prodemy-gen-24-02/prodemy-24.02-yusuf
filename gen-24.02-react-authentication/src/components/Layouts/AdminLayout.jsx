import { useDispatch, useSelector } from "react-redux";
import SidebarAdmin from "../Fragments/SidebarAdmin";
import TopSection from "../Fragments/TopSection";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { resetAuthData } from "../../redux/slice/authSlice";
import Swal from "sweetalert2";

const AdminLayout = ({ children, title }) => {
    const isAdmin = useSelector(
        (state) => state.user.user.role === "ADMIN" && state.user.token !== ""
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isAdmin) {
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
        <div className="flex w-screen relative overflow-hidden">
            <SidebarAdmin />
            <div className={`w-full overflow-y-auto h-screen`}>
                <TopSection title={title} onClick={onClickLogout} />
                <div className="p-8 border-2 border-slate-200 rounded-lg mx-7 mb-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
