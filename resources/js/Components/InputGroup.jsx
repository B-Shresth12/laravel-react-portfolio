export default function InputGroup({
    type = "text",
    className = "",
    label,
    icon,
    name,
    ...props
}) {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                <i className={icon}></i>
                &nbsp;{label}
            </span>
            <input
                type={type}
                className={`form-control ${className}`}
                name={name}
                {...props}
            />
        </div>
    );
}
