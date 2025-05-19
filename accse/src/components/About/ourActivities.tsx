import img1 from '/src/assets/images/aboutActivities-1.webp'
import img2 from '/src/assets/images/aboutActivities-2.webp'
import img3 from '/src/assets/images/aboutActivities-3.webp'
import img4 from '/src/assets/images/aboutActivities-4.webp'


function OurActivities() {
    return(
        <>
                {/*LARGE CONTAINERS */}
            <div className="mainContainer hidden md:flex justify-center my-40 bg-[#091F48CC]/90">
                <div className="subContainer flex flex-col justify-center py-10 text-white gap-7 px-5 xl:px-0">

                    <p className='font-Inter font-bold italic text-lg'>Our Activities</p>

                    <p className='font-Inter font-medium text-[#F6F4F4CC]/80'>Through our Programs and Projects, we are able to empower all our beneficiaries to fashion out and innovate cost effective climate solutions. </p>

                    <div className="flex justify-center items-start gap-5 font-Roboto font-medium text-lg "> {/* CONTAINER FOR IMAGES */}
                        <div className='flex flex-col items-center w-1/4'> {/* IMAGE 1 CONTAINER */}
                            <img src={img1} alt='YCLIP' className='h-40 w-full' />
                            <p className=' mt-2 text-left'>Young Climate <br /> Innovators Program (YCLIP)</p>
                        </div>

                        <div className='flex flex-col items-center w-1/4'> {/* IMAGE 2 CONTAINER */}
                            <img src={img2} alt='RUWEP' className='h-40 w-full' />
                            <p className=' text-left mt-2'>Rural Women <br /> Empowerment <br /> Program (RUWEP)</p>
                        </div>

                        <div className='flex flex-col items-center w-1/4'> {/* IMAGE 3 CONTAINER */}
                            <img src={img3} alt='Greening Schools' className='h-40 w-full' />
                            <p className='text-center mt-2'>Greening Schools Initiative</p>
                        </div>

                        <div className='flex flex-col items-center w-1/4'> {/* IMAGE 4 CONTAINER */}
                            <img src={img4} alt='Short Courses' className='h-40 w-full' />
                            <p className='text-center mt-2'>Short Courses</p>
                        </div>
                        </div>


                </div>

            </div>

            {/*SMALL CONTAINERS */}

            <div className="mainContainer flex  my-40 justify-center bg-[#091F48CC]/90 md:hidden">
  <div className="subContainer flex flex-col justify-center py-10 text-white gap-7 px-5">

    <p className='font-Inter font-bold italic text-lg'>Our Activities</p>

    <p className='font-Inter font-medium text-[#F6F4F4CC]/80'>
      Through our Programs and Projects, we are able to empower all our beneficiaries to fashion out and innovate cost effective climate solutions.
    </p>

    <div className="flex flex-col gap-8 font-Roboto font-medium text-base">
      {/* IMAGE 1 CONTAINER */}
      <div className='flex flex-col items-start'>
        <img src={img1} alt='YCLIP' className='w-full h-48 object-cover rounded' />
        <p className='mt-2'>Young Climate <br /> Innovators Program (YCLIP)</p>
      </div>

      {/* IMAGE 2 CONTAINER */}
      <div className='flex flex-col items-start'>
        <img src={img2} alt='RUWEP' className='w-full h-48 object-cover rounded' />
        <p className='mt-2'>Rural Women <br /> Empowerment <br /> Program (RUWEP)</p>
      </div>

      {/* IMAGE 3 CONTAINER */}
      <div className='flex flex-col items-start'>
        <img src={img3} alt='Greening Schools' className='w-full h-48 object-cover rounded' />
        <p className='mt-2'>Greening Schools Initiative</p>
      </div>

      {/* IMAGE 4 CONTAINER */}
      <div className='flex flex-col items-start'>
        <img src={img4} alt='Short Courses' className='w-full h-48 object-cover rounded' />
        <p className='mt-2'>Short Courses</p>
      </div>
    </div>
    
  </div>
</div>

        </>
    )
}

export default OurActivities;