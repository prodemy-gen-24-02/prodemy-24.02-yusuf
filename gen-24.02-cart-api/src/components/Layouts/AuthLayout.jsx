import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AuthLayout = ({ title, type, children }) => {
    const isLogin = useSelector((state) => state.user.token === "");
    const role = useSelector((state) => state.user.user.role);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            role === "ADMIN" ? navigate("/admin") : navigate("/");
        }
    });

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-emerald-800">
                    {title}
                </h1>
                <p className="font-medium text-slate-600 mb-8">
                    Welcome, Please enter your details
                </p>
                {children}
                <p className="text-sm mt-5 text-center">
                    {type === "login"
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <Link
                        to={type === "login" ? "/register" : "/login"}
                        className="font-bold text-emerald-800"
                    >
                        {type === "login" ? "Register" : "Login"}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default AuthLayout;
