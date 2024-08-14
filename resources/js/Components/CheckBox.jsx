export default function CheckBox({label, className, name, ...prop}) {
    return (
        <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="form-check">
                <input
                {...prop}
                    className={"form-check-input primary " + className}
                    type="checkbox"
                    value=""
                    id={name}
                />
                <label
                    className="form-check-label text-dark"
                    htmlFor={name}
                >
                    {label}
                </label>
            </div>
        </div>
    );
}
