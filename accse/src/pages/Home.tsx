import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageAboutSection from "../components/Home/HomePageAboutSection";
import OurImpacts from "../components/Home/ourImpactsSection";
import LandingpageBanner from "../components/Home/LandingPageBanner";
import ImpactInAction from "../components/Home/impactInActionSection";

function Home() {
  

  return (
    <>
      
      <Header />
        <div className="mainContainer">
          
          <LandingpageBanner />
          <HomePageAboutSection />
          <OurImpacts />
          <ImpactInAction />
          
        </div>

      <Footer />
      
    </>
  );
}

export default Home;
