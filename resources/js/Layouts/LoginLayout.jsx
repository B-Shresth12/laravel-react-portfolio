import PreLoader from "@/Components/PreLoader";
import { Link } from "@inertiajs/react";

export default function LoginLayout({ children }) {
    return (
        <>
            {/* <PreLoader /> */}
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-layout="vertical"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                {children}
            </div>
        </>
    );
}
