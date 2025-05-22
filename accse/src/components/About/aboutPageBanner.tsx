import img from '/src/assets/images/aboutPageHero.webp';

function AboutPageBanner() {
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
    <div className="absolute inset-0 z-20 flex gap-5 items-center justify-center pt-30 px-6 ml-10 text-white">
      {/* Left Text */}
      <div className="w-1/2 flex justify-center items-center">
        <p className="md:text-2xl lg:text-4xl 2xl:text-[150px] mt-1 font-bold font-Inter">
          DONATE TODAY TO HELP <br className='md:hidden lg:block' /> SAFEGUARD AND REBUILD OUR <br className='md:hidden xl:block' /> ENVIRONMENT
        </p>
      </div>

      {/* Right Form */}
      <div className="w-1/2 flex justify-center items-center">
        <form className="space-y-8 w-[90%] border border-white py-5 px-10 font-Roboto">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
            <input id="name" type="text" className="w-full p-0.5 border focus:outline-none border-white rounded" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input id="email" type="email" className="w-full p-0.5 border focus:outline-none border-white rounded" />
          </div>
          <div className="space-y-2">
            <label htmlFor="project" className="block mb-2 font-medium">Project</label>
            <input id="project" type="text" placeholder="select a project" className="w-full p-0.5 border focus:outline-none border-white rounded" />
          </div>
          <button type="submit" className="bg-[#1D7948] mt-5 text-white px-4 py-0.5 w-full rounded">Send</button>
        </form>
      </div>
    </div>
  </div>
            </div>

                        {/*SMALL SCREENS */}
            <div id="hero-section-mobile" className="relative w-full md:hidden">
  {/* Wrapper */}
  <div className="relative w-full h-screen overflow-hidden">
    {/* Background Image */}
    <img src={img} className="w-full h-full object-cover" alt="Landing banner" />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black to-[#66666600]/0"></div>

    {/* Content */}
    <div className="absolute inset-0 z-20 flex flex-col pt-30 gap-10 items-center justify-center  px-4 text-white">
      {/* Text Section */}
      <div className="text-center px-2">
        <p className="text-xl sm:text-2xl font-bold font-Inter leading-relaxed">
          DONATE TODAY TO HELP  SAFEGUARD AND REBUILD OUR  ENVIRONMENT
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full max-w-sm border border-white p-4 space-y-4 font-Roboto">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input id="name" type="text" className="w-full p-1 border border-white rounded focus:outline-none focus:border-[#1D7948]" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input id="email" type="email" className="w-full p-1 border border-white rounded focus:outline-none focus:border-[#1D7948]" />
        </div>
        <div>
          <label htmlFor="project" className="block mb-1 font-medium">Project</label>
          <input id="project" type="text" placeholder="select a project" className="w-full p-1 border border-white rounded focus:outline-none focus:border-[#1D7948]" />
        </div>
        <button type="submit" className="bg-[#1D7948] text-white w-full py-1 rounded mt-2">Send</button>
      </form>
    </div>
  </div>
</div>


        </>
    )
}

export default AboutPageBanner;