import { useRef } from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavBar = ({ logo, brandName, pageLinks }) => {
    const navUlRef = useRef(null);
    const location = useLocation();

    const handleRouteChange = (e) => {
        const pageNavLi = e.target;
        document.querySelectorAll("#nav-ul li a").forEach((elem) => {
            elem.classList.remove("page-selected");
        });
        pageNavLi.classList.add("page-selected");

        navUlRef.current.addEventListener("mouseover", (_) => {
            pageNavLi.classList.remove("page-selected");
        });
        navUlRef.current.addEventListener("mouseleave", (_) => {
            pageNavLi.classList.add("page-selected");
        });
    };

    // useEffect(
    //     (_) => {
    //         console.log("location changed");
    //         const burger = document.querySelector("#burger-menu");
    //         const navLinks = document.querySelector("#nav-ul");
    //         let pageNavLi = null;

    //         burger.addEventListener("click", () => {
    //             burger.classList.toggle("burger-cross");
    //             navLinks.classList.toggle("side-nav");
    //         });



    //         if (
    //             // checking if user ain on index route
    //             window.location.href.indexOf(
    //                 "/",
    //                 window.location.origin.length + 1
    //             ) > 0 &&
    //             window.location.href[window.location.href.length - 1] != "/" && // for hosting on gh pages which makes the domain name the base URL
    //             window.location.href[window.location.href.length - 1] != "#"
    //         ) {


    //             if (document.querySelector(".child-nav-link") != null) {
    //                 pageNavLi =
    //                     document.querySelector(".child-nav-link").parentElement
    //                         .parentElement.previousSibling;
    //                 pageNavLi.classList.add("page-selected");
    //             } else {


    //                 pageNavLi = document.querySelector(
    //                     "#nav-ul li a.page-selected"
    //                 );
    //             }

    //             }
    //         }
    //     },
    //     [location]
    // );

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

            <ul id="nav-ul" ref={navUlRef}>
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
                                                        onClick={
                                                            handleRouteChange
                                                        }
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
                                    onClick={handleRouteChange}
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
