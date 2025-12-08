import img from '/src/assets/images/aboutPageAboutSection.webp';


function NewsBanner() {
    return(
        <>
                {/*LARGE SCREENS */}
            <div id="hero-section" className="relative w-full hidden md:block">
  {/* Wrapper for full image and torn edge */}
  <div className="relative w-full h-svh overflow-hidden">
    {/* Full background image */}
    <img src={img} className=" w-full h-full object-cover" alt="Landing banner" />

    {/* Overlay */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-[#66666600]/0"></div>

    {/* Contents */}
    <div className="absolute inset-0 z-20 flex gap-5 items-center justify-start pt-30 px-6 ml-10 text-white">
      {/* Left Text */}
      <div className=" flex justify-center items-center">
        <p className="fade-in-up opacity-0 md:text-xl lg:text-3xl 2xl:text-4xl mt-1 font-bold font-Inter uppercase" style={{ animationDelay: '0.5s' }}>
         Follow our journey as we  empower communities and  drive local climate  solutions.
        </p>
      </div>

      
    </div>
  </div>
            </div>

              {/*SMALL SCREENS */}
            <div id="hero-section-mobile" className="relative w-full block md:hidden">
  {/* Wrapper for full image and torn edge */}
  <div className="relative w-full h-[90vh] overflow-hidden">
    {/* Full background image */}
    <img src={img} className="w-full h-full object-cover" alt="Landing banner" />

    {/* Overlay */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-black/40 to-transparent"></div>

    {/* Contents */}
    <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-white">
      <p className="fade-in-up opacity-0 text-lg text-center font-bold font-Inter uppercase leading-snug" style={{ animationDelay: '0.5s' }}>
        Follow our journey as we <br /> empower communities and <br /> drive local climate <br /> solutions.
      </p>
    </div>
  </div>
</div>

        </>
    )
}
export default NewsBanner;
