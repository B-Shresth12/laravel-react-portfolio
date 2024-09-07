import InputError from "./InputError";
export default function InputGroup({
    type = "text",
    className = "",
    label,
    icon,
    name,
    error = null,
    ...props
}) {
    
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <i className={icon}></i>
                    &nbsp;{label}
                </span>
                <input
                    type={type}
                    className={`form-control ${
                        error ? "is-invalid" : ""
                    } ${className}`}
                    name={name}
                    {...props}
                />
            </div>
            {error ? <InputError message={error} /> : ""}
        </>
    );
}
