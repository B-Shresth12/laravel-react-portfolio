import InputGroup from "./InputGroup";

export default function InputFile({
    src,
    alt = "Default Image",
    recommendedSize,
    ...prop
}) {
    return (
        <>
            <InputGroup type="file" {...prop} />
            <span className="alert alert-warning">
                <i className="fa fa-info"></i>&nbsp; Recommended Size:{" "}
                {recommendedSize} px
            </span>
            <div className="text-center">
                <h6 className="text-start">Preview:</h6>
                <img
                    src={src}
                    alt={alt}
                    style={{
                        minWidth: "150px",
                        maxWidth: "150px",
                    }}
                />
            </div>
        </>
    );
}
