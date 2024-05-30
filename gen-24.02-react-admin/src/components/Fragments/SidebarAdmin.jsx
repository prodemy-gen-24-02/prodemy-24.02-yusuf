import { Link } from "react-router-dom";

const SidebarAdmin = () => {
    return (
        <div className="h-screen sticky top-0 w-fit max-w-1/4 pt-10 px-8 text-nowrap bg-[#36a580]">
            <div>
                <Link to={"/admin"} className="mb-10">
                    <img
                        src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
                        alt=""
                    />
                </Link>
                <ul className="list-none mt-10">
                    <li className="text-white text-2xl font-semibold mb-5">
                        <Link to={"/admin"}>Dashboard</Link>
                    </li>
                    <li className="text-white text-2xl font-semibold mb-5">
                        <Link to={"/admin/products"}>Product List</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidebarAdmin;
