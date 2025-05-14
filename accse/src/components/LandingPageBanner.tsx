import img from '/src/assets/images/landingPage-banner.webp';
import TornPagemockup from '/src/assets/images/tornPage-mockup.webp';

function LandingpageBanner() {
  return (
    <>
    <div id="hero-section" className="relative w-full hidden md:block">
      
      {/* Wrapper for full image and torn edge */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Full background image */}
        <img
          src={img}
          className="heroImg w-full h-[98%] object-cover"
          alt="Landing banner"
        />

        {/* Torn edge image at bottom of full image */}
        <img
          src={TornPagemockup}
          className="absolute bottom-0 left-0 w-full h-[40px] object-cover z-10 pointer-events-none"
          alt="Torn edge"
        />
      </div>
    </div>


          {/* Mobile View */}
      <div id="hero-section-mobile" className="relative w-full block md:hidden">
        <div className="relative w-full h-[85vh] overflow-hidden">
          <img
            src={img}
            className="heroImg w-full h-[98%] object-cover"
            alt="Landing banner mobile"
          />
          <img
            src={TornPagemockup}
            className="absolute bottom-0 left-0 w-full h-[40px] object-cover z-10 pointer-events-none"
            alt="Torn edge mobile"
          />
        </div>
      </div>
</>
  );
}

export default LandingpageBanner;
