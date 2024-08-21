import { Link } from "@inertiajs/react";
import SidebarMenuWithDropDown from "../Components/SidebarMenuWithDropDown";
import SidebarMenu from "@/Components/SidebarMenu";
import SidebarLabel from "@/Components/SidebarLabel";
import getImageUrl from "@/Helper/Helper";

export default function AdminSidebar() {
    return (
        <aside className="left-sidebar">
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <Link href="/admin" className="text-nowrap logo-img">
                        <img
                            src={getImageUrl(
                                "storage/images/logos/dark-logo.svg"
                            )}
                            className="dark-logo"
                            width="180"
                            alt=""
                        />
                        <img
                            src={getImageUrl(
                                "storage/images/logos/light-logo.svg"
                            )}
                            className="light-logo"
                            width="180"
                            alt=""
                            style={{ display: "none" }}
                        />
                    </Link>
                    <div
                        className="close-btn d-lg-none d-block sidebartoggler cursor-pointer"
                        id="sidebarCollapse"
                    >
                        <i className="ti ti-x fs-8 text-muted"></i>
                    </div>
                </div>

                <nav
                    className="sidebar-nav scroll-sidebar"
                    data-simplebar="init"
                >
                    <div
                        className="simplebar-wrapper selected"
                        style={{ margin: "0px -24px" }}
                    >
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"></div>
                        </div>
                        <div className="simplebar-mask selected">
                            <div
                                className="simplebar-offset selected"
                                style={{ right: "0px", bottom: "0px" }}
                            >
                                <div
                                    className="simplebar-content-wrapper selected"
                                    tabIndex="0"
                                    role="region"
                                    aria-label="scrollable content"
                                    style={{
                                        height: "100%",
                                        overflow: "hidden scroll",
                                    }}
                                >
                                    <div
                                        className="simplebar-content selected"
                                        style={{ padding: "0px 24px" }}
                                    >
                                        <ul id="sidebarnav" className="in">
                                            <SidebarLabel name="Dashboard" />

                                            <SidebarMenu
                                                route="/admin"
                                                icon="ti ti-dashboard"
                                            >
                                                Dashboard
                                            </SidebarMenu>

                                            <SidebarLabel name="Site Setting Management" />
                                            <SidebarMenu
                                                route="/admin/site-setting-management"
                                                icon="ti ti-settings"
                                            >
                                                Site Setting
                                            </SidebarMenu>
                                            {/* <SidebarMenuWithDropDown /> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="simplebar-placeholder"
                            style={{ width: "auto", height: "3756px" }}
                        ></div>
                    </div>
                    <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                    >
                        <div
                            className="simplebar-scrollbar"
                            style={{ width: "0px", display: "none" }}
                        ></div>
                    </div>
                    <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "visible" }}
                    >
                        <div
                            className="simplebar-scrollbar"
                            style={{
                                height: "137px",
                                transform: "translate3d(0px, 0px, 0px)",
                                display: "block",
                            }}
                        ></div>
                    </div>
                </nav>
            </div>
        </aside>
    );
}
