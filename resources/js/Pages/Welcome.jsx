import { Link, Head } from "@inertiajs/react";

export default function Welcome({ isLogin }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <h1>Welcome - {isLogin ? "Logged In" : "Not Logged In"}</h1>
        </>
    );
}
