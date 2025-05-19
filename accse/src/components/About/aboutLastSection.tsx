import bgimg from '/src/assets/images/aboutLastSection.webp'

function AboutLastSection() {
    return(
        <>
            <div className="mainContainer relative my-40 flex justify-center items-center h-[500px] md:h-[500px] lg:h-[700px]  bg-no-repeat">
                    <img src={bgimg} alt='ACCSE' className='absolute w-full h-full inset-0 object-center object-cover bg-no-repeat' />

                    <div className="bg-black/70 absolute inset-0 w-full h-full "></div> {/*OVERLAY */}
                <div className="subContainer relative z-20 text-white gap-16 flex flex-col justify-center items-center w-[80%]">
                    
                    <p className='font-Roboto font-bold text-lg md:text-4xl lg:text-5xl xl:text-6xl'>Be Part of the Climate Solution.</p>

                    <p className='text-center font-Inter font-medium '>Every donation brings us closer to a future where communities in <br className='md:hidden lg:block' /> Ghana are equipped to fight climate change with innovation, <br className='md:hidden lg:block' /> resilience, and hope.</p>

                    <button className="self-center font-Inter font-bold text-sm text-white bg-[#E5A615] px-6 md:px-8 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
                       Donate Now
                    </button>
                </div>

            </div>
        </>
    )
}

export default AboutLastSection;