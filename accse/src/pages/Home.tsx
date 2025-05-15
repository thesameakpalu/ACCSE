import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageAboutSection from "../components/HomePageAboutSection";
import LandingpageBanner from "../components/LandingPageBanner";

function Home() {
  

  return (
    <>
      
      <Header />
        <div className="mainContainer">
          
          <LandingpageBanner />
          <HomePageAboutSection />
          
        </div>

      <Footer />
      
    </>
  );
}

export default Home;
