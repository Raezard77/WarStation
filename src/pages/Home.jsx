import "@styles/index.scss";
import * as filler from "@site-content";
import Header from "@components/Header";

const Home = (_) => {
    return (
        <>
            <Header
                brandName={filler.brandName}
                pageLinks={filler.pageLinks}
            />
        </>
    );
};

export default Home;
