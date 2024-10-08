import { checkCurrentURL } from "@/Helper/Helper";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SidebarMenu({ route, children, icon }) {
    const isActive = checkCurrentURL(route);
    return (
        <li className={`sidebar-item ${isActive ? "selected" : ""}`}>
            <Link
                className={`sidebar-link ${isActive ? "active" : ""}`}
                href={route}
                aria-expanded="false"
            >
                <span>
                    <i className={icon}></i>
                </span>
                <span className="hide-menu">{children}</span>
            </Link>
        </li>
    );
}
