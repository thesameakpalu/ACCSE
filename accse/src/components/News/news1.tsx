import Header from "../Header";
import Footer from "../Footer";
import img2 from '/src/assets/images/news/1.webp'



function News1() {
    return(
        <>
            <Header />
                            {/*LARGE SCREENS */}
            <div className="mainContainer hidden md:flex  flex-col items-center justify-center pt-60">
                <div className="subContainer w-[90%]">
                    <p className="uppercase text-[#EFA51E] font-Roboto font-bold md:text-3xl lg:text-4xl mb-20">Climate Change Education at the Department of <br className="hidden lg:block"/> Animal Biology and Conservation Science, <br className="hidden lg:block"/> University of Ghana</p>
                    
                    <div>
                        <img src={img2} alt="CCSE and Knutsford University College" className="" />

                        <div className="text-[#232323] font-Inter font-medium space-y-10 my-5 text-lg">
                            <p>
                                The Centre in partnership with the Department of Animal Biology and Conservation Science with support from the Global Youth Development Institute (GYDI) and the Pan African Conservation Education (PACE) organised a 1-day workshop on understanding Climate Change and Green Opportunities.
                            </p>
                            <p>
                                The Executive Director of the Centre, Mr. Kassim Hussein emphasised on 
                                the need for youth engagement in the climate Change Discourse.
                                Dr. Tachie –Obeng, the National ACE Focal Point of the UNFCCC
                                introduced participants to the six elements of ACE and how they
                                can be involved. On his part, Dr. Daniel Benefo, the UNFCCC
                                National focal point threw more light on some of the future
                                opportunities in the green space. The Executive Coordinator
                                of PACE (UK), Penny Fraser introduced participants to the PACE
                                Biodiversity learning Pack. It was a great learning experience 
                                for the participants.
                             </p>
                        </div>

                        <div className=' mt-30 w-full h-[500px]'>

                    <svg className='w-full'  viewBox="0 0 1322 554" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1322" height="554" fill="#D9D9D9"/>
                    </svg>

                    </div>

                        
                    </div>

                </div>

            </div>

                                {/*SMALL  SCREENS */}
            <div className="mainContainer flex  md:hidden flex-col items-center justify-center pt-32">
  <div className="subContainer w-[90%]">
    <p className="uppercase text-[#EFA51E] font-Roboto font-bold text-xl mb-10 leading-snug">
            Climate Change Education at the Department of Animal Biology and Conservation Science, University of Ghana
    </p>

    <div>
      <img src={img2} alt="CCSE and Knutsford University College" className="w-full rounded-md mb-6" />

      <div className="text-[#232323] font-Inter font-medium space-y-6 my-4 text-base leading-relaxed">
        
        <p>
        The Centre in partnership with the Department of Animal Biology and Conservation Science with support from the Global Youth Development Institute (GYDI) and the Pan African Conservation Education (PACE) organised a 1-day workshop on understanding Climate Change and Green Opportunities.
        </p>
        <p>
            The Executive Director of the Centre, Mr. Kassim Hussein emphasised on the need for youth
            engagement in the climate Change Discourse. Dr. Tachie –Obeng, the National ACE Focal
            Point of the UNFCCC introduced participants to the six elements of ACE and how they
            can be involved. On his part, Dr. Daniel Benefo, the UNFCCC National focal point threw
            more light on some of the future opportunities in the green space. The Executive
            Coordinator of PACE (UK), Penny Fraser introduced participants to the PACE 
            Biodiversity learning Pack. It was a great learning experience for the participants
        </p>        
      </div>

        <div className='my-20 w-full h-72'>
      <svg className='w-full h-full' viewBox="0 0 922 554" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1322" height="554" fill="#D9D9D9" />
      </svg>
         </div>

      
    </div>
  </div>
</div>

            <Footer />
        </>
    )
}
export default News1;