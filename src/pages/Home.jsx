import "@styles/index.scss";
import * as filler from "@site-content";
import Navbar from "@components/Navbar";

const Home = (_) => {
    return (
        <>
            <header>
                <Navbar
                    brandName={filler.brandName}
                    pageLinks={filler.pageLinks}
                />
            </header>
        </>
    );
};

export default Home;
