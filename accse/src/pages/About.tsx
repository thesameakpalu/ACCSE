import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutPageBanner from "../components/About/aboutPageBanner";
import AboutSection from "../components/About/aboutSection";
import OurActivities from "../components/About/ourActivities";
import AboutLastSection from "../components/About/aboutLastSection";
import HalfImageSection from "../components/About/halfImageSection";



function About() {
    return(
        
        <>
        <Helmet>
        <title>About ACCSE – Who We Are & What We Stand For</title>
      <meta  name="description" content="Learn about ACCSE, a youth-led nonprofit in Ghana empowering communities through sustainable climate solutions, education, and innovation." />
      <meta name="keywords" content="ACCSE, about ACCSE, climate nonprofit Ghana, youth-led organization, women in sustainability, community empowerment, environmental education"/>
      <meta name="author" content="Africa Center for Climate and Sustainability Empowerment" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.ccseafrica.org/About" />

      
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About ACCSE – Empowering Youth & Women in Climate Action" />
      <meta  property="og:description" content="Discover ACCSE's mission, vision, and values — committed to creating sustainable, resilient communities through climate innovation." />
      <meta property="og:image" content="https://www.ccseafrica.org/assets/aboutPageAboutSection-De6-Ayuz.webp" />
      <meta property="og:url" content="https://www.ccseafrica.org/About" />
      <meta property="og:site_name" content="ACCSE" />

      </Helmet>


        <Header />        
        <div className="mainContainer">            
            <AboutPageBanner />     
            <AboutSection />     
            <OurActivities /> 
            <HalfImageSection />
            <AboutLastSection />

        </div>
           <Footer />

        
            
        </>
    )
}

export default About;