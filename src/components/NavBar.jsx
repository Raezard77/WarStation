import "@scripts/navbar";
import { Link } from "react-router-dom";

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
                                                    <Link
                                                        to={link2
                                                            .toString()
                                                            .split(" ")
                                                            .join("")}
                                                    >
                                                        {link2}
                                                    </Link>
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
                                <Link to={link.toString().split(" ").join("")}>
                                    {link}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
