import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/slice/authSlice";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import ButtonLoading from "../Elements/ButtonLoading/Index";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [loginFailed, setLoginFailed] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    // const [cookies, setCookie] = useCookies();

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const data = {
            email: email,
            password: password,
        };
        setIsLoading(true);

        await login(data, (status, res) => {
            if (status) {
                setLoginFailed("");
                console.log(res);
                dispatch(setToken(res.accessToken));
                dispatch(setUser(res.user));
                res.user.role === "ADMIN" ? navigate("/admin") : navigate("/");
            } else {
                console.log(res);
                setLoginFailed(res.message);
            }
            setIsLoading(false);
        });
    };

    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
    }, []);
    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Email"
                type="text"
                placeholder="example@mail.com"
                name="email"
                ref={emailRef}
            />
            <InputForm
                label="Password"
                type="password"
                placeholder="***********"
                name="password"
            />
            {loginFailed && (
                <p className="text-red-500 text-center mb-5">{loginFailed}</p>
            )}
            <Button
                className={`w-full flex justify-center items-center text-white rounded-lg ${
                    isLoading
                        ? "cursor-not-allowed bg-gray-300"
                        : "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
                }`}
                type="submit"
            >
                {isLoading ? <ButtonLoading /> : "Login"}
            </Button>
        </form>
    );
};

export default LoginForm;
