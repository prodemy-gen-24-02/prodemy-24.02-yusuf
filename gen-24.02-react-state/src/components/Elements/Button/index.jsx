const Button = (props) => {
    const {
        children,
        className = "bg-white border-0",
        type = "button",
    } = props;
    return (
        <button
            className={`${className} flex justify-center items-center text-black rounded-full w-full h-10 text-lg font-bold leading-6`}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
