// ---
import "@styles/index.scss";
import Header from "@components/Header";
import * as filler from "@site-content";
import VidPoster from "@assets/vid-poster.jpg";
import HeroVideo from "@assets/hero-vid.mp4";

const Home = (_) => {
    return (
        <>
            <Header
                VidPoster={VidPoster}
                HeroVideo={HeroVideo}
            />
        </>
    );
};

export default Home;
