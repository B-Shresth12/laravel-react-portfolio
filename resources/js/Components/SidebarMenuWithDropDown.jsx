import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function SidebarMenuWithDropDown() {
    return (
        <li className="sidebar-item">
            <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false"
            >
                <span className="d-flex">
                    <i className="ti ti-chart-donut-3"></i>
                </span>
                <span className="hide-menu">Blog</span>
            </a>
            <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                    <Link href="./blog-posts.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                            <i className="ti ti-circle"></i>
                        </div>
                        <span className="hide-menu">Posts</span>
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link href="./blog-detail.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                            <i className="ti ti-circle"></i>
                        </div>
                        <span className="hide-menu">Details</span>
                    </Link>
                </li>
            </ul>
        </li>
    );
}
