import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsBanner from "../components/News/newsBanner";
import NewsContents from "../components/News/newsContents";

function News() {
    return(
        <>
            <Header />
            <div className="mainContainer">
                <NewsBanner />
                <NewsContents />

            </div>
            <Footer />
        </>
    )
}

export default News;