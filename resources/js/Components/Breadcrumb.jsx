export default function Breadcrumb() {
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
                                    <a
                                        className="text-muted "
                                        href="/admin"
                                    >
                                        <i className="ti ti-home"></i>
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item"
                                    aria-current="page"
                                >
                                    Site Setting Management
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
