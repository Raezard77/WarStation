import BgVideo from "@components/BgVideo";
import logo from "@assets/logo.png";
import Poster from "@assets/vid-poster.jpg";
import HeroVideo from "@assets/hero-vid.mp4";

const Header = ({ brandName, pageLinks }) => {
    return (
        <header>
            <BgVideo vidPoster={Poster} mp4Vid={HeroVideo} />
            <nav>
                <div id="nav-logo-container">
                    {/* <img src={logo} alt="WarStation Logo" /> */}
                    <h1>{brandName}</h1>
                </div>

                {/* <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a> */}

                <ul>
                    {pageLinks.map((link, index) => (
                        <li key={index}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
