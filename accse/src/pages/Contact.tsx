import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUs from "../components/contactUs";


function Contact() {
    return(
        <>
            <Header />
            <div className="mainContainer">
              <ContactUs />
                
            </div>
           
            <Footer />
        </>
    )
}

export default Contact;