import Button from "../Elements/Button";

const TopSection = (props) => {
    const { title = "Admin Dashboard", onClick = () => {}, className } = props;
    return (
        <div className="w-full flex justify-between sticky text-white h-20 max-h-20 pt-4 px-16 mb-10 -left-10 bg-[#2a8264]">
            <h1 className="text-white text-3xl text-nowrap font-bold mb-10">
                {title}
            </h1>
            <Button
                className={`bg-transparent text-2xl text-white ${className}`}
                onClick={onClick}
            >
                Logout
            </Button>
        </div>
    );
};

export default TopSection;
