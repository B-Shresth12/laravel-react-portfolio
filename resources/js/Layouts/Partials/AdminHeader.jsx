import { Link } from "@inertiajs/react";
import { getImageUrl } from "@/Helper/Helper";
export default function AdminHeader() {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link sidebartoggler nav-icon-hover ms-n3"
                            id="headerCollapse"
                            href={void 0}
                        >
                            <i className="ti ti-menu-2"></i>
                        </Link>
                    </li>
                </ul>
                <div className="d-block d-lg-none">
                    <img
                        src={getImageUrl("storage/images/logos/dark-logo.svg")}
                        className="dark-logo"
                        width="180"
                        alt=""
                    />
                    <img
                        src={getImageUrl("storage/images/logos/light-logo.svg")}
                        className="light-logo"
                        width="180"
                        alt=""
                        style={{ display: "none" }}
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
                                    className="nav-link pe-0"
                                    href="javascript:void(0)"
                                    id="drop1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="user-profile-img">
                                            <img
                                                src={getImageUrl(
                                                    "storage/images/profile/user-1.jpg"
                                                )}
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
                                            style={{
                                                margin: "0px",
                                            }}
                                        >
                                            <div className="simplebar-height-auto-observer-wrapper">
                                                <div className="simplebar-height-auto-observer"></div>
                                            </div>
                                            <div className="simplebar-mask">
                                                <div
                                                    className="simplebar-offset"
                                                    style={{
                                                        right: "0px",
                                                        bottom: "0px",
                                                    }}
                                                >
                                                    <div
                                                        className="simplebar-content-wrapper"
                                                        tabIndex="0"
                                                        role="region"
                                                        aria-label="scrollable content"
                                                        style={{
                                                            height: "auto",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <div
                                                            className="simplebar-content"
                                                            style={{
                                                                padding: "0px",
                                                            }}
                                                        >
                                                            <div className="py-3 px-7 pb-0">
                                                                <h5 className="mb-0 fs-5 fw-semibold">
                                                                    User Profile
                                                                </h5>
                                                            </div>
                                                            <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                                                <img
                                                                    src={getImageUrl(
                                                                        "storage/images/profile/user-1.jpg"
                                                                    )}
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
                                                                            src={getImageUrl(
                                                                                "storage/images/svgs/icon-account.svg"
                                                                            )}
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
                                                                            src={getImageUrl(
                                                                                "storage/images/svgs/icon-inbox.svg"
                                                                            )}
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
                                                                            src={getImageUrl(
                                                                                "storage/images/svgs/icon-tasks.svg"
                                                                            )}
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="simplebar-placeholder"
                                                style={{
                                                    width: "0px",
                                                    height: "0px",
                                                }}
                                            ></div>
                                        </div>
                                        <div
                                            className="simplebar-track simplebar-horizontal"
                                            style={{
                                                visibility: "hidden",
                                            }}
                                        >
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{
                                                    width: "0px",
                                                    display: "none",
                                                }}
                                            ></div>
                                        </div>
                                        <div
                                            className="simplebar-track simplebar-vertical"
                                            style={{
                                                visibility: "hidden",
                                            }}
                                        >
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{
                                                    height: "0px",
                                                    display: "none",
                                                }}
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
    );
}
