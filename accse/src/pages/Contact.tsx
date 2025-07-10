import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUs from "../components/contactUs";


function Contact() {
    return(
        <>

            <Helmet>
      <title>Contact ACCSE - Get in Touch With Us</title>
      <meta name="description" content="Reach out to the Africa Center for Climate and Sustainability Empowerment (ACCSE) to collaborate, volunteer, or learn more about our climate programs in Ghana." />
      <meta name="keywords" content="contact ACCSE, get in touch, climate nonprofit Ghana, contact youth climate organization, sustainability contact Ghana, climate support" />
      <meta name="author" content="Africa Center for Climate and Sustainability Empowerment" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.ccseafrica.org/Contact" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Contact ACCSE - Youth & Climate Empowerment in Ghana" />
      <meta property="og:description" content="Get in touch with ACCSE to support, collaborate, or learn about our climate empowerment initiatives." />
      <meta property="og:image" content="https://www.ccseafrica.org/assets/logo-DG_O7rUd.webp" />
      <meta property="og:url" content="https://www.ccseafrica.org/Contact" />
      <meta property="og:site_name" content="ACCSE" />

        </Helmet>

            <Header />
            <div className="mainContainer">
              <ContactUs />
                
            </div>
           
            <Footer />
        </>
    )
}

export default Contact;