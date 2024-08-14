import { forwardRef, useEffect, useRef } from "react";
export default forwardRef(function UngroupedInput(
    {
        type = "text",
        label,
        name,
        requiredStatus = false,
        isFocused = false,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <>
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                {...props}
                type={type}
                name={name}
                id={name}
                className="form-control"
                aria-describedby="emailHelp"
                required={requiredStatus}
                ref={input}
            />
        </>
    );
});
