export default function Button({ children, className,...prop}) {
    return (
        <button className={className} {...prop}>
            {children}
        </button>
    );
}
