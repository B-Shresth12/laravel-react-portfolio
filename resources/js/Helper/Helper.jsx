export default function getImageUrl(path) {
    const url = new URL(window.location.href);
    return `${url.protocol}//${url.host}/${path}`;
}
