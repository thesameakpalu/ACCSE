import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import img1 from '/src/assets/images/lastSectionMask2.webp'
import img2 from '/src/assets/images/lastSectionMask1.webp'

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

function LastSection() {

    const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger animation once
    threshold: 0.5,      // Trigger when 40% of the section is visible
  });
  return (
    <>
                {/*LARGE SCREENS */}
      <div ref={ref} className="mainContainer hidden mb-50 mt-60 md:flex justify-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="w-full flex flex-col items-center gap-6"
        >
        <div className="subContainer w-[90%] flex items-center justify-center gap-10">
          {/* LEFT TEXT SECTION */}
         <div className="w-1/2 flex flex-col justify-center items-center text-center gap-16">
  <div className='space-y-5'>
    <p className="font-bold font-RobotoSerif text-left text-[#1D7948]">
      The planet needs us. Now more than ever.
    </p>
    <p className="font-semibold font-Roboto text-left text-4xl">
      Your donation helps <br /> fight climate change <br /> and build
      a better, safer <br /> world for everyone.
    </p>
  </div>

  <button className="mt-4 font-ISsans text-sm text-white bg-[#E5A615] px-4 py-2 mr-20  rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105 self-center">
    Read More
  </button>
</div>



          {/* RIGHT MASKED IMAGE SECTION */}
          <div className="relative w-1/2 h-[500px]"> {/* ← FIXED HEIGHT */}
            <img
              src={img1}
              alt="Masked Content"
              className="w-full h-full object-cover"  // ← FULL HEIGHT
              style={{
                WebkitMaskImage: `url(${img2})`,
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%', // ← Ensure full coverage
                WebkitMaskPosition: 'center',
                maskImage: `url(${img2})`,
                maskRepeat: 'no-repeat',
                maskSize: '100% 100%',
                maskPosition: 'center',
                backgroundColor: '#000', // Optional for testing visibility
              }}
            />
          </div>
        </div>
        </motion.div>
      </div>

                  {/*SMALL SCREENS  */}
      <div ref={ref} className="mainContainer md:hidden my-50 flex flex-col items-center">
         <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="w-full flex flex-col items-center gap-6"
        >
  <div className="subContainer w-[90%] flex flex-col items-center gap-20">
    {/* TEXT SECTION */}
    <div className="flex flex-col items-center text-center gap-6 w-full">
      <div className="space-y-4 w-full">
        <p className="font-bold font-RobotoSerif text-[#1D7948] text-sm text-center">
          The planet needs us. Now more than ever.
        </p>
        <p className="font-semibold font-Roboto text-2xl text-center">
          Your donation helps fight climate change  and build
          a better, safer  world for everyone.
        </p>
      </div>

      <button className="self-center font-ISsans text-sm text-white bg-[#E5A615] px-4 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read More
      </button>
    </div>

    {/* MASKED IMAGE SECTION */}
    <div className="relative w-full h-[350px]">
      <img
        src={img1}
        alt="Masked Content"
        className="w-full h-full object-cover"
        style={{
          WebkitMaskImage: `url(${img2})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          WebkitMaskPosition: 'center',
          maskImage: `url(${img2})`,
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
          maskPosition: 'center',
        }}
      />
    </div>
  </div>
  </motion.div>
</div>

    </>
  );
}

export default LastSection;
