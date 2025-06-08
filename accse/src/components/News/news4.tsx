import Header from "../Header";
import Footer from "../Footer";
import img2 from '/src/assets/images/news/4.webp'



function News4() {
    return(
        <>
            <Header />
                            {/*LARGE SCREENS */}
            <div className="mainContainer hidden md:flex  flex-col items-center justify-center pt-60">
                <div className="subContainer w-[90%]">
                    <p className="uppercase text-[#EFA51E] font-Roboto font-bold md:text-3xl lg:text-4xl mb-20">Climate Brief — COP 28</p>
                    
                    <div>
                        <img src={img2} alt="CCSE and Knutsford University College" className="w-full" />

                        <div className="text-[#232323] font-Inter font-medium space-y-10 my-5 text-lg">
                            
                            <p>
                                The 28th UN Climate Change Conference (COP28), held in Dubai from the 
                                30th of November to the 12th of December 2023, brought together nearly
                                200 countries to tackle the escalating climate crisis. The Centre for
                                Climate and Sustainability Empowerment (CCS) actively participated 
                                the conference with 3 delegates from the Centre. The delegation
                                included Mr. Kassim Hussein, the Executive Director, Mr. Eugene Kofi
                                Tetteh, Head of Just Energy Transition and Mrs. Doris Amankwaa,
                                Head of Biodiversity and Forest Conservation. The conference
                                concluded with several significant agreements, though it also 
                                left some critical issues unresolved.
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
        Climate Brief — COP 28
    </p>

    <div>
      <img src={img2} alt="CCSE and Knutsford University College" className="w-full rounded-md mb-6" />

      <div className="text-[#232323] font-Inter font-medium space-y-6 my-4 text-base leading-relaxed">
        
        
        <p>
           The 28th UN Climate Change Conference (COP28), held in Dubai from the 
            30th of November to the 12th of December 2023, brought together nearly
            200 countries to tackle the escalating climate crisis. The Centre for
            Climate and Sustainability Empowerment (CCS) actively participated 
            the conference with 3 delegates from the Centre. The delegation
            included Mr. Kassim Hussein, the Executive Director, Mr. Eugene Kofi
            Tetteh, Head of Just Energy Transition and Mrs. Doris Amankwaa,
            Head of Biodiversity and Forest Conservation. The conference
            concluded with several significant agreements, though it also 
            left some critical issues unresolved.
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
export default News4;