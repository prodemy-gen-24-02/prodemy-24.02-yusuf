import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";

const BasicLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};
export default BasicLayout;
