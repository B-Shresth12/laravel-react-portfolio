import { getImageUrl } from "@/Helper/Helper";

export default function PreLoader({}) {
    return (
        <>
            {/* Preloader  */}
            <div className="preloader">
                <img
                    src={getImageUrl("storage/images/loader.svg")}
                    alt="loader"
                    className="lds-ripple img-fluid"
                />
            </div>
            {/* Preloader */}
            <div className="preloader">
                <img
                    src={getImageUrl("storage/images/loader.svg")}
                    alt="loader"
                    className="lds-ripple img-fluid"
                />
            </div>
        </>
    );
}
