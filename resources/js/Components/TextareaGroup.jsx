export default function TextareaGroup({
    className,
    icon,
    label,
    name,
    ...prop
}) {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                <i className={icon}></i>
                &nbsp;{label}
            </span>
            <textarea
                name="address"
                className={`form-control ${className}`}
                {...prop}
            ></textarea>
        </div>
    );
}
