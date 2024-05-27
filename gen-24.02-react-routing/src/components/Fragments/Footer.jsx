const Footer = () => {
    return (
        <div className="grid grid-rows-auto justify-items-center px-5 md:px-20 overflow-hidden -pt-2 md:max-h-[300px]">
            <div className="max-w-full max-h-fit border-t-2 border-color-black pt-5 pb-6 md:px-10 my-5">
                <div className="grid grid-rows-4 md:grid-cols-4 justify-between mx-5 max-h-fit">
                    <div className="grid grid-rows-auto px-2 -mx-3 max-w-full my-3 md:mx-5 justify-start items-start w-fit">
                        <img
                            src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
                            alt=""
                        />
                        <p>
                            Aperiam officia possimus, similique enim maxime
                            architecto facere molestiae deserunt labore ipsam
                            velit odio inventore pariatur excepturi commodi
                            autem reiciendis repellendus animi.
                        </p>
                    </div>
                    <div className="grid grid-rows-auto px-2 -mx-3 max-w-full my-3 md:mx-5 justify-start items-start w-fit">
                        <h2 className="text-xl font-bold">About Us</h2>
                        <ul className="justify-between mb-0 items-center pl-0 list-none grid grid-rows-auto ">
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                About Shopcart
                            </li>
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                Careers
                            </li>
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                News & Blog
                            </li>
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                Help
                            </li>
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                Press Center
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-rows-auto px-2 -mx-3 max-w-full my-3 md:mx-5 justify-start items-start w-fit">
                        <h2 className="text-xl font-bold">Help</h2>
                        <ul className="justify-between mb-0 items-center pl-0 list-none grid grid-rows-auto">
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                Returns
                            </li>
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                Track Orders
                            </li>
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                Contact Us
                            </li>
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                Feedback
                            </li>
                            <li className="text-black mb-0 text-sm font-medium leading-[200%] hover:translate-x-3 hover:text-red-400 duration-200">
                                Security & Fraud
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-rows-auto px-2 -mx-3 max-w-full my-3 md:mx-5 justify-start items-start w-fit">
                        <h2 className="text-xl font-bold">
                            Give Your Feedback
                        </h2>
                        <div className="max-h-28 -mt-6">
                            <form className="mb-4" action="">
                                <input
                                    className="border-2 mb-2 w-full"
                                    type="email"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                />
                                <input
                                    className="border-2 mb-2 w-full"
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="email@example.com"
                                />
                                <textarea
                                    className="border-2 mb-2 w-full"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="2"
                                    placeholder="Type your message here..."
                                ></textarea>
                                <input
                                    className="border-2 rounded-full mb-2 bg-[#1a503e] hover:bg-[#36a580] active:bg-[#36a580] md:duration-200 text-white font-thin w-full"
                                    type="submit"
                                    value="Submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-b-4 border-color-black md:px-10 mb-10 max-h-5"></div>
        </div>
    );
};

export default Footer;
