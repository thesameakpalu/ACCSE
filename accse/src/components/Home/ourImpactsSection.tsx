import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import tornImage from '/src/assets/images/tornPage-mockup.webp';
import svg1 from '/src/assets/svgs/homeImpactSection-1.svg';
import svg2 from '/src/assets/svgs/homeImpactSection-2.svg';
import svg3 from '/src/assets/svgs/homeImpactSection-3.svg';
import svg4 from '/src/assets/svgs/homeImpactSection-4.svg';
import svg5 from '/src/assets/svgs/homeImpactSection-5.svg';



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


function OurImpacts() {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // trigger when 30% is visible
  });
    return(
        <>
                    {/*LARGE SCREENS */}
            <div ref={ref} className="mainContainer hidden md:block  my-20">
                        
                <div className="subContainer flex justify-center flex-col items-center">
                    <motion.div
          variants={fancyEntrance}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="w-full flex flex-col items-center gap-6"
        >
                    <img src={tornImage} alt='Torn Image MockUp' className='w-full h-[60px] object-cover pointer-events-none' />

                    <p className='font-Inter text-xl italic text-[#EFA51E] font-bold text-center mt-20'>Our Impacts</p>
                    <p className='text-center font-Roboto font-medium text-xl mt-5'>Change is possible when communities lead. These are the milestones we've <br  /> reached together:</p>

                    <div  className=' flex flex-col gap-20 bg-white pt-10 '> {/*SVGS */}
                        <div className="flex justify-center gap-10 mx-10 "> {/*FIRST 3 SVG'S */}
                                            {/*SVG 1 */}
                            <motion.div
                                     variants={itemVariants}
                             className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg1} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Action For Climate Empowerment</p>
                                <p className='font-Inter font-light my-3'>We are linking classroom learning to real-world<br className='md:hidden lg:block' /> climate solutions through ACE.</p>
                            </div>

                            <div className='flex'>

                             <a href='/Our_Impacts#Action_For_Climate_Empowerment'>  <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button>
                              </a>      
                                    
                            </div>
                            </motion.div>
                                            {/*SVG 2 */}
                            <motion.div
                                     variants={itemVariants}
                             className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg2} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Biodiversity Conservation</p>
                                <p className='font-Inter font-light my-3'>We help cocoa farmers protect biodiversity <br className='md:hidden lg:block' /> through education and sustainable practices.</p>
                            </div>

                            <div className='flex'>
                                    <a href='/Our_Impacts#Biodiversity_Conservation'>
                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button>
                                    </a>
                                    
                            </div>
                            </motion.div>
                                            {/*SVG 3 */}
                            <motion.div
                                     variants={itemVariants}
                             className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg3} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Climate Resilient Agriculture</p>
                                <p className='font-Inter font-light my-3'>We’re building food security through hands-on <br className='md:hidden lg:block' /> climate-smart agriculture training.</p>
                            </div>

                            <div className='flex'>
                                     <a href='/Our_Impacts#Climate_Resilient_Agriculture'>
                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button>
                                    </a>
                                    
                            </div>
                            </motion.div>
                        </div>


                        <div className="flex justify-center gap-10 mx-10 "> {/*SECOND  2 SVG'S */}
                                                                        
                                            {/*SVG 4 */}
                            <motion.div
                                     variants={itemVariants}
                             className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg4} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Forest Restoration</p>
                                <p className='font-Inter font-light my-3'>We mobilize communities to plant trees and <br className='md:hidden lg:block' /> protect ecosystems through the 1L1T project.</p>
                            </div>

                            <div className='flex'>

                                <a href='/Our_Impacts#Forest_Restoration'>

                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button>
                                    </a>
                            </div>
                            </motion.div>
                                            {/*SVG 5 */}
                            <motion.div
                                     variants={itemVariants}
                            className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg5} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Waste Management</p>
                                <p className='font-Inter font-light my-3'>We’re improving e-waste practices through <br className='md:hidden lg:block' /> community partnerships and <br className='md:hidden lg:block' /> sustainable training.</p>
                            </div>

                            <div className='flex'>

                                <a href='/Our_Impacts#Waste_Management'>

                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button>
                                    </a>
                            </div>
                            </motion.div>
                        </div>

                        

                    </div>
                    </motion.div>
                </div>
                
            </div>

                    {/*SMALL SCREENS */}
            <div className="mainContainer block md:hidden  my-20">

                <div className="subContainer flex justify-center flex-col items-center">

                    
                    
                    <img src={tornImage} alt='Torn Image MockUp' className='w-full h-[60px] object-cover pointer-events-none' />

                    <p className='font-Inter text-xl italic text-[#EFA51E] font-bold text-center mt-20'>Our Impacts</p>
                    <p className='text-center font-Roboto font-medium text-xl mt-5'>Change is possible when communities lead. These are the milestones we've <br className='md:hidden lg:block'   /> reached together:</p>

                    <div  className=' flex flex-col gap-20 bg-white pt-10 '> {/*SVGS */}
                        <div className="flex flex-col justify-center gap-10 mx-10 "> {/*FIRST 3 SVG'S */}
                                            {/*SVG 1 */}
                            <div className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg1} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto font-medium'>Action For Climate Empowerment</p>
                                <p className='font-Inter font-light my-3'>We are linking classroom learning to real-world<br className='md:hidden lg:block' /> climate solutions through ACE.</p>
                            </div>

                            <div className='flex'>
                                     <a href='/Our_Impacts#action_for_climate_empowerment'>
                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button> </a>
                                    
                            </div>
                            </div>
                                            {/*SVG 2 */}
                            <div className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg2} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Biodiversity Conservation</p>
                                <p className='font-Inter font-light my-3'>We help cocoa farmers protect biodiversity <br className='md:hidden lg:block' /> through education and sustainable practices.</p>
                            </div>

                            <div className='flex'>
                                     <a href='/Our_Impacts#biodiversity_conservation'>
                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button> </a>
                                    
                            </div>
                            </div>
                                            {/*SVG 3 */}
                            <div className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg3} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Climate Resilient Agriculture</p>
                                <p className='font-Inter font-light my-3'>We’re building food security through hands-on <br className='md:hidden lg:block' /> climate-smart agriculture training.</p>
                            </div>

                            <div className='flex'>
                                    <a href='/Our_Impacts#climate_resilient_agriculture'>

                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button> </a>
                                    
                            </div>
                            </div>
                        </div>


                        <div className="flex flex-col justify-center gap-10 mx-10 "> {/*SECOND  2 SVG'S */}
                                                                        
                                            {/*SVG 4 */}
                            <div className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg4} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Forest Restoration</p>
                                <p className='font-Inter font-light my-3'>We mobilize communities to plant trees and <br className='md:hidden lg:block' /> protect ecosystems through the 1L1T project.</p>
                            </div>

                            <div className='flex'>
                                <a href='/Our_Impacts#forest_restoration'>

                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button> </a>
                                    
                            </div>
                            </div>
                                            {/*SVG 5 */}
                            <div className='flex flex-col  justify-center bg-white shadow-[0_0px_20px_rgba(0,0,0,0.2)] px-5 py-10 space-y-5 rounded-xl'>
                            <img src={svg5} alt='SVG 1' className='w-[60px] h-[60px]' />
                            <div>
                                <p className='font-Roboto text-lg font-medium'>Waste Management</p>
                                <p className='font-Inter font-light my-3'>We’re improving e-waste practices through <br className='md:hidden lg:block' /> community partnerships and <br className='md:hidden lg:block' /> sustainable training.</p>
                            </div>

                            <div className='flex'>
                                    <a href='/Our_Impacts#waste_management'>

                                   <button className="flex items-center gap-2 text-[#E5A615] text-sm font-medium hover:text-blue-200">
                                    Discover how
                                    <svg className='hover:text-blue-200' width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.11 4.35355C17.3052 4.15829 17.3052 3.84171 17.11 3.64645L13.928 0.464466C13.7327 0.269204 13.4161 0.269204 13.2209 0.464466C13.0256 0.659728 13.0256 0.976311 13.2209 1.17157L16.0493 4L13.2209 6.82843C13.0256 7.02369 13.0256 7.34027 13.2209 7.53553C13.4161 7.7308 13.7327 7.7308 13.928 7.53553L17.11 4.35355ZM-0.00219727 4V4.5H16.7564V4V3.5H-0.00219727V4Z" fill="currentColor"/>
                                    </svg>

                                    </button> </a>
                                    
                            </div>
                            </div>
                        </div>

                        

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default OurImpacts;