import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';
import img from '/src/assets/images/aboutPageAboutSection.webp'


const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: 'easeOut' as const, // ✅ fixes the type
    },
  },
};


function AboutSection () {

 const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger animation once
    threshold: 0.2,      // Trigger when 40% of the section is visible
  });

    return(
        <>
                    {/*LARGE SCREENS */}
            <div ref={ref} className="mainContainer hidden md:flex justify-center my-70 ">
               <motion.div
                                      variants={zoomIn}
                                      initial="hidden"
                                      animate={inView ? 'visible' : 'hidden'}
                                      className="w-full flex flex-col items-center gap-6"
                                    >
                    
                <div className="subContainer xl:w-[80%] md:w-[90%] h-full">
                    <p className="font-Roboto text-[#EFA51E] font-bold text-3xl mb-10">ABOUT ACCSE</p>

                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <p className="font-Inter italic text-xl font-bold text-[#1D7948] mb-10">Who We Are</p>
                            <p className='font-Inter font-medium xl:text-lg 2xl:text-2xl'>
                                The Africa Center for Climate and Sustainability Empowerment (ACCSE) is a youth led Non-Profit 
                                Organization committed to educating, engaging and empowering youth and women in developing  innovative
                                climate solutions in vulnerable communities in Ghana to mitigate and adapt to the effects of climate 
                                Change.
                            </p>
                        </div>

                        <div className="flex items-center justify-center mt-5 2xl:mt-10 ">
                            <img src={img} alt='Some of Our Climate Leaders' className='w-1/2'></img>
                            
                            <div className='w-1/2  lg:space-y-20 md:space-y-10 lg:p-10 md:p-5  xl:text-lg lg:text-lg md:text-base 2xl:text-2xl'>
                                    <p className='font-Inter font-medium'>
                                    ACCSE was established to build and support local capacity among climate leaders to  produce 
                                    and create locally adaptive innovative  solutions to climate change mitigation and   adaptation.
                                    </p>

                                    <p className='font-Inter font-medium'>
                                         At ACCSE, we challenge the mindset of our <br className='md:hidden xl:block' />  entrepreneurs and Innovators to come up with 
                                          self-sustaining innovations having in mind the  Economic, Social and Environmental Impacts.
                                    </p>
                            </div>

                        </div>

                    </div>


                </div>

                </motion.div>

            </div>

                    {/*SMALL SCREENS */}
            <div className="mainContainer flex justify-center my-20 md:hidden">
  <div className="subContainer w-[90%] h-full">
    {/* Section Title */}
    <p className="font-Roboto text-[#EFA51E] font-bold text-2xl mb-6 text-center">ABOUT ACCSE</p>

    {/* Who We Are */}
    <div className="flex flex-col justify-center items-center space-y-6">
      <div>
        <p className="font-Inter italic text-lg font-bold text-[#1D7948] mb-4 text-center">Who We Are</p>
        <p className="font-Inter font-medium text-sm text-justify">
          The Africa Center for Climate and Sustainability Empowerment (ACCSE) is a youth-led Non-Profit
          Organization committed to educating, engaging, and empowering youth and women in developing
          innovative climate solutions in vulnerable communities in Ghana to mitigate and adapt to the
          effects of climate change.
        </p>
      </div>

      {/* Image and Description */}
      <div className="flex flex-col items-center space-y-6">
        <img src={img} alt="Some of Our Climate Leaders" className="w-full rounded" />

        <div className="space-y-4 text-sm font-Inter font-medium text-justify">
          <p>
            ACCSE was established to build and support local capacity among climate leaders to produce and
            create locally adaptive innovative solutions to climate change mitigation and adaptation.
          </p>
          <p>
            At ACCSE, we challenge the mindset of our entrepreneurs and innovators to come up with
            self-sustaining innovations, having in mind the economic, social, and environmental impacts.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default AboutSection;