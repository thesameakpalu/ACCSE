import { Link } from 'react-router-dom';
import img1 from '/src/assets/images/news/1.webp'
import img2 from '/src/assets/images/news/2.webp'
import img3 from '/src/assets/images/news/3.webp'
import img4 from '/src/assets/images/news/4.webp'
import img5 from '/src/assets/images/news/5.webp'
import img6 from '/src/assets/images/news/6.webp'
import img7 from '/src/assets/images/news/7.webp'




function NewsContents() {
    return(
        <>
            <div className="mianContainer flex justify-center my-28 md:my-40 items-center">
                <div className="subContainer flex flex-col justify-center items-center w-[90%]">
                    <p className='font-Roboto font-bold text-[#EFA51E] text-2xl 2xl:self-center self-start mb-10'>NEWS</p>

                    <div>
                        <p className='font-Inter font-bold  italic text-[#1D7948] text-xl'>Explore our Latest news and Updates</p>

                        <div className="flex justify-center items-center mt-10">
  {/* CONTAINER FOR ALL NEWS UPDATES */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-20 md:gap-10 w-full items-stretch">
    
    {/* UPDATE 1 */}
    <div className="flex flex-col gap-3 bg-white h-full  rounded-md">
      <img src={img1} alt="Climate Change Seminar" className="w-full h-56 object-cover rounded-t-md" />
        <div className='flex flex-col justify-between flex-grow border border-black/12 border-t-0 pb-5'>
      <p className="mt-3 text-lg font-medium font-Roboto p-3 ">
        Climate Change education at the < br /> Department of Animal Biology <br /> and Conservation Science, <br /> University of Ghana
      </p>
       
        <Link to="/News/CLIMATE_EDUCATION">
      <button className="font-ISsans self-start mt-4 ml-3 text-sm text-white bg-[#E5A615] px-5 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read
      </button>
      </Link>
      </div>
    </div>

    {/* UPDATE 2 */}
    <div className="flex flex-col h-full gap-3 bg-white  rounded-md">
      <img src={img2} alt="Signing of Memorandum of Understanding(MOU)" className="w-full h-56 object-cover rounded-t-md" />
        <div className='flex flex-col justify-between flex-grow  border border-black/12 border-t-0 pb-5'>
      <p className="mt-3 text-lg font-medium font-Roboto p-3 ">
        ACCSE and KNUTSFORD <br /> University college have <br /> announced the signing of a <br /> Memorandum of Understanding <br /> (MOU)
      </p>
       <Link to="/News/CSSE_KNUSTFORD">
      <button className="font-ISsans self-start mt-4 ml-3 text-sm text-white bg-[#E5A615] px-5 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read
      </button>
      </Link>
      </div>
    </div>

    {/* UPDATE 3 */}
    <div className="flex flex-col h-full gap-3 bg-white  rounded-md">
      <img src={img3} alt="Signing of Memorandum of Understanding(MOU)" className="w-full h-56 object-cover rounded-t-md" />
        <div className='flex flex-col justify-between flex-grow  border border-black/12 border-t-0 pb-5'>
      <p className="mt-3 text-lg font-medium font-Roboto p-3 ">
         ACCSE partners GES and HBCU <br /> Green is set to launch the Ghana <br /> Globe Program and Greening <br /> Schools Initiative
      </p>
      <Link to="/News/CSSE_GES_HBCU">
      <button className="font-ISsans self-start mt-4 ml-3 text-sm text-white bg-[#E5A615] px-5 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read
      </button>
      </Link>
      </div>
    </div>

    {/* UPDATE 4 */}
    <div className="flex flex-col h-full gap-3 bg-white  rounded-md">
      <img src={img4} alt="Signing of Memorandum of Understanding(MOU)" className="w-full h-56 object-cover rounded-t-md" />
        <div className='flex flex-col justify-between flex-grow  border border-black/12 border-t-0 pb-5'>
      <p className="mt-3 text-lg font-medium font-Roboto p-3 ">
        COP 28 in Retrospect
      </p>
      <Link to="/News/COP_28">
      <button className="font-ISsans self-start mt-4 ml-3 text-sm text-white bg-[#E5A615] px-5 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read
      </button>
      </Link>
      </div>
    </div>

    {/* UPDATE 5 */}
     <div className="flex flex-col h-full gap-3 bg-white  rounded-md">
      <img src={img5} alt="Signing of Memorandum of Understanding(MOU)" className="w-full h-56 object-cover rounded-t-md" />
        <div className='flex flex-col justify-between flex-grow  border border-black/12 border-t-0 pb-5'>
      <p className="mt-3 text-lg font-medium font-Roboto p-3 ">
        COP 27 in Retrospect
      </p>
      <Link to="/News/COP_27_IN_RETROSPECT">
      <button className="font-ISsans self-start mt-4 ml-3 text-sm text-white bg-[#E5A615] px-5 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read
      </button>
      </Link>
      </div>
    </div>

    {/* UPDATE 6 */}
    <div className="flex flex-col h-full gap-3 bg-white  rounded-md">
      <img src={img6} alt="Signing of Memorandum of Understanding(MOU)" className="w-full h-56 object-cover rounded-t-md" />
        <div className='flex flex-col justify-between flex-grow  border border-black/12 border-t-0 pb-5'>
      <p className="mt-3 text-lg font-medium font-Roboto p-3 ">
        COP 27
      </p>
      <button className="font-ISsans self-start mt-4 ml-3 text-sm text-white bg-[#E5A615] px-5 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read
      </button>
      </div>
    </div>

    {/* UPDATE 7 */}
    <div className="flex flex-col h-full gap-3 bg-white  rounded-md">
      <img src={img7} alt="Signing of Memorandum of Understanding(MOU)" className="w-full h-56 object-cover rounded-t-md" />
        <div className='flex flex-col justify-between flex-grow  border border-black/12 border-t-0 pb-5'>
      <p className="mt-3 text-lg font-medium font-Roboto p-3 ">
        Young Climate Innovators <br /> Program (YCLIP)
      </p>
      <button className="font-ISsans self-start mt-4 ml-3 text-sm text-white bg-[#E5A615] px-5 py-2 rounded-sm transition-transform duration-300 ease-in-out transform hover:scale-105">
        Read
      </button>
      </div>
    </div>

  </div>
</div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default NewsContents;