import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import takeNoteSticker from '/src/assets/images/takeNoteSticker.webp'
import groupImg from '/src/assets/images/WhatSetsUsgroupImage.webp'
import svg1 from '/src/assets/svgs/WhatSetsUs-1.svg';
import svg2 from '/src/assets/svgs/WhatSetsUs-2.svg';
import svg3 from '/src/assets/svgs/WhatSetsUs-3.svg';
import svg4 from '/src/assets/svgs/WhatSetsUs-4.svg';
import dropDownArrow from '/src/assets/svgs/dropDownArrow.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: 'easeOut',
    },
  },
};


function WhatSetsUs() {

  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger animation once
    threshold: 0.4,      // Trigger when 40% of the section is visible
  });

                const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            icon: svg1,
            title: 'Youth at the center',
            content: 'We believe in empowering young people to drive change by giving them leadership roles and ownership.',
        },
        {
            icon: svg2,
            title: 'Education as a First Approach',
            content: 'We prioritize learning and capacity building as the foundation for all development efforts.',
        },
        {
            icon: svg3,
            title: 'Community-driven Solutions',
            content: 'All solutions we build come from deep engagement with the local communities we serve.',
        },
        {
            icon: svg4,
            title: 'Global Engagement',
            content: 'We connect local actions to global networks and policies, making our impact broader.',
        },
    ];

    return(
        <>
                        {/*LARGE SCREENS */}
           <div ref={ref} className="mainContainer hidden md:flex justify-center my-80">
            <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="w-full flex flex-col items-center gap-6"
                      >
                <div className="subContainer w-[90%] flex h-[600px]">
                            {/*LEFT ITEMS CONTAINER */}
                    <div className="relative flex flex-col w-1/2 md:px-5 px-10 pb-10 md:overflow-y-auto lg:overflow-y-hidden " style={{ backgroundImage: `url('/images/AboutSmallImage.webp')` }}> 
                        <div className="absolute inset-0 w-full h-full  bg-[#091F48CC]/80"></div> {/*OVERLAY */}

                       <div className="relative flex justify-center items-center z-10">
                            <img src={takeNoteSticker} alt="Take-Note Sticker" className="w-[70%]" />
                            <p className="absolute text-black md:text-lg lg:text-2xl font-semibold font-Roboto text-center">
                                What Sets Us Apart?
                            </p>
                        </div>
                                
                         <div className="flex flex-col relative z-10 justify-center items-center md:px-5 lg:px-10 py-5 bg-[#04122C] text-white">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col my-5 gap-2 w-full">
                    {/* Header row */}
                    <div
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <img src={item.icon} alt={item.title} />
                            <p className="font-RobotoSerif font-medium text-lg">{item.title}</p>
                        </div>
                        <img
                            src={dropDownArrow}
                            alt="Drop Down Arrow"
                            className={`transition-transform duration-300 ${
                                openIndex === index ? 'rotate-180' : ''
                            }`}
                        />
                    </div>

                    {/* Expandable content */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <p className="text-sm mt-2 text-gray-300">{item.content}</p>
                    </div>

                    <div className="h-[0.5px] w-full bg-[#F6F4F4CC]/80"></div>
                </div>
            ))}
        </div>       
                    </div>

                   
                            {/*RIGHT ITEMS CONTAINER */}
                    <div className='w-1/2'> 
                            <img src={groupImg} alt='Group Image' className='w-full h-full object-center object-cover' />
                                
                    </div>

                </div>
            </motion.div>
            </div>


                        {/*SMALL SCREENS */}

            <div  className="mainContainer flex justify-center my-50 md:hidden"> {/* HIDE ON MEDIUM AND UP */}
              
  <div className="subContainer w-[90%] flex flex-col">

    {/* TOP: IMAGE CONTAINER */}
    <div className="w-full h-60">
      <img src={groupImg} alt="Group Image" className="w-full h-full object-cover object-center" />
    </div>

    {/* BOTTOM: CONTENT CONTAINER */}
    <div
      className="relative flex flex-col w-full px-5 py-10"
      style={{ backgroundImage: `url('/images/AboutSmallImage.webp')` }}
    >
      <div className="absolute inset-0 w-full h-full bg-[#091F48CC]/80"></div>

      {/* TITLE */}
      <div className="relative z-10 flex justify-center items-center mb-6">
        <img src={takeNoteSticker} alt="Take-Note Sticker" className="w-[80%]" />
        <p className="absolute text-black text-lg font-semibold font-Roboto text-center">
          What Sets Us Apart?
        </p>
      </div>

      {/* ITEMS LIST */}
      <div className="relative z-10 flex flex-col justify-center items-center px-3 py-4 bg-[#04122C] text-white rounded-md">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col my-4 gap-2 w-full">
            <div
              onClick={() => toggleDropdown(index)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
                <p className="font-RobotoSerif font-medium text-base">{item.title}</p>
              </div>
              <img
                src={dropDownArrow}
                alt="Drop Down Arrow"
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm mt-1 text-gray-300">{item.content}</p>
            </div>

            <div className="h-[0.5px] w-full bg-[#F6F4F4CC]/80"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default WhatSetsUs;