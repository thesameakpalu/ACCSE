import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Header from "./Header";
import Footer from "./Footer";
import gall1 from '/src/assets/images/gallery/1.webp'
import gall2 from '/src/assets/images/gallery/2.webp'
import gall3 from '/src/assets/images/gallery/3.webp'
import gall4 from '/src/assets/images/gallery/4.webp'
import gall5 from '/src/assets/images/gallery/5.webp'
import gall6 from '/src/assets/images/gallery/6.webp'
import gall7 from '/src/assets/images/aboutPageAboutSection.webp'
import gall8 from '/src/assets/images/gallery/8.webp'
import gall9 from '/src/assets/images/gallery/9.webp'
import gall10 from '/src/assets/images/gallery/10.webp'
import gall11 from '/src/assets/images/gallery/11.webp'
import gall12 from '/src/assets/images/gallery/12.webp'
import gall13 from '/src/assets/images/gallery/13.webp'
import gall14 from '/src/assets/images/gallery/14.webp'



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


function AppGallery() {

     const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // trigger when 30% is visible
  });

    return(
        <>
        <Header />
            <div ref={ref} className="mainConatiner flex justify-center items-center pt-32 md:pt-52 mb-40">
                <div className="subContainer flex flex-col justify-center items-center space-y-10 w-[90%] ">
                    <motion.div
                              variants={fancyEntrance}
                              initial="hidden"
                              animate={inView ? 'visible' : 'hidden'}
                              className="w-full flex flex-col items-center gap-6"
                            >
                    <p className="font-Roboto font-bold text-[#EFA51E] text-3xl self-start ml-5">Gallery</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 py-6">
                        {/* GALLERY IMAGES */}
                         <motion.img
                          variants={itemVariants} src={gall1} alt="ACCSE-Gallery-1" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall2} alt="ACCSE-Gallery-2" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall3} alt="ACCSE-Gallery-3" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall4} alt="ACCSE-Gallery-4" className="w-full h-60 object-cover object-center" /> 
                         <motion.img
                          variants={itemVariants} src={gall5} alt="ACCSE-Gallery-5" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall6} alt="ACCSE-Gallery-6" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall7} alt="ACCSE-Gallery-7" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall8} alt="ACCSE-Gallery-8" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall9} alt="ACCSE-Gallery-9" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall10} alt="ACCSE-Gallery-10" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall11} alt="ACCSE-Gallery-11" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall12} alt="ACCSE-Gallery-12" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall13} alt="ACCSE-Gallery-13" className="w-full h-60 object-cover object-center" />
                         <motion.img
                          variants={itemVariants} src={gall14} alt="ACCSE-Gallery-14" className="w-full h-60 object-cover object-center" />
                        </div>


                </motion.div>
                </div>

            </div>
        <Footer />
        </>
    )
}

export default AppGallery;