import { Head, Link } from "@inertiajs/react";

export default function CRUDForm({
    children,
    HandleHeadTitle,
    panelName,
    icon,
}) {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <ul className="nav nav-tabs" role="tablist">
                        {panelName.map((name, index) => (
                            <li className="nav-item" role="presentation" key={index}>
                                <Link
                                    className={`nav-link d-flex ${
                                        index == 0 ? "active" : ""
                                    }`}
                                    data-bs-toggle="tab"
                                    href={`#tab${index}`}
                                    role="tab"
                                    aria-selected="true"
                                    onClick={() => HandleHeadTitle({ name })}
                                >
                                    <span>
                                        <i
                                            className={`${icon[index]} fs-4`}
                                        ></i>
                                    </span>
                                    <span className="d-none d-md-block ms-2">
                                        {name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                        {/* <li className="nav-item" role="presentation">
                            <Link
                                className="nav-link d-flex active"
                                data-bs-toggle="tab"
                                href="#home2"
                                role="tab"
                                aria-selected="true"
                                onClick={() =>
                                    HandleHeadTitle("Site Setting Information")
                                }
                            >
                                <span>
                                    <i className="ti ti-home-2 fs-4"></i>
                                </span>
                                <span className="d-none d-md-block ms-2">
                                    Website Information
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                className="nav-link d-flex"
                                data-bs-toggle="tab"
                                href="#profile2"
                                role="tab"
                                aria-selected="false"
                                tabIndex="-1"
                                onClick={() =>
                                    HandleHeadTitle("Update Meta Information")
                                }
                            >
                                <span>
                                    <i className="ti ti-seo fs-4"></i>
                                </span>
                                <span className="d-none d-md-block ms-2">
                                    Meta/OG Information
                                </span>
                            </Link>
                        </li> */}
                    </ul>
                    <div className="tab-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
