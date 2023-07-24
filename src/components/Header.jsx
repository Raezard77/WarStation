import BgVideo from "@components/BgVideo";

const Header = ({ brandName, pageLinks }) => {
    return (
        <header>
            <BgVideo vidPoster="" webmVid="" mp4Vid="" />
            <nav>
                <div id="nav-logo-container">
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
