import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageAboutSection from "../components/Home/HomePageAboutSection";
import OurImpacts from "../components/Home/ourImpactsSection";
import LandingpageBanner from "../components/Home/LandingPageBanner";

function Home() {
  

  return (
    <>
      
      <Header />
        <div className="mainContainer">
          
          <LandingpageBanner />
          <HomePageAboutSection />
          <OurImpacts />
          
        </div>

      <Footer />
      
    </>
  );
}

export default Home;
