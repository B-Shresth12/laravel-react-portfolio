import { getbreadCrumbMenu } from "@/Helper/Helper";
export default function Breadcrumb() {
    const breadCrumb = getbreadCrumbMenu();
    return (
        <div className="card bg-light-info shadow-none position-relative overflow-hidden">
            <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                    <div className="col-9">
                        <h4 className="fw-semibold mb-8">
                            Site Setting Management
                        </h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a className="text-muted " href="/admin">
                                        <i className="ti ti-home"></i>
                                    </a>
                                </li>
                                {breadCrumb.map((name, index) => (
                                    <li
                                        key={index}
                                        className="breadcrumb-item"
                                        aria-current="page"
                                    >
                                        {name}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
