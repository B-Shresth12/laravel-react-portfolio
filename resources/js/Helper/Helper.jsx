export function getImageUrl(path) {
    const url = new URL(window.location.href);
    return `${url.protocol}//${url.host}/${path}`;
}

export function getbreadCrumbMenu() {
    const url = new URL(window.location.href);
    const pathArray = url.pathname
        .split("/")
        .filter((part) => part && part !== "admin");
    const formattedParts = pathArray.map(
        (part) =>
            part
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
                .join(" ") // Join words with spaces
    );

    return formattedParts;
}

export function getDefaultImage(width, height) {
    return `https://placehold.co/${width}x${height}`;
}

export function getObjectUrl(file) {
    return URL.createObjectURL(file);
}

export function checkCurrentURL(url) {
    // if (menu) {
    //     return url.startsWith(window.location.href);
    // }
    return window.location.href === url;
}

export function getRoute(path) {
    const currentUrl = new URL(window.location.href);
    return `${currentUrl.protocol}//${currentUrl.host}/${path}`;
}
