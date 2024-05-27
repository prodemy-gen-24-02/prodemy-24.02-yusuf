import { FaHamburger } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="z-[1000] bg-white mx-auto py-4 max-w-full relative">
            <div className="container overflow-visible mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to={"/"}>
                        <img
                            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
                            alt=""
                        />
                    </Link>
                    <nav className="hidden md:flex md:float-right md:relative">
                        <ul className="flex justify-between mb-0 items-center pl-0 list-none">
                            <li className="tracking-wide mx-1 py-1 px-3 text-base font-medium leading-5 flex flex-nowrap border-0 rounded-[10%] hover:bg-slate-100 delay-200">
                                Categories
                                <span className="mt-1 ml-1">
                                    <IoIosArrowDown />
                                </span>
                            </li>
                            <li className="tracking-wide mx-1 py-1 px-3 text-base font-medium leading-5 inline-block border-0 rounded-[10%] hover:bg-slate-100 delay-200">
                                Deals
                            </li>
                            <li className="tracking-wide mx-1 py-1 px-3 text-base font-medium leading-5 inline-block border-0 rounded-[10%] hover:bg-slate-100 delay-200 flex-nowrap">
                                {"What's new"}
                            </li>
                            <li className="tracking-wide mx-1 py-1 px-3 text-base font-medium leading-5 inline-block border-0 rounded-[10%] hover:bg-slate-100 delay-200">
                                Delivery
                            </li>
                        </ul>
                        <div className="flex flex-col justify-center items-center ml-9 relative">
                            <form
                                className="z-1 w-[320px] h-10 max-w-[320px] bg-[#f6f7f8] rounded-full mb-0 relative"
                                action=""
                            >
                                <input
                                    className="w-full h-10 shadow-none border-[1px] border-black rounded-full mb-0 pl-5 pr-12 relative"
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="Search Product"
                                />
                            </form>
                        </div>
                    </nav>
                    <div className="hidden md:flex mx-2">
                        <a
                            className="flex justify-center items-center py-1 px-3 text-lg font-medium delay-200 hover:bg-slate-100 hover:border-0 hover:rounded-[10%]"
                            href=""
                        >
                            Account
                        </a>
                        <a
                            className="flex justify-center items-center py-1 px-3 text-lg font-medium delay-200 hover:bg-slate-100 hover:border-0 hover:rounded-[10%]"
                            href=""
                        >
                            Cart
                        </a>
                    </div>
                    <div className="md:hidden flex">
                        <FaHamburger />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
