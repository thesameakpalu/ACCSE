import CountUp from 'react-countup';
import svg1 from '/src/assets/svgs/impactInAction-1.svg';
import svg2 from '/src/assets/svgs/impactInAction-2.svg';
import svg3 from '/src/assets/svgs/impactInAction-3.svg';


function ImpactInAction() {
    return(
        <>
                    {/*LARGE SCREENS */}
            <div className="mainContainer hidden  md:flex flex-col justify-center items-center my-20">
                <div className="subContainer space-y-16">
                    <p className="text-center text-[#EFA51E] font-Inter italic  font-bold text-xl">Impact In Action</p>

                    <p className="font-Roboto font-medium text-center text-xl">Change is possible when communities lead. These are the milestones we've <br /> reached together:</p>


                    <div className='flex justify-center items-center md:gap-12 lg:gap-20 xl:gap-30 mx-10'> {/*CONTAINER FOR SVGS */}
                                             {/*SVG 1 */}
                        <div className='flex flex-col gap-2 justify-center items-center bg-[#D9D9D940] p-12 rounded-full md:w-48 md:h-48 lg:w-64 lg:h-64'>

                            <img src={svg1} alt='Projects Svg' className='md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px]' />

                            <div className='text-center'>
                                <p className='font-RobotoSerif font-bold text-[#1D7948] md:text-xl lg:text-3xl'>
                                 <CountUp end={15} duration={2} />+
                                 </p>
                                <p className='font-RobotoSerif font-medium text-[#9E9D9D] md:text-base lg:text-xl'>Projects</p>
                            </div>
                        </div>

                                               {/*SVG 2 */}
                        <div className='flex flex-col gap-2 justify-center items-center bg-[#D9D9D940] p-8 rounded-full md:w-48 md:h-48 lg:w-64 lg:h-64'>

                            <img src={svg2} alt='Projects Svg' className='md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px]' />

                            <div className='text-center'>
                                <p className='font-RobotoSerif font-bold text-[#1D7948] md:text-xl lg:text-3xl'>
                                 $<CountUp end={5000} duration={2} />+
                                 </p>
                                <p className='font-RobotoSerif font-medium text-[#9E9D9D] md:text-base lg:text-xl'>Donations Received</p>
                            </div>
                        </div>

                                               {/*SVG 3 */}
                        <div className='flex flex-col gap-2 justify-center items-center bg-[#D9D9D940] p-12 rounded-full md:w-48 md:h-48 lg:w-64 lg:h-64'>

                            <img src={svg3} alt='Projects Svg' className='md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px]' />

                            <div className='text-center'>
                                <p className='font-RobotoSerif font-bold text-[#1D7948] md:text-xl lg:text-3xl'>
                                 <CountUp end={200} duration={2} />+
                                 </p>
                                <p className='font-RobotoSerif font-medium text-[#9E9D9D] md:text-base lg:text-xl'>Lives Impacted</p>
                            </div>
                        </div>

                        

                    </div>

                </div>

            </div>

                        {/*SMALL SCREENS */}
            <div className="mainContainer md:hidden flex flex-col justify-center items-center my-20">
                <div className="subContainer space-y-16">
                    <p className="text-center text-[#EFA51E] font-Inter italic  font-bold text-xl">Impact In Action</p>

                    <p className="font-Roboto font-medium text-center text-lg mx-5">Change is possible when communities lead. These are the milestones we've  reached together:</p>


                    <div className='flex flex-col justify-center items-center gap-12 mx-10'> {/*CONTAINER FOR SVGS */}
                                             {/*SVG 1 */}
                        <div className='flex flex-col gap-2 justify-center items-center bg-[#D9D9D940] p-12 rounded-full w-36 h-36 '>

                            <img src={svg1} alt='Projects Svg' className='w-[40px] h-[40px] ' />

                            <div className='text-center'>
                                <p className='font-RobotoSerif font-bold text-[#1D7948] text-lg '>
                                 <CountUp end={15} duration={2} />+
                                 </p>
                                <p className='font-RobotoSerif font-medium text-[#9E9D9D] text-sm'>Projects</p>
                            </div>
                        </div>

                                               {/*SVG 2 */}
                        <div className='flex flex-col gap-2 justify-center items-center bg-[#D9D9D940] p-8 rounded-full w-36 h-36 '>

                            <img src={svg2} alt='Projects Svg' className='w-[40px] h-[40px]' />

                            <div className='text-center'>
                                <p className='font-RobotoSerif font-bold text-[#1D7948] text-lg'>
                                 $<CountUp end={5000} duration={2} />+
                                 </p>
                                <p className='font-RobotoSerif font-medium text-[#9E9D9D] text-sm'>Donations Received</p>
                            </div>
                        </div>

                                               {/*SVG 3 */}
                        <div className='flex flex-col gap-2 justify-center items-center bg-[#D9D9D940] p-12 rounded-full w-36 h-36 '>

                            <img src={svg3} alt='Projects Svg' className='w-[40px] h-[40px]' />

                            <div className='text-center'>
                                <p className='font-RobotoSerif font-bold text-[#1D7948] text-lg'>
                                 <CountUp end={200} duration={2} />+
                                 </p>
                                <p className='font-RobotoSerif font-medium text-[#9E9D9D] text-sm'>Lives Impacted</p>
                            </div>
                        </div>

                        

                    </div>

                </div>

            </div>
            
        </>
    )
}
export default ImpactInAction;