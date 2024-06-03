import SidebarAdmin from "../Fragments/SidebarAdmin";
import TopSection from "../Fragments/TopSection";

const AdminLayout = ({ children, title }) => {
    return (
        <div className="flex w-screen relative overflow-hidden">
            <SidebarAdmin />
            <div className={`w-full overflow-y-auto h-screen`}>
                <TopSection title={title} />
                <div className="p-8 border-2 border-slate-200 rounded-lg mx-7 mb-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
