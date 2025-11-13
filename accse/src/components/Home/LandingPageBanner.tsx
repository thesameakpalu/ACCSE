import img from '/src/assets/images/landingPage-banner.webp';
import TornPagemockup from '/src/assets/images/tornPage-mockup.webp';

function LandingpageBanner() {
  return (
    <>
             {/* BIG SCREEN VIEW */}
<div id="hero-section" className="relative w-full hidden md:block">
  {/* Wrapper for full image and torn edge */}
  <div className="relative w-full h-[90vh] overflow-hidden">
    {/* Full background image */}
    <img  src={img} className="heroImg w-full h-full object-cover" alt="Landing banner" fetchPriority="high" />

    {/* Torn edge image */}
    <img
      src={TornPagemockup}
      className="absolute bottom-0 left-0 w-full h-[40px] object-cover pointer-events-none"
      alt="Torn edge"
      fetchPriority="high"
    />

    {/* Text Content */}
    <div className="absolute inset-0 z-20 flex flex-col pt-20 justify-center items-start gap-4 text-white px-[8%]">
      <p className="fade-in-up opacity-0 text-[#1DDA76] font-Roboto font-bold md:text-2xl lg:text-5xl 2xl:text-[120px] leading-tight"   style={{ animationDelay: '0.5s' }}  >
        Empowering
      </p>

      <p className="fade-in-up opacity-0 font-Roboto font-bold text-xl xl:text-2xl 2xl:text-4xl leading-snug" style={{ animationDelay: '0.8s' }} >
        The Next Generation of Climate  Innovators and Social <br />
        Entrepreneurs
      </p>

      <p className="fade-in-up opacity-0 font-Inter text-base lg:text-lg 2xl:text-3xl leading-relaxed"  style={{ animationDelay: '1.0s' }} >
        Developing profitable and locally appropriate solutions to climate change
        mitigation and adaptation.
      </p>

      <button
        className="fade-in-up opacity-0 font-ISsans text-sm lg:text-base bg-[#E5A615] text-white px-4 py-2 mt-2 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
        style={{ animationDelay: '1.2s' }}
      >
        Learn More
      </button>
    </div>
  </div>
</div>


          {/* Mobile View */}
      <div id="hero-section-mobile" className="relative w-full block md:hidden">
        <div className="relative w-full h-[90vh] overflow-hidden">
          <img src={img} className="heroImg w-full h-[100%] object-cover "  fetchPriority="high" alt="Landing banner mobile" />
          <img  src={TornPagemockup} className="absolute bottom-0 left-0 w-full h-[40px] object-cover z-10 pointer-events-none"  fetchPriority="high" alt="Torn edge mobile"  />

            <div className="absolute inset-0 z-20 flex flex-col gap-4 items-start justify-center px-4 pt-20  text-white">

              <p className="fade-in-up opacity-0 text-3xl ms:text-4xl text-[#1DDA76] font-bold font-Roboto" style={{ animationDelay: '0.5s' }}>
                Empowering
              </p>

              <p className=" fade-in-up opacity-0 text-2xl ms:text-3xl mt-2  font-bold font-Roboto" style={{ animationDelay: '0.8s' }}>
                The <span className=' bg-black/40 p-2 rounded-md'>Next Generation</span> of Climate  Innovators and Social  Entrepreneurs
              </p>

              <p className=" fade-in-up opacity-0 text-base font-bold font-Inter mt-2" style={{ animationDelay: '1.0s' }}>
                Developing profitable and locally appropriate solutions to climate change 
                mitigation and adaptation.
              </p>

              <button className="fade-in-up opacity-0 mt-4 font-ISsans text-sm text-white bg-[#E5A615] px-2 py-1 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105" style={{ animationDelay: '1.0s' }}>
                Learn More
              </button>
            </div>


        </div>
      </div>
</>
  );
}

export default LandingpageBanner;
