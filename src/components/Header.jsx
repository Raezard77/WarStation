import BgVideo from "@components/BgVideo";

const Header = ({ logo, brandName, pageLinks, VidPoster, HeroVideo }) => {
    return (
        <>
            <header>
                <BgVideo vidPoster={VidPoster} mp4Vid={HeroVideo} />
            </header>
        </>
    );
};

export default Header;
