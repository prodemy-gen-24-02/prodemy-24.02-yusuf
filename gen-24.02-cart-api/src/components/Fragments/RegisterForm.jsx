import { useEffect, useRef, useState } from "react";
import { register } from "../../services/auth.service";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
import ButtonLoading from "../Elements/ButtonLoading/Index";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
    const [registerFailed, setRegisterFailed] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        name: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setRegisterFailed("");
        const payload = { ...data };
        payload.role = "USER";
        if (payload.password !== payload.confirmPassword) {
            setRegisterFailed("Password not match");
        } else {
            setRegisterFailed("");

            await register(payload, (status, res) => {
                if (status) {
                    Swal.fire({
                        icon: "success",
                        title: "Register Success",
                        text: "Success Register account",
                    }).then(() => {
                        navigate("/login");
                    });
                } else {
                    setRegisterFailed(res.message);
                }
            });
        }
        setIsLoading(false);
    };

    const onChangeForm = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
    }, []);
    return (
        <form onSubmit={handleRegister}>
            <InputForm
                onChange={onChangeForm}
                label="Email"
                type="email"
                placeholder="example@mail.com"
                name="email"
                ref={emailRef}
            />
            <InputForm
                onChange={onChangeForm}
                label="Name"
                type="name"
                placeholder="John Doe"
                name="name"
            />
            <InputForm
                onChange={onChangeForm}
                label="Password"
                type="password"
                placeholder="********"
                name="password"
            />
            <InputForm
                onChange={onChangeForm}
                label="Confirm Password"
                type="password"
                placeholder="********"
                name="confirmPassword"
            />
            {registerFailed && (
                <p className="text-red-500 text-center mb-5">
                    {registerFailed}
                </p>
            )}
            <Button
                className={`w-full flex justify-center items-center rounded-lg text-white ${
                    isLoading
                        ? "cursor-not-allowed bg-gray-300"
                        : "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
                }`}
                type="submit"
            >
                {isLoading ? <ButtonLoading /> : "Register"}
            </Button>
        </form>
    );
};

export default RegisterForm;
