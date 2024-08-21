export default function SidebarLabel({name}) {
    return (
        <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span className="hide-menu">{name}</span>
        </li>
    );
}
