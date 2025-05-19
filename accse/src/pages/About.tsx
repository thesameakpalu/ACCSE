import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutPageBanner from "../components/About/aboutPageBanner";
import AboutSection from "../components/About/aboutSection";



function About() {
    return(
        
        <>

        <Header />        
        <div className="mainContainer">            
            <AboutPageBanner />     
            <AboutSection />      

        </div>
           <Footer />

        
            
        </>
    )
}

export default About;