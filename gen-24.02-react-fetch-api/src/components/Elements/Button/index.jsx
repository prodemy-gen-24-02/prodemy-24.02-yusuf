const Button = (props) => {
    const {
        children,
        className = "bg-white border-0",
        type = "button",
    } = props;
    return (
        <button
            className={`flex justify-center items-center text-black w-full h-10 text-lg font-bold leading-6 ${className} `}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
