// ---
import "@styles/index.scss";
import * as filler from "@site-content";
import Header from "@components/Header";
import NavBar from "@components/NavBar";

// Assets
import logo from "@assets/logo.png";
import VidPoster from "@assets/vid-poster.jpg";
import HeroVideo from "@assets/hero-vid.mp4";

const Home = (_) => {
    return (
        <>
            <NavBar logo={logo} brandName={filler.brandName} pageLinks={filler.pageLinks}/>
            <Header
                VidPoster={VidPoster}
                HeroVideo={HeroVideo}
            />
        </>
    );
};

export default Home;
