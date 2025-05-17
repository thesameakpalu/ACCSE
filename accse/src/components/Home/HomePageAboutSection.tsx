import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import smallImage from '/src/assets/images/AboutSmallImage.webp';
import largeImage from '/src/assets/images/AboutLargeImage.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};


function HomePageAboutSection () {

  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger animation once
    threshold: 0.4,      // Trigger when 40% of the section is visible
  });

  

    return(
        <>
                {/*LARGE SCREENS */}
            <div ref={ref} className="mainContainer hidden md:block mt-20 lg:px-4 md:mx-3 md:px-0 md:mx">
              <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="w-full flex flex-col items-center gap-6"
                      >
  <div className="subContainer flex flex-col md:flex-row items-center justify-center md:gap-32 h-auto md:h-[600px]">
    
    {/* IMAGE SECTION */}
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0">
      {/* Big Circular Image */}
      <img
        src={largeImage}
        alt="Big"
        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
      />

      {/* Small Circular Image */}
      <img
        src={smallImage}
        alt="Small"
        className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded-full border-2 border-white shadow-md absolute top-0 left-80 translate-x-1/4 -translate-y-1/4"
      />
    </div>

    {/* TEXT SECTION */}
    <div className="mt-10 md:mt-0 flex flex-col gap-6 w-full md:w-[500px]">
      <div className="space-y-5 text-center md:text-left">
        <p className="text-[#EFA51E] lg:text-2xl md:text-xl font-Inter font-bold">About Us</p>
        <p className="text-[#1D7948] lg:text-xl md:text-lg font-Roboto font-medium">
          Africa Center for Climate and <br className="lg:block md:hidden"  />
          Sustainability Empowerment (ACCSE)
        </p>
        <p className="font-Inter font-medium lg:text-lg md:text-base">
          Is a youth led Non-Profit Organization <br className="lg:block md:hidden" />
          committed to educating, engaging and <br className="lg:block md:hidden" />
          empowering youth and women in developing <br className="lg:block md:hidden" />
          innovative climate solutions in vulnerable <br className="lg:block md:hidden" />
          communities in Ghana to mitigate and adapt <br className="lg:block md:hidden" />
          to the effects of climate Change.
        </p>
      </div>

      <div className="text-center md:text-left">
        <button className="mt-4 font-ISsans text-sm text-white bg-[#E5A615] px-4 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
          Read More
        </button>
      </div>
    </div>
  </div>
      </motion.div>
            </div>

            {/*SMALL SCREENS */}
            <div  className="mainContainer block md:hidden my-30 px-4">
              
  <div className="subContainer flex flex-col items-center justify-center gap-10">

    {/* IMAGE SECTION */}
    <div className="relative w-[200px] h-[200px] mr-10">
      {/* Big Circular Image */}
      <img
        src={largeImage}
        alt="Big"
        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
      />

      {/* Small Circular Image - Top Right Corner with spacing */}
      <img
        src={smallImage}
        alt="Small"
        className="w-[80px] h-[80px] object-cover rounded-full border-2 border-white shadow-md absolute -top-5 -right-16"
      />
    </div>

    {/* TEXT SECTION */}
    <div className="flex flex-col gap-6 text-center">
      <div className="space-y-4">
        <p className="text-[#EFA51E] text-xl font-Inter font-bold">About Us</p>
        <p className="text-[#1D7948] text-lg font-Roboto font-medium">
          Africa Center for Climate and <br />
          Sustainability Empowerment (ACCSE)
        </p>
        <p className="font-Inter font-medium text-base leading-relaxed">
          Is a youth led Non-Profit Organization  committed to educating, engaging and empowering youth and women in developing 
          innovative climate solutions in vulnerable communities in Ghana to mitigate and adapt to the effects of climate Change.
        </p>
      </div>

      <button className="font-ISsans self-center text-sm text-white bg-[#E5A615] w-[35%]  py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read More
      </button>
    </div>

  </div>
</div>


        </>
    )
}

export default HomePageAboutSection;