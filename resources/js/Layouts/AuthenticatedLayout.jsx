import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function AuthenticatedLayout({ children }) {
    return (
        <>
            <h1>test</h1>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-theme="blue_theme"
                data-layout="vertical"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                <aside className="left-sidebar">
                    <div>
                        <div className="brand-logo d-flex align-items-center justify-content-between">
                            <Link
                                href="./index.html"
                                className="text-nowrap logo-img"
                            >
                                <img
                                    src="../assets/images/logos/dark-logo.svg"
                                    className="dark-logo"
                                    width="180"
                                    alt=""
                                />
                                <img
                                    src="../assets/images/logos/light-logo.svg"
                                    className="light-logo"
                                    width="180"
                                    alt=""
                                    style={{display: "none"}}
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
                                style={{margin:  "0px -24px"}}
                            >
                                <div className="simplebar-height-auto-observer-wrapper">
                                    <div className="simplebar-height-auto-observer"></div>
                                </div>
                                <div className="simplebar-mask selected">
                                    <div
                                        className="simplebar-offset selected"
                                        style={{right: "0px", bottom: "0px"}}
                                    >
                                        <div
                                            className="simplebar-content-wrapper selected"
                                            tabIndex="0"
                                            role="region"
                                            aria-label="scrollable content"
                                            style={{height: "100%", overflow: "hidden scroll"}}
                                        >
                                            <div
                                                className="simplebar-content selected"
                                                style={{padding: "0px 24px"}}
                                            >
                                                <ul
                                                    id="sidebarnav"
                                                    className="in"
                                                >
                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            Home
                                                        </span>
                                                    </li>

                                                    <li className="sidebar-item selected">
                                                        <Link
                                                            className="sidebar-link active"
                                                            href="./index.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-aperture"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Modern
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./index2.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-shopping-cart"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                eCommerce
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./index3.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-currency-dollar"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                NFT
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./index4.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-cpu"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Crypto
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./index5.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-activity-heartbeat"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                General
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./index6.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-playlist"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Music
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            Apps
                                                        </span>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./app-calendar.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-calendar"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Calendar
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./apps-kanban.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-layout-kanban"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Kanban
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./app-chat.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-message-dots"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Chat
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./app-email.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-mail"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Email
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./app-notes.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-notes"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Notes
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./app-contact.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-phone"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Contact Table
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./app-contact2.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-list-details"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Contact List
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./app-invoice.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-file-text"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Invoice
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./page-user-profile.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-user-circle"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                User Profile
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-chart-donut-3"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Blog
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./blog-posts.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Posts
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./blog-detail.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Details
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-basket"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Ecommerce
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./eco-shop.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Shop
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./eco-shop-detail.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Details
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./eco-product-list.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        List
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./eco-checkout.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Checkout
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            PAGES
                                                        </span>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./page-pricing.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-currency-dollar"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Pricing
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./page-faq.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-help"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                FAQ
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./page-account-settings.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-user-circle"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Account Setting
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="../../../landingpage/index.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span>
                                                                <i className="ti ti-app-window"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Landing Page
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-layout"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Widgets
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./widgets-cards.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Cards
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./widgets-banners.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Banner
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./widgets-charts.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Charts
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./widgets-feeds.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Feed
                                                                        Widgets
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./widgets-apps.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Apps
                                                                        Widgets
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./widgets-data.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Data
                                                                        Widgets
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            UI
                                                        </span>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-layout-grid"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                UI Elements
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-accordian.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Accordian
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-badge.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Badge
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-buttons.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Buttons
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-dropdowns.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Dropdowns
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-modals.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Modals
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-tab.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Tab
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-tooltip-popover.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Tooltip
                                                                        &amp;
                                                                        Popover
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-notification.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Notification
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-progressbar.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Progressbar
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-pagination.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Pagination
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-typography.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Typography
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-bootstrap-ui.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Bootstrap
                                                                        UI
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-breadcrumb.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Breadcrumb
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-offcanvas.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Offcanvas
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-lists.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Lists
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-grid.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Grid
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-carousel.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Carousel
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-scrollspy.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Scrollspy
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-spinner.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Spinner
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item mb-3">
                                                                <Link
                                                                    href="./ui-link.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Link
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-cards"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Cards
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-cards.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Basic
                                                                        Cards
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-card-customs.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Custom
                                                                        Cards
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-card-weather.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Weather
                                                                        Cards
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./ui-card-draggable.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Draggable
                                                                        Cards
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-components"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Component
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./component-sweetalert.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Sweet
                                                                        Alert
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./component-nestable.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Nestable
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./component-noui-slider.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Noui
                                                                        slider
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./component-rating.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Rating
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./component-toastr.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Toastr
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            Forms
                                                        </span>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-file-text"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Elements
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-inputs.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Forms
                                                                        Input
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-input-groups.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Input
                                                                        Groups
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-input-grid.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Input
                                                                        Grid
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-checkbox-radio.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Checkbox
                                                                        &amp;
                                                                        Radios
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-bootstrap-touchspin.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Bootstrap
                                                                        Touchspin
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-bootstrap-switch.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Bootstrap
                                                                        Switch
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-select2.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Select2
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item mb-3">
                                                                <Link
                                                                    href="./form-dual-listbox.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Dual
                                                                        Listbox
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-qrcode"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Addons
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-paginator.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Paginator
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-img-cropper.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Image
                                                                        Cropper
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-dropzone.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Dropzone
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-mask.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Form
                                                                        Mask
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-typeahead.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Form
                                                                        Typehead
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-alert-circle"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Validation
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-bootstrap-validation.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Bootstrap
                                                                        Validation
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-custom-validation.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Custom
                                                                        Validation
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-file-pencil"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Pickers
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-picker-colorpicker.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Colorpicker
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-picker-datetimepicker.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Datetimepicker
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-picker-bootstrap-rangepicker.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Bootstrap
                                                                        Rangepicker
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-picker-bootstrap-datepicker.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Bootstrap
                                                                        Datepicker
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-picker-material-datepicker.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Material
                                                                        Datepicker
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-dna"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Editor
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-editor-ckeditor.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Ck
                                                                        Editor
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-editor-quill.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Quill
                                                                        Editor
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-editor-summernote.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Summernote
                                                                        Editor
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./form-editor-tinymce.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Tinymce
                                                                        Edtor
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-basic.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-archive"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Basic Form
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-vertical.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-box-align-left"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Vertical
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-horizontal.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-box-align-bottom"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Horizontal
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-actions.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-file-export"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Actions
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-row-separator.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-separator-horizontal"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Row Separator
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-bordered.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-border-outer"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Bordered
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-detail.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-file-description"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Detail
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-striped-row.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-file-analytics"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Striped Rows
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-floating-input.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-file-dots"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Floating
                                                                Input
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-wizard.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-files"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Wizard
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./form-repeater.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-topology-star-3"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Form Repeater
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            Tables
                                                        </span>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-layout-sidebar"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Bootstrap Table
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./table-basic.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Basic
                                                                        Table
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./table-dark-basic.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Dark
                                                                        Basic
                                                                        Table
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./table-sizing.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Sizing
                                                                        Table
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item mb-3">
                                                                <Link
                                                                    href="./table-layout-coloured.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Coloured
                                                                        Table
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-air-conditioning-disabled"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Datatables
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./table-datatable-basic.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Basic
                                                                        Initialisation
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./table-datatable-api.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        API
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./table-datatable-advanced.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Advanced
                                                                        Initialisation
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./table-jsgrid.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-border-top"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Table Jsgrid
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./table-responsive.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-border-style"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Table Responsive
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./table-footable.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-border-none"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Table Footable
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./table-editable.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-table-filled"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Table Editable
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="./table-bootstrap.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-border-outer"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Table Bootstrap
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            Charts
                                                        </span>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-chart-pie"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Apex Charts
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./chart-apex-line.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Line
                                                                        Chart
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./chart-apex-area.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Area
                                                                        Chart
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./chart-apex-bar.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Bar
                                                                        Chart
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./chart-apex-pie.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Pie
                                                                        Chart
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./chart-apex-radial.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Radial
                                                                        Chart
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item mb-3">
                                                                <Link
                                                                    href="./chart-apex-radar.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Radar
                                                                        Chart
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            Sample Pages
                                                        </span>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-file"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Sample Pages
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./pages-animation.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Animation
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./pages-search-result.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Search
                                                                        Result
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./pages-gallery.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Gallery
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./pages-treeview.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Treeview
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./pages-block-ui.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Block-Ui
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item mb-3">
                                                                <Link
                                                                    href="./pages-session-timeout.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Session
                                                                        Timeout
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            Icons
                                                        </span>
                                                    </li>

                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link sidebar-link"
                                                            href="./icon-tabler.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="rounded-3">
                                                                <i className="ti ti-archive"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Tabler Icon
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            AUTH
                                                        </span>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link sidebar-link"
                                                            href="./authentication-error.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="rounded-3">
                                                                <i className="ti ti-alert-circle"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Error
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-login"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Login
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./authentication-login.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Side
                                                                        Login
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./authentication-login2.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Boxed
                                                                        Login
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-user-plus"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Register
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./authentication-register.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Side
                                                                        Register
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./authentication-register2.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Boxed
                                                                        Register
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-rotate"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Forgot Password
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./authentication-forgot-password.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Side
                                                                        Forgot
                                                                        Password
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./authentication-forgot-password2.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Boxed
                                                                        Forgot
                                                                        Password
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-zoom-code"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Two Steps
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./authentication-two-steps.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Side Two
                                                                        Steps
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./authentication-two-steps2.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Boxed
                                                                        Two
                                                                        Steps
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link sidebar-link"
                                                            href="./authentication-maintenance.html"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="rounded-3">
                                                                <i className="ti ti-settings"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Maintenance
                                                            </span>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-small-cap">
                                                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                                        <span className="hide-menu">
                                                            OTHER
                                                        </span>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link has-arrow"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-box-multiple"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Menu Level
                                                            </span>
                                                        </Link>
                                                        <ul
                                                            aria-expanded="false"
                                                            className="collapse first-level"
                                                        >
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    href="./chart-apex-line.html"
                                                                    className="sidebar-link"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Level 1
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="sidebar-item">
                                                                <Link
                                                                    className="sidebar-link has-arrow"
                                                                    href="#"
                                                                    aria-expanded="false"
                                                                >
                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                        <i className="ti ti-circle"></i>
                                                                    </div>
                                                                    <span className="hide-menu">
                                                                        Level
                                                                        1.1
                                                                    </span>
                                                                </Link>
                                                                <ul
                                                                    aria-expanded="false"
                                                                    className="collapse two-level"
                                                                >
                                                                    <li className="sidebar-item">
                                                                        <Link
                                                                            href="./chart-apex-line.html"
                                                                            className="sidebar-link"
                                                                        >
                                                                            <div className="round-16 d-flex align-items-center justify-content-center">
                                                                                <i className="ti ti-circle"></i>
                                                                            </div>
                                                                            <span className="hide-menu">
                                                                                Level
                                                                                2
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="sidebar-item">
                                                                        <Link
                                                                            className="sidebar-link has-arrow"
                                                                            href="#"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <div className="round-16 d-flex align-items-center justify-content-center">
                                                                                <i className="ti ti-circle"></i>
                                                                            </div>
                                                                            <span className="hide-menu">
                                                                                Level
                                                                                2.1
                                                                            </span>
                                                                        </Link>
                                                                        <ul
                                                                            aria-expanded="false"
                                                                            className="collapse three-level"
                                                                        >
                                                                            <li className="sidebar-item">
                                                                                <Link
                                                                                    href="./chart-apex-line.html"
                                                                                    className="sidebar-link"
                                                                                >
                                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                                        <i className="ti ti-circle"></i>
                                                                                    </div>
                                                                                    <span className="hide-menu">
                                                                                        Level
                                                                                        3
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                            <li className="sidebar-item">
                                                                                <Link
                                                                                    href="./chart-apex-area.html"
                                                                                    className="sidebar-link"
                                                                                >
                                                                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                                                                        <i className="ti ti-circle"></i>
                                                                                    </div>
                                                                                    <span className="hide-menu">
                                                                                        Level
                                                                                        3.1
                                                                                    </span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link link-disabled"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-ban"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                Disabled
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-star"></i>
                                                            </span>
                                                            <div className="lh-base">
                                                                <span className="hide-menu">
                                                                    SubCaption
                                                                </span>
                                                                <span className="hide-menu fs-2">
                                                                    This is the
                                                                    sutitle
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link justify-content-between"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="d-flex">
                                                                    <i className="ti ti-award"></i>
                                                                </span>
                                                                <span className="hide-menu">
                                                                    Chip
                                                                </span>
                                                            </div>
                                                            <div className="hide-menu">
                                                                <span className="badge rounded-circle bg-primary d-flex align-items-center justify-content-center round-20 p-0">
                                                                    9
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link justify-content-between"
                                                            href="#"
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="d-flex">
                                                                    <i className="ti ti-mood-smile"></i>
                                                                </span>
                                                                <span className="hide-menu">
                                                                    Outlined
                                                                </span>
                                                            </div>
                                                            <span className="hide-menu badge rounded-pill border border-primary text-primary fs-2 py-1 px-2">
                                                                Outline
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="sidebar-item">
                                                        <Link
                                                            className="sidebar-link"
                                                            href="https://google.com"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="d-flex">
                                                                <i className="ti ti-star"></i>
                                                            </span>
                                                            <span className="hide-menu">
                                                                External Link
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="unlimited-access hide-menu bg-light-primary position-relative my-7 rounded">
                                                    <div className="d-flex">
                                                        <div className="unlimited-access-title">
                                                            <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                                                                Unlimited Access
                                                            </h6>
                                                            <button className="btn btn-primary fs-2 fw-semibold lh-sm">
                                                                Signup
                                                            </button>
                                                        </div>
                                                        <div className="unlimited-access-img">
                                                            <img
                                                                src="../assets/images/backgrounds/rocket.png"
                                                                alt=""
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="simplebar-placeholder"
                                    style={{width: "auto", height: "3756px"}}
                                ></div>
                            </div>
                            <div
                                className="simplebar-track simplebar-horizontal"
                                style={{visibility: "hidden"}}
                            >
                                <div
                                    className="simplebar-scrollbar"
                                    style={{width: "0px", display: "none"}}
                                ></div>
                            </div>
                            <div
                                className="simplebar-track simplebar-vertical"
                                style={{visibility: "visible"}}
                            >
                                <div
                                    className="simplebar-scrollbar"
                                    style={{height: "137px", transform: "translate3d(0px, 0px, 0px)", display: "block"}}
                                ></div>
                            </div>
                        </nav>
                        <div className="fixed-profile p-3 bg-light-secondary rounded sidebar-ad mt-3">
                            <div className="hstack gap-3">
                                <div className="john-img">
                                    <img
                                        src="../assets/images/profile/user-1.jpg"
                                        className="rounded-circle"
                                        width="40"
                                        height="40"
                                        alt=""
                                    />
                                </div>
                                <div className="john-title">
                                    <h6 className="mb-0 fs-4 fw-semibold">
                                        Mathew
                                    </h6>
                                    <span className="fs-2 text-dark">
                                        Designer
                                    </span>
                                </div>
                                <button
                                    className="border-0 bg-transparent text-primary ms-auto"
                                    tabIndex="0"
                                    type="button"
                                    aria-label="logout"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="logout"
                                >
                                    <i className="ti ti-power fs-6"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="body-wrapper">
                    <header className="app-header">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link sidebartoggler nav-icon-hover ms-n3"
                                        id="headerCollapse"
                                        href="javascript:void(0)"
                                    >
                                        <i className="ti ti-menu-2"></i>
                                    </Link>
                                </li>
                                <li className="nav-item d-none d-lg-block">
                                    <Link
                                        className="nav-link nav-icon-hover"
                                        href="javascript:void(0)"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        <i className="ti ti-search"></i>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav quick-links d-none d-lg-flex">
                                <li className="nav-item dropdown hover-dd d-none d-lg-block">
                                    <Link
                                        className="nav-link"
                                        href="javascript:void(0)"
                                        data-bs-toggle="dropdown"
                                    >
                                        Apps
                                        <span className="mt-1">
                                            <i className="ti ti-chevron-down"></i>
                                        </span>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className=" ps-7 pt-7">
                                                    <div className="border-bottom">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="position-relative">
                                                                    <Link
                                                                        href="./app-chat.html"
                                                                        className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                    >
                                                                        <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                src="../assets/images/svgs/icon-dd-chat.svg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                                width="24"
                                                                                height="24"
                                                                            />
                                                                        </div>
                                                                        <div className="d-inline-block">
                                                                            <h6 className="mb-1 fw-semibold bg-hover-primary">
                                                                                Chat
                                                                                Application
                                                                            </h6>
                                                                            <span className="fs-2 d-block text-dark">
                                                                                New
                                                                                messages
                                                                                arrived
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <Link
                                                                        href="./app-invoice.html"
                                                                        className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                    >
                                                                        <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                src="../assets/images/svgs/icon-dd-invoice.svg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                                width="24"
                                                                                height="24"
                                                                            />
                                                                        </div>
                                                                        <div className="d-inline-block">
                                                                            <h6 className="mb-1 fw-semibold bg-hover-primary">
                                                                                Invoice
                                                                                App
                                                                            </h6>
                                                                            <span className="fs-2 d-block text-dark">
                                                                                Get
                                                                                latest
                                                                                invoice
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <Link
                                                                        href="./app-contact2.html"
                                                                        className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                    >
                                                                        <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                src="../assets/images/svgs/icon-dd-mobile.svg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                                width="24"
                                                                                height="24"
                                                                            />
                                                                        </div>
                                                                        <div className="d-inline-block">
                                                                            <h6 className="mb-1 fw-semibold bg-hover-primary">
                                                                                Contact
                                                                                Application
                                                                            </h6>
                                                                            <span className="fs-2 d-block text-dark">
                                                                                2
                                                                                Unsaved
                                                                                Contacts
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <Link
                                                                        href="./app-email.html"
                                                                        className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                    >
                                                                        <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                src="../assets/images/svgs/icon-dd-message-box.svg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                                width="24"
                                                                                height="24"
                                                                            />
                                                                        </div>
                                                                        <div className="d-inline-block">
                                                                            <h6 className="mb-1 fw-semibold bg-hover-primary">
                                                                                Email
                                                                                App
                                                                            </h6>
                                                                            <span className="fs-2 d-block text-dark">
                                                                                Get
                                                                                new
                                                                                emails
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="position-relative">
                                                                    <Link
                                                                        href="./page-user-profile.html"
                                                                        className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                    >
                                                                        <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                src="../assets/images/svgs/icon-dd-cart.svg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                                width="24"
                                                                                height="24"
                                                                            />
                                                                        </div>
                                                                        <div className="d-inline-block">
                                                                            <h6 className="mb-1 fw-semibold bg-hover-primary">
                                                                                User
                                                                                Profile
                                                                            </h6>
                                                                            <span className="fs-2 d-block text-dark">
                                                                                learn
                                                                                more
                                                                                information
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <Link
                                                                        href="./app-calendar.html"
                                                                        className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                    >
                                                                        <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                src="../assets/images/svgs/icon-dd-date.svg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                                width="24"
                                                                                height="24"
                                                                            />
                                                                        </div>
                                                                        <div className="d-inline-block">
                                                                            <h6 className="mb-1 fw-semibold bg-hover-primary">
                                                                                Calendar
                                                                                App
                                                                            </h6>
                                                                            <span className="fs-2 d-block text-dark">
                                                                                Get
                                                                                dates
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <Link
                                                                        href="./app-contact.html"
                                                                        className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                    >
                                                                        <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                src="../assets/images/svgs/icon-dd-lifebuoy.svg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                                width="24"
                                                                                height="24"
                                                                            />
                                                                        </div>
                                                                        <div className="d-inline-block">
                                                                            <h6 className="mb-1 fw-semibold bg-hover-primary">
                                                                                Contact
                                                                                List
                                                                                Table
                                                                            </h6>
                                                                            <span className="fs-2 d-block text-dark">
                                                                                Add
                                                                                new
                                                                                contact
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                    <Link
                                                                        href="./app-notes.html"
                                                                        className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                    >
                                                                        <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                src="../assets/images/svgs/icon-dd-application.svg"
                                                                                alt=""
                                                                                className="img-fluid"
                                                                                width="24"
                                                                                height="24"
                                                                            />
                                                                        </div>
                                                                        <div className="d-inline-block">
                                                                            <h6 className="mb-1 fw-semibold bg-hover-primary">
                                                                                Notes
                                                                                Application
                                                                            </h6>
                                                                            <span className="fs-2 d-block text-dark">
                                                                                To-do
                                                                                and
                                                                                Daily
                                                                                tasks
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center py-3">
                                                        <div className="col-8">
                                                            <Link
                                                                className="fw-semibold text-dark d-flex align-items-center lh-1 text-decoration-none"
                                                                href="#"
                                                            >
                                                                <i className="ti ti-help fs-6 me-2"></i>
                                                                Frequently Asked
                                                                Questions
                                                            </Link>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="d-flex justify-content-end pe-4">
                                                                <button className="btn btn-primary">
                                                                    Check
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 ms-n4">
                                                <div className="position-relative p-7 border-start h-100">
                                                    <h5 className="fs-5 mb-9 fw-semibold">
                                                        Quick Links
                                                    </h5>
                                                    <ul className="">
                                                        <li className="mb-3">
                                                            <Link
                                                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                href="./page-pricing.html"
                                                            >
                                                                Pricing Page
                                                            </Link>
                                                        </li>
                                                        <li className="mb-3">
                                                            <Link
                                                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                href="./authentication-login.html"
                                                            >
                                                                Authentication
                                                                Design
                                                            </Link>
                                                        </li>
                                                        <li className="mb-3">
                                                            <Link
                                                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                href="./authentication-register.html"
                                                            >
                                                                Register Now
                                                            </Link>
                                                        </li>
                                                        <li className="mb-3">
                                                            <Link
                                                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                href="authentication-error.html"
                                                            >
                                                                404 Error Page
                                                            </Link>
                                                        </li>
                                                        <li className="mb-3">
                                                            <Link
                                                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                href="./app-notes.html"
                                                            >
                                                                Notes App
                                                            </Link>
                                                        </li>
                                                        <li className="mb-3">
                                                            <Link
                                                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                href="./page-user-profile.html"
                                                            >
                                                                User Application
                                                            </Link>
                                                        </li>
                                                        <li className="mb-3">
                                                            <Link
                                                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                                                href="./page-account-settings.html"
                                                            >
                                                                Account Settings
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown-hover d-none d-lg-block">
                                    <Link
                                        className="nav-link"
                                        href="app-chat.html"
                                    >
                                        Chat
                                    </Link>
                                </li>
                                <li className="nav-item dropdown-hover d-none d-lg-block">
                                    <Link
                                        className="nav-link"
                                        href="app-calendar.html"
                                    >
                                        Calendar
                                    </Link>
                                </li>
                                <li className="nav-item dropdown-hover d-none d-lg-block">
                                    <Link
                                        className="nav-link"
                                        href="app-email.html"
                                    >
                                        Email
                                    </Link>
                                </li>
                            </ul>
                            <div className="d-block d-lg-none">
                                <img
                                    src="../assets/images/logos/dark-logo.svg"
                                    className="dark-logo"
                                    width="180"
                                    alt=""
                                />
                                <img
                                    src="../assets/images/logos/light-logo.svg"
                                    className="light-logo"
                                    width="180"
                                    alt=""
                                    style={{display: "none"}}
                                />
                            </div>
                            <button
                                className="navbar-toggler p-0 border-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="p-2">
                                    <i className="ti ti-dots fs-7"></i>
                                </span>
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-end"
                                id="navbarNav"
                            >
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link
                                        href="javascript:void(0)"
                                        className="nav-link d-flex d-lg-none align-items-center justify-content-center"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#mobilenavbar"
                                        aria-controls="offcanvasWithBothOptions"
                                    >
                                        <i className="ti ti-align-justified fs-7"></i>
                                    </Link>
                                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                                        <li className="nav-item dropdown">
                                            <Link
                                                className="nav-link nav-icon-hover"
                                                href="javascript:void(0)"
                                                id="drop2"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <img
                                                    src="../assets/images/svgs/icon-flag-en.svg"
                                                    alt=""
                                                    className="rounded-circle object-fit-cover round-20"
                                                />
                                            </Link>
                                            <div
                                                className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                                                aria-labelledby="drop2"
                                            >
                                                <div
                                                    className="message-body"
                                                    data-simplebar="init"
                                                >
                                                    <div
                                                        className="simplebar-wrapper"
                                                        style={{margin: "0px"}}
                                                    >
                                                        <div className="simplebar-height-auto-observer-wrapper">
                                                            <div className="simplebar-height-auto-observer"></div>
                                                        </div>
                                                        <div className="simplebar-mask">
                                                            <div
                                                                className="simplebar-offset"
                                                                style={{right: "0px", bottom: "0px"}}
                                                            >
                                                                <div
                                                                    className="simplebar-content-wrapper"
                                                                    tabIndex="0"
                                                                    role="region"
                                                                    aria-label="scrollable content"
                                                                    style={{height: "auto", overflow: "hidden"}}
                                                                >
                                                                    <div
                                                                        className="simplebar-content"
                                                                        style={{padding: "0px"}}
                                                                    >
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                                                                        >
                                                                            <div className="position-relative">
                                                                                <img
                                                                                    src="../assets/images/svgs/icon-flag-en.svg"
                                                                                    alt=""
                                                                                    className="rounded-circle object-fit-cover round-20"
                                                                                />
                                                                            </div>
                                                                            <p className="mb-0 fs-3">
                                                                                English
                                                                                (UK)
                                                                            </p>
                                                                        </Link>
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                                                                        >
                                                                            <div className="position-relative">
                                                                                <img
                                                                                    src="../assets/images/svgs/icon-flag-cn.svg"
                                                                                    alt=""
                                                                                    className="rounded-circle object-fit-cover round-20"
                                                                                />
                                                                            </div>
                                                                            <p className="mb-0 fs-3">
                                                                                中国人
                                                                                (Chinese)
                                                                            </p>
                                                                        </Link>
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                                                                        >
                                                                            <div className="position-relative">
                                                                                <img
                                                                                    src="../assets/images/svgs/icon-flag-fr.svg"
                                                                                    alt=""
                                                                                    className="rounded-circle object-fit-cover round-20"
                                                                                />
                                                                            </div>
                                                                            <p className="mb-0 fs-3">
                                                                                français
                                                                                (French)
                                                                            </p>
                                                                        </Link>
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                                                                        >
                                                                            <div className="position-relative">
                                                                                <img
                                                                                    src="../assets/images/svgs/icon-flag-sa.svg"
                                                                                    alt=""
                                                                                    className="rounded-circle object-fit-cover round-20"
                                                                                />
                                                                            </div>
                                                                            <p className="mb-0 fs-3">
                                                                                عربي
                                                                                (Arabic)
                                                                            </p>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="simplebar-placeholder"
                                                            style={{width: "0px", height: "0px"}}
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="simplebar-track simplebar-horizontal"
                                                        style={{visibility: "hidden"}}
                                                    >
                                                        <div
                                                            className="simplebar-scrollbar"
                                                            style={{width: "0px", display: "none"}}
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="simplebar-track simplebar-vertical"
                                                        style={{visibility: "hidden"}}
                                                    >
                                                        <div
                                                            className="simplebar-scrollbar"
                                                            style={{height: "0px", display: "none"}}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link notify-badge nav-icon-hover"
                                                href="javascript:void(0)"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasRight"
                                                aria-controls="offcanvasRight"
                                            >
                                                <i className="ti ti-basket"></i>
                                                <span className="badge rounded-pill bg-danger fs-2">
                                                    2
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link
                                                className="nav-link nav-icon-hover"
                                                href="javascript:void(0)"
                                                id="drop2"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-bell-ringing"></i>
                                                <div className="notification bg-primary rounded-circle"></div>
                                            </Link>
                                            <div
                                                className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                                                aria-labelledby="drop2"
                                            >
                                                <div className="d-flex align-items-center justify-content-between py-3 px-7">
                                                    <h5 className="mb-0 fs-5 fw-semibold">
                                                        Notifications
                                                    </h5>
                                                    <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">
                                                        5 new
                                                    </span>
                                                </div>
                                                <div
                                                    className="message-body"
                                                    data-simplebar="init"
                                                >
                                                    <div
                                                        className="simplebar-wrapper"
                                                        style={{margin: "0px"}}
                                                    >
                                                        <div className="simplebar-height-auto-observer-wrapper">
                                                            <div className="simplebar-height-auto-observer"></div>
                                                        </div>
                                                        <div className="simplebar-mask">
                                                            <div
                                                                className="simplebar-offset"
                                                                style={{right: "0px", bottom: "0px"}}
                                                            >
                                                                <div
                                                                    className="simplebar-content-wrapper"
                                                                    tabIndex="0"
                                                                    role="region"
                                                                    aria-label="scrollable content"
                                                                    style={{height: "auto", overflow: "hidden"}}
                                                                >
                                                                    <div
                                                                        className="simplebar-content"
                                                                        style={{padding: "0px"}}
                                                                    >
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                                                                        >
                                                                            <span className="me-3">
                                                                                <img
                                                                                    src="../assets/images/profile/user-1.jpg"
                                                                                    alt="user"
                                                                                    className="rounded-circle"
                                                                                    width="48"
                                                                                    height="48"
                                                                                />
                                                                            </span>
                                                                            <div className="w-75 d-inline-block v-middle">
                                                                                <h6 className="mb-1 fw-semibold">
                                                                                    Roman
                                                                                    Joined
                                                                                    the
                                                                                    Team!
                                                                                </h6>
                                                                                <span className="d-block">
                                                                                    Congratulate
                                                                                    him
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                                                                        >
                                                                            <span className="me-3">
                                                                                <img
                                                                                    src="../assets/images/profile/user-2.jpg"
                                                                                    alt="user"
                                                                                    className="rounded-circle"
                                                                                    width="48"
                                                                                    height="48"
                                                                                />
                                                                            </span>
                                                                            <div className="w-75 d-inline-block v-middle">
                                                                                <h6 className="mb-1 fw-semibold">
                                                                                    New
                                                                                    message
                                                                                </h6>
                                                                                <span className="d-block">
                                                                                    Salma
                                                                                    sent
                                                                                    you
                                                                                    new
                                                                                    message
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                                                                        >
                                                                            <span className="me-3">
                                                                                <img
                                                                                    src="../assets/images/profile/user-3.jpg"
                                                                                    alt="user"
                                                                                    className="rounded-circle"
                                                                                    width="48"
                                                                                    height="48"
                                                                                />
                                                                            </span>
                                                                            <div className="w-75 d-inline-block v-middle">
                                                                                <h6 className="mb-1 fw-semibold">
                                                                                    Bianca
                                                                                    sent
                                                                                    payment
                                                                                </h6>
                                                                                <span className="d-block">
                                                                                    Check
                                                                                    your
                                                                                    earnings
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                                                                        >
                                                                            <span className="me-3">
                                                                                <img
                                                                                    src="../assets/images/profile/user-4.jpg"
                                                                                    alt="user"
                                                                                    className="rounded-circle"
                                                                                    width="48"
                                                                                    height="48"
                                                                                />
                                                                            </span>
                                                                            <div className="w-75 d-inline-block v-middle">
                                                                                <h6 className="mb-1 fw-semibold">
                                                                                    Jolly
                                                                                    completed
                                                                                    tasks
                                                                                </h6>
                                                                                <span className="d-block">
                                                                                    Assign
                                                                                    her
                                                                                    new
                                                                                    tasks
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                                                                        >
                                                                            <span className="me-3">
                                                                                <img
                                                                                    src="../assets/images/profile/user-5.jpg"
                                                                                    alt="user"
                                                                                    className="rounded-circle"
                                                                                    width="48"
                                                                                    height="48"
                                                                                />
                                                                            </span>
                                                                            <div className="w-75 d-inline-block v-middle">
                                                                                <h6 className="mb-1 fw-semibold">
                                                                                    John
                                                                                    received
                                                                                    payment
                                                                                </h6>
                                                                                <span className="d-block">
                                                                                    $230
                                                                                    deducted
                                                                                    from
                                                                                    account
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link
                                                                            href="javascript:void(0)"
                                                                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                                                                        >
                                                                            <span className="me-3">
                                                                                <img
                                                                                    src="../assets/images/profile/user-1.jpg"
                                                                                    alt="user"
                                                                                    className="rounded-circle"
                                                                                    width="48"
                                                                                    height="48"
                                                                                />
                                                                            </span>
                                                                            <div className="w-75 d-inline-block v-middle">
                                                                                <h6 className="mb-1 fw-semibold">
                                                                                    Roman
                                                                                    Joined
                                                                                    the
                                                                                    Team!
                                                                                </h6>
                                                                                <span className="d-block">
                                                                                    Congratulate
                                                                                    him
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="simplebar-placeholder"
                                                            style={{width: "0px", height: "0px"}}
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="simplebar-track simplebar-horizontal"
                                                        style={{visibility: "hidden"}}
                                                    >
                                                        <div
                                                            className="simplebar-scrollbar"
                                                            style={{width: "0px", display: "none"}}
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="simplebar-track simplebar-vertical"
                                                        style={{visibility: "hidden"}}
                                                    >
                                                        <div
                                                            className="simplebar-scrollbar"
                                                            style={{height: "0px", display: "none"}}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="py-6 px-7 mb-1">
                                                    <button className="btn btn-outline-primary w-100">
                                                        {" "}
                                                        See All Notifications{" "}
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link
                                                className="nav-link pe-0"
                                                href="javascript:void(0)"
                                                id="drop1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-profile-img">
                                                        <img
                                                            src="../assets/images/profile/user-1.jpg"
                                                            className="rounded-circle"
                                                            width="35"
                                                            height="35"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </Link>
                                            <div
                                                className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                                                aria-labelledby="drop1"
                                            >
                                                <div
                                                    className="profile-dropdown position-relative"
                                                    data-simplebar="init"
                                                >
                                                    <div
                                                        className="simplebar-wrapper"
                                                        style={{margin: "0px"}}
                                                    >
                                                        <div className="simplebar-height-auto-observer-wrapper">
                                                            <div className="simplebar-height-auto-observer"></div>
                                                        </div>
                                                        <div className="simplebar-mask">
                                                            <div
                                                                className="simplebar-offset"
                                                                style={{right: "0px", bottom: "0px"}}
                                                            >
                                                                <div
                                                                    className="simplebar-content-wrapper"
                                                                    tabIndex="0"
                                                                    role="region"
                                                                    aria-label="scrollable content"
                                                                    style={{height: "auto", overflow: "hidden"}}
                                                                >
                                                                    <div
                                                                        className="simplebar-content"
                                                                        style={{padding: "0px"}}
                                                                    >
                                                                        <div className="py-3 px-7 pb-0">
                                                                            <h5 className="mb-0 fs-5 fw-semibold">
                                                                                User
                                                                                Profile
                                                                            </h5>
                                                                        </div>
                                                                        <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                                                            <img
                                                                                src="../assets/images/profile/user-1.jpg"
                                                                                className="rounded-circle"
                                                                                width="80"
                                                                                height="80"
                                                                                alt=""
                                                                            />
                                                                            <div className="ms-3">
                                                                                <h5 className="mb-1 fs-3">
                                                                                    Mathew
                                                                                    Anderson
                                                                                </h5>
                                                                                <span className="mb-1 d-block text-dark">
                                                                                    Designer
                                                                                </span>
                                                                                <p className="mb-0 d-flex text-dark align-items-center gap-2">
                                                                                    <i className="ti ti-mail fs-4"></i>{" "}
                                                                                    info@modernize.com
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="message-body">
                                                                            <Link
                                                                                href="./page-user-profile.html"
                                                                                className="py-8 px-7 mt-8 d-flex align-items-center"
                                                                            >
                                                                                <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                                                                                    <img
                                                                                        src="../assets/images/svgs/icon-account.svg"
                                                                                        alt=""
                                                                                        width="24"
                                                                                        height="24"
                                                                                    />
                                                                                </span>
                                                                                <div className="w-75 d-inline-block v-middle ps-3">
                                                                                    <h6 className="mb-1 bg-hover-primary fw-semibold">
                                                                                        {" "}
                                                                                        My
                                                                                        Profile{" "}
                                                                                    </h6>
                                                                                    <span className="d-block text-dark">
                                                                                        Account
                                                                                        Settings
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link
                                                                                href="./app-email.html"
                                                                                className="py-8 px-7 d-flex align-items-center"
                                                                            >
                                                                                <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                                                                                    <img
                                                                                        src="../assets/images/svgs/icon-inbox.svg"
                                                                                        alt=""
                                                                                        width="24"
                                                                                        height="24"
                                                                                    />
                                                                                </span>
                                                                                <div className="w-75 d-inline-block v-middle ps-3">
                                                                                    <h6 className="mb-1 bg-hover-primary fw-semibold">
                                                                                        My
                                                                                        Inbox
                                                                                    </h6>
                                                                                    <span className="d-block text-dark">
                                                                                        Messages
                                                                                        &amp;
                                                                                        Emails
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link
                                                                                href="./app-notes.html"
                                                                                className="py-8 px-7 d-flex align-items-center"
                                                                            >
                                                                                <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                                                                                    <img
                                                                                        src="../assets/images/svgs/icon-tasks.svg"
                                                                                        alt=""
                                                                                        width="24"
                                                                                        height="24"
                                                                                    />
                                                                                </span>
                                                                                <div className="w-75 d-inline-block v-middle ps-3">
                                                                                    <h6 className="mb-1 bg-hover-primary fw-semibold">
                                                                                        My
                                                                                        Task
                                                                                    </h6>
                                                                                    <span className="d-block text-dark">
                                                                                        To-do
                                                                                        and
                                                                                        Daily
                                                                                        Tasks
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="d-grid py-4 px-7 pt-8">
                                                                            <div className="upgrade-plan bg-light-primary position-relative overflow-hidden rounded-4 p-4 mb-9">
                                                                                <div className="row">
                                                                                    <div className="col-6">
                                                                                        <h5 className="fs-4 mb-3 w-50 fw-semibold text-dark">
                                                                                            Unlimited
                                                                                            Access
                                                                                        </h5>
                                                                                        <button className="btn btn-primary text-white">
                                                                                            Upgrade
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className="col-6">
                                                                                        <div className="m-n4">
                                                                                            <img
                                                                                                src="../assets/images/backgrounds/unlimited-bg.png"
                                                                                                alt=""
                                                                                                className="w-100"
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <Link
                                                                                href="./authentication-login.html"
                                                                                className="btn btn-outline-primary"
                                                                            >
                                                                                Log
                                                                                Out
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="simplebar-placeholder"
                                                            style={{width: "0px", height: "0px"}}
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="simplebar-track simplebar-horizontal"
                                                        style={{visibility: "hidden"}}
                                                    >
                                                        <div
                                                            className="simplebar-scrollbar"
                                                            style={{width: "0px", display: "none"}}
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="simplebar-track simplebar-vertical"
                                                        style={{visibility: "hidden"}}
                                                    >
                                                        <div
                                                            className="simplebar-scrollbar"
                                                            style={{height: "0px", display: "none"}}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>

                    <div className="container-fluid">{children}</div>
                </div>
                <div className="dark-transparent sidebartoggler"></div>
                <div className="dark-transparent sidebartoggler"></div>
            </div>
        </>
    );
}
