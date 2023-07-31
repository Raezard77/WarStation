import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '@scripts/navbar'

const NavBar = ({ logo, brandName, pageLinks }) => {
    return (
        <nav>
            <Link to={`/${brandName}`} id="nav-logo-container">
                <figure>
                    <img src={logo} alt={`${brandName} Logo`} />
                </figure>
                <h1>{brandName}</h1>
            </Link>

            <div id="nav-mobile">
                <a id="burger-menu" data-href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>

            <ul id="nav-ul">
                {pageLinks.map((link, index) => {
                    if (typeof link === "object") {
                        return (
                            <li key={index} className="dropdown-container">
                                <a href="#">
                                    {Object.keys(link)[0]}
                                    <span>&nbsp;▾</span>
                                </a>
                                <ul className="dropdown-menu hidden">
                                    {link[Object.keys(link)[0]].map(
                                        (link2, index2) => {
                                            return (
                                                <li key={index2}>
                                                    <MarkedLink
                                                        to={link2
                                                            .toString()
                                                            .split(" ")
                                                            .join("")}
                                                        isChild={true}
                                                    >
                                                        {link2}
                                                    </MarkedLink>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </li>
                        );
                    } else {
                        return (
                            <li key={index}>
                                <MarkedLink
                                    to={link.toString().split(" ").join("")}
                                >
                                    {link}
                                </MarkedLink>
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    );
};

const MarkedLink = ({ to, children, isChild = false, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const linkClass = isChild ? "child-nav-link" : "page-selected";

    return (
        <Link to={to} className={isActive ? linkClass : ""} {...props}>
            {children}
        </Link>
    );
};

export default NavBar;
