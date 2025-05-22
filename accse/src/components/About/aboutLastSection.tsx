import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import bgimg from '/src/assets/images/aboutLastSection.webp'


const fancyEntrance = {
  hidden: { x: -100, scale: 0.9, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",       // Ensure parent animates first
      staggerChildren: 0.8,         // Delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AboutLastSection() {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // trigger when 30% is visible
  });
    return(
        <>
            <div ref={ref} className="mainContainer relative mt-40 mb-20 md:my-40 flex justify-center items-center h-[500px] md:h-[500px] lg:h-[700px]  bg-no-repeat">
                <motion.div
                          variants={fancyEntrance}
                          initial="hidden"
                          animate={inView ? 'visible' : 'hidden'}
                          className="w-full flex flex-col items-center gap-6"
                        >
                    <img src={bgimg} alt='ACCSE' className='absolute w-full h-full inset-0 object-center object-cover bg-no-repeat' />

                    <div className="bg-black/70 absolute inset-0 w-full h-full "></div> {/*OVERLAY */}
                <motion.div
                                                     variants={itemVariants}
                 className="subContainer relative z-20 text-white gap-16 flex flex-col justify-center items-center w-[80%]">
                    
                    <p className='font-Roboto font-bold text-lg md:text-4xl lg:text-5xl xl:text-6xl'>Be Part of the Climate Solution.</p>

                    <p className='text-center font-Inter font-medium '>Every donation brings us closer to a future where communities in <br className='md:hidden lg:block' /> Ghana are equipped to fight climate change with innovation, <br className='md:hidden lg:block' /> resilience, and hope.</p>

                    <button className="self-center font-Inter font-bold text-sm text-white bg-[#E5A615] px-6 md:px-8 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
                       Donate Now
                    </button>
                </motion.div>
                </motion.div>

            </div>
        </>
    )
}

export default AboutLastSection;