import BgVideo from "@components/BgVideo";
import logo from "@assets/logo.png";
import Poster from "@assets/vid-poster.jpg";
import HeroVideo from "@assets/hero-vid.mp4";
import "@scripts/navbar";

const Header = ({ brandName, pageLinks }) => {
    return (
        <header>
            <BgVideo vidPoster={Poster} mp4Vid={HeroVideo} />
            <nav>
                <div id="nav-logo-container">
                    <figure>
                        <img src={logo} alt="WarStation Logo" />
                    </figure>
                    <h1>{brandName}</h1>
                </div>

                <div id="nav-mobile">
                    <a id="burger-menu" data-href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                <ul>
                    {pageLinks.map((link, index) => {
                        if (typeof link === "object") {
                            return (
                                <li key={index} className="dropdown-container">
                                    {/* <a href={link}>{link}</a> */}
                                    <a href="#">
                                        {Object.keys(link)[0]}{" "}
                                        <span>&nbsp;▾</span>
                                    </a>
                                    <ul className="dropdown-menu hidden">
                                        {link[Object.keys(link)[0]].map(
                                            (link2, index2) => (
                                                <li key={index2}>
                                                    <a href="#">{link2}</a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            );
                        } else {
                            return (
                                <li key={index}>
                                    {/* <a href={link}>{link}</a> */}
                                    <a href="#">{link}</a>
                                </li>
                            );
                        }
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
