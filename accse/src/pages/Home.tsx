import { Helmet } from 'react-helmet-async';
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
        <Helmet>
      <title>ACCSE - Empowering Youth and Women for Climate Action</title>
        <meta name="description" content="ACCSE is a youth-led nonprofit empowering youth and women in Ghana to develop innovative, community-driven climate solutions for sustainable development." />
        <meta name="keywords" content="CCSE, CCSE Africa,climate change, youth empowerment, Ghana, ACCSE, women in climate, sustainability, climate innovation, YCLIP" />
        <meta name="author" content="Africa Center for Climate and Sustainability Empowerment" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ccseafrica.org/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="ACCSE – Climate Empowerment in Ghana" />
        <meta property="og:description" content="Building sustainable communities through youth-led and women-led climate innovation in Ghana." />
        <meta property="og:image" content="https://www.ccseafrica.org/assets/9-w2TD1G56.webp" />
        <meta property="og:url" content="https://www.ccseafrica.org" />
        <meta property="og:site_name" content="ACCSE" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Africa Center for Climate and Sustainability Empowerment",
          "alternateName": "ACCSE",
          "url": "https://www.ccseafrica.org",
          "logo": "https://www.ccseafrica.org/assets/logo-DG_O7rUd.webp",
          "description": "ACCSE is a youth-led nonprofit in Ghana empowering youth and women to develop innovative climate solutions.",
          "sameAs": [
            "https://www.facebook.com/share/1LBDGmr97P/?mibextid=wwXIfr",             
            "https://www.linkedin.com/company/ccseghana/",
            "https://youtube.com/@ccseghana?si=u_DaZhJitZ8qkWDP"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "email": "ccseghana@gmail.com",
              "contactType": "customer support",
              "areaServed": "GH",
              "availableLanguage": "English"
            }
          ]
        })}
      </script>
      
    </Helmet>
      
      <Header />
        <div className="mainContainerHome md:pt-10">
          
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
