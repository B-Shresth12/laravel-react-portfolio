import { Link } from "@inertiajs/react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./Partials/AdminHeader";
import PreLoader from "@/Components/PreLoader";
export default function AuthenticatedLayout({ children }) {
    return (
        <>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-theme="blue_theme"
                data-layout="vertical"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                <AdminSidebar />

                <div className="body-wrapper">
                    <AdminHeader />
                    <div className="container-fluid">{children}</div>
                </div>
                <div className="dark-transparent sidebartoggler"></div>
                <div className="dark-transparent sidebartoggler"></div>
            </div>
        </>
    );
}
