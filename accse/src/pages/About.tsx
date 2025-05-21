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