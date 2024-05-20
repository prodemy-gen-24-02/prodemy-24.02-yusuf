import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Button from "../Elements/Button";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="border-0 rounded-xl flex-none relative mr-6 max-w-[310px] inline-block mb-3">
            {children}
        </div>
    );
};

const Header = ({ images }) => {
    return (
        <div className="bg-[#D9D9D9] text-center flex justify-center items-center border-0 rounded-xl overflow-hidden w-[310px] h-[310px]">
            <img
                className="border-0 rounded-lg hover:scale-125 delay-300 transition-all max-w-[310px] max-h-[310px]"
                src={images}
                alt="..."
            />
        </div>
    );
};

const Body = ({ title, children, price, cent, star, rating }) => {
    return (
        <div className="block leading-5 static">
            <div className="flex justify-between items-center">
                <h3 className="mt-4 mb-3 text-lg font-bold">{title}</h3>
                <div className="text-lg font-bold flex">
                    <span className="text-sm relative -top-1">$</span>
                    {price}
                    <span className="text-sm relative -top-1">.{cent}</span>
                </div>
            </div>
            <div className="mb-3 text-xs leading-4">{children}</div>
            <div className="flex items-center leading-4">
                {Array.from({ length: 5 }, (_, i) =>
                    i < star ? (
                        <IoMdStar
                            key={i}
                            className="w-4 mr-1"
                            style={{ color: "#09d913" }}
                        />
                    ) : (
                        <IoMdStarOutline key={i} className="w-4 mr-1" />
                    )
                )}
                <div className="ml-1 md:text-sm font-medium leading-[100%]">
                    ({rating})
                </div>
            </div>
            <div className="inline-block w-full my-5">
                <Button className="bg-white border-[1px] border-black w-full duration-500 active:bg-[#69db71] delay-75 md:hover:bg-[#69db71] md:delay-300">
                    Add to Card
                </Button>
            </div>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
