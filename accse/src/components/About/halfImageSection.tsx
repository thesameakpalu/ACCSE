import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import image from '/src/assets/images/AboutSmallImage.webp'
import svg1 from '/src/assets/svgs/aboutHalfImageSection-1.svg'
import svg2 from '/src/assets/svgs/aboutHalfImageSection-2.svg'
import svg3 from '/src/assets/svgs/aboutHalfImageSection-3.svg'


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


function HalfImageSection () {


const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // trigger when 30% is visible
  });

  return (
      <>
                {/*LARGE SCREENS */}
   <div ref={ref} className="relative hidden md:block my-[500px] w-full py-16">
  {/* Main container aligned left */}
  <div className="relative w-full h-[600px] ml-0">
    <motion.div
              variants={fancyEntrance}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="w-full flex flex-col items-center gap-6"
            >
    
    {/* Half-circle image on the left with right side visible */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 md:w-[350px] md:h-[700px] lg:w-[500px] lg:h-[900px]   overflow-hidden rounded-r-full">
      <img
        src={image}
        alt="Half Circle"
        className="w-full h-full  object-cover  object-[82%_0%]"
      />
    </div>

    {/* Top Right of image */}
    <motion.div
                                         variants={itemVariants}
     className="absolute md:-top-30 lg:-top-50 md:left-[200px] lg:left-[370px] flex items-center gap-4 ">
      <img src={svg1} alt="Mission" className="lg:w-20 lg:h-20 md:w-[70px] md:h-[70px] self-start" />
      <div>
        <p className="font-bold font-Inter md:text-base lg:text-lg italic text-[#1D7948]">Our Mission</p>
        <p className='font-Inter md:text-base lg:text-lg font-medium'>
          Our mission is to educate, engage, and <br  /> empower youth and women to develop <br  /> innovative,
          community-driven climate <br /> solutions that build resilience and <br /> sustainability in vulnerable communities <br  /> across Ghana.
        </p>
      </div>
    </motion.div>

    {/* Middle Right of image */}
    <motion.div
                                         variants={itemVariants}
     className="absolute lg:top-[380px] md:top-[340px] -translate-y-1/2 lg:left-[620px] md:left-[420px] flex items-center gap-4 ">
      <img src={svg2} alt="Vision" className="w-24 h-24 self-start" />
      <div>
        <p className="font-bold font-Inter md:text-base lg:text-lg italic text-[#1D7948]">Our Vision</p>
        <p className='font-Inter md:text-base lg:text-lg font-medium'>
          Our vision is to become a leading force in <br className='md:hidden lg:block' /> Africa for driving innovative, inclusive,
          and <br className='md:hidden lg:block' /> sustainable climate solutions, led by <br className='md:hidden lg:block' /> empowered youth and women who are <br className='md:hidden lg:block' /> transforming their communities and <br className='md:hidden lg:block' /> shaping a resilient future.
        </p>
      </div>
    </motion.div>

    {/* Bottom Right of image */}
    <motion.div
                                         variants={itemVariants}
     className="absolute md:-bottom-30 lg:-bottom-50 md:left-[250px] lg:left-[370px] flex items-center gap-4 ">
      <img src={svg3} alt="Values" className="w-20 h-20 self-start" />
      <div>
        <p className="font-bold font-Inter text-lg italic text-[#1D7948]">Our Values</p>
        <p className='font-Inter text-lg font-medium'>
          We uphold diversity, passion, <br /> transparency, accountability and probity, <br  />
          honesty, justice, self-reliance, equity and <br  /> equality across all divides.
        </p>
      </div>
    </motion.div>
    </motion.div>
  </div>
</div>

                {/*SMALL SCREENS */}

 <div className="relative w-full py-12 block md:hidden   space-y-10">
  {/* Half-circle image flush to the left */}
  <div className="w-[200px] h-[400px] overflow-hidden rounded-r-full">
    <img
      src={image}
      alt="Half Circle"
      className="w-full h-full object-cover object-[82%_0%]"
    />
  </div>

  {/* Mission Section */}
  <div className="flex items-start gap-4 px-5">
    <img src={svg1} alt="Mission" className="w-16 h-16" />
    <div>
      <p className="font-bold font-Inter text-base italic text-[#1D7948]">Our Mission</p>
      <p className="font-Inter text-sm font-medium">
        Our mission is to educate, engage, and empower youth and women to develop innovative, community-driven climate solutions that build resilience and sustainability in vulnerable communities across Ghana.
      </p>
    </div>
  </div>

  {/* Vision Section */}
  <div className="flex items-start gap-4 px-5">
    <img src={svg2} alt="Vision" className="w-20 h-20" />
    <div>
      <p className="font-bold font-Inter text-base italic text-[#1D7948]">Our Vision</p>
      <p className="font-Inter text-sm font-medium">
        Our vision is to become a leading force in Africa for driving innovative, inclusive, and sustainable climate solutions, led by empowered youth and women who are transforming their communities and shaping a resilient future.
      </p>
    </div>
  </div>

  {/* Values Section */}
  <div className="flex items-start gap-4 px-5">
    <img src={svg3} alt="Values" className="w-16 h-16" />
    <div>
      <p className="font-bold font-Inter text-base italic text-[#1D7948]">Our Values</p>
      <p className="font-Inter text-sm font-medium">
        We uphold diversity, passion, transparency, accountability and probity, honesty, justice, self-reliance, equity and equality across all divides.
      </p>
    </div>
  </div>
</div>







</>
  );
};

export default HalfImageSection;
