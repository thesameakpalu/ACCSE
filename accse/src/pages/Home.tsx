import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageAboutSection from "../components/Home/HomePageAboutSection";
import OurImpacts from "../components/Home/ourImpactsSection";
import LandingpageBanner from "../components/Home/LandingPageBanner";
import ImpactInAction from "../components/Home/impactInActionSection";
import WhatSetsUs from "../components/Home/WhatSetsUsSection";
import LastSection from "../components/Home/LastSection";

function Home() {
  

  return (
    <>
      
      <Header />
        <div className="mainContainer">
          
          <LandingpageBanner />
          <HomePageAboutSection />
          <OurImpacts />
          <WhatSetsUs />
          <ImpactInAction />
          <LastSection />
        </div>

      <Footer />
      
    </>
  );
}

export default Home;
