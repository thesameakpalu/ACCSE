import img from '/src/assets/images/landingPage-banner.webp';
import TornPagemockup from '/src/assets/images/tornPage-mockup.webp';

function LandingpageBanner() {
  return (
    <>
              {/*BIG SCREEN VIEW */}
     <div id="hero-section" className="relative w-full hidden md:block">
        {/* Wrapper for full image and torn edge */}
        <div className="relative w-full h-svh overflow-hidden">
          {/* Full background image */}
          <img  src={img} className="heroImg w-full h-[98%] object-cover" alt="Landing banner" />

          {/* Torn edge image at bottom of full image */}
          <img src={TornPagemockup} className="absolute bottom-0 left-0 w-full h-[40px] object-cover pointer-events-none" alt="Torn edge" />

          {/*1st Text Content */}
          <div className="absolute inset-0 z-20 flex flex-col gap-5 items-start justify-center  pt-30 px-6 ml-10 text-white ">
            <p className="md:text-3xl lg:text-5xl 2xl:text-[150px] text-[#1DDA76] font-bold font-Roboto ">Empowering</p>
            <p className="md:text-3xl lg:text-5xl 2xl:text-[150px] mt-1 font-bold   font-Roboto">
              The Next Generation of Climate <br /> Innovators and Social <br /> Entrepreneurs
            </p>

            <p className="text-lg 2xl:text-5xl mt-1 font-bold font-Inter">
              Developing profitable and locally appropriate solutions to climate  change <br /> mitigation and adaptation.
            </p>

          <button className="font-ISsans text-sm text-white bg-[#E5A615] px-3 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-110">
           Learn More
          </button>

          </div>

        </div>
      </div>

          {/* Mobile View */}
      <div id="hero-section-mobile" className="relative w-full block md:hidden">
        <div className="relative w-full h-[85vh] overflow-hidden">
          <img src={img} className="heroImg w-full h-[98%] object-cover" alt="Landing banner mobile" />
          <img  src={TornPagemockup} className="absolute bottom-0 left-0 w-full h-[40px] object-cover z-10 pointer-events-none" alt="Torn edge mobile"  />

            <div className="absolute inset-0 z-20 flex flex-col gap-4 items-start justify-center px-4 pt-12  text-white">

              <p className="text-3xl ms:text-4xl text-[#1DDA76] font-bold font-Roboto">
                Empowering
              </p>

              <p className="text-2xl ms:text-3xl mt-2  font-bold font-Roboto">
                The <span className=' bg-black/40 p-2 rounded-md'>Next Generation</span> of Climate  Innovators and Social  Entrepreneurs
              </p>

              <p className="text-base font-bold font-Inter mt-2">
                Developing profitable and locally appropriate solutions to climate change 
                mitigation and adaptation.
              </p>

              <button className="mt-4 font-ISsans text-sm text-white bg-[#E5A615] px-2 py-1 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
                Learn More
              </button>
            </div>


        </div>
      </div>
</>
  );
}

export default LandingpageBanner;
