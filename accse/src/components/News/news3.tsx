import Header from "../Header";
import Footer from "../Footer";
import img2 from '/src/assets/images/news/3.webp'
import img3 from '/src/assets/images/news/CCSE_GES/2.webp'
import img4 from '/src/assets/images/news/CCSE_GES/3.webp'
import img5 from '/src/assets/images/news/CCSE_GES/4.webp'
import img6 from '/src/assets/images/news/CCSE_GES/6.webp'




function News3() {
    return(
        <>
            <Header />
                            {/*LARGE SCREENS */}
            <div className="mainContainer hidden md:flex  flex-col items-center justify-center pt-60">
                <div className="subContainer w-[90%]">
                    <p className="uppercase text-[#EFA51E] font-Roboto font-bold md:text-3xl lg:text-4xl mb-20">
                        CCSE PARTNERS GES AND HBCU GREEN FUND TO LAUNCH THE GHANA GLOBE PROGRAM AND GREENING SCHOOLS INITIATIVE  
                     </p>
                    
                    <div>
                        <img src={img2} alt="CCSE and Knutsford University College" className="" />

                        <div className="text-[#232323] font-Inter font-medium space-y-10 my-5 text-lg">
                            <p className="mt-10">
                                The Ghana GLOBE Program and Greening Schools Initiative facilitated by
                                 the Ghana Education Service and the HBCU Green Fund aims to promote 
                                 
                                 scientific literacy, environmental awareness, and global connectivity
                                  among students across the country and the diaspora. By providing
                                   students with opportunities for hands-on scientific inquiry and
                                facilitating collaboration and knowledge exchange both locally
                                and internationally, the program aims to empower the next 
                                generation of environmental leaders.
                            </p>
                            

                             
                        </div>
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img2} alt="Description 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img3} alt="Description 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img4} alt="Description 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img5} alt="Description 4" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img2} alt="Description 5" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img6} alt="Description 6" className="w-full h-full object-cover" />
                        </div>
                        </div>



                        

                        <div className="text-[#232323] font-Inter font-medium space-y-10 mt-5 my-20 text-lg">
                            <p className="mt-10">
                                Building upon the foundations laid by the GLOBE Program, the HBCU Green
                                Fund PanAfriGlobe and the Greening Schools initiative by UNESCO, the
                                merging of these three initiatives will take their implementation
                                further by facilitating weather data collection, direct
                                communication, mobilization of resources and collaborative 
                                learning experiences among young people across diverse geographical
                                and climatic regions. This will not only empower students to
                                understand and address environmental issues but also foster
                                a sense of responsibility and stewardship towards their local
                                 environments (Smith & Johnson, 2022).
                              </p>

                             
                        </div>

                    </div>

                </div>

            </div>

                                {/*SMALL  SCREENS */}
            <div className="mainContainer flex  md:hidden flex-col items-center justify-center pt-32">
  <div className="subContainer w-[90%]">
    <p className="uppercase text-[#EFA51E] font-Roboto font-bold text-xl mb-10 leading-snug">
       CCSE PARTNERS GES AND HBCU GREEN FUND TO LAUNCH THE GHANA GLOBE PROGRAM AND GREENING SCHOOLS INITIATIVE 
    </p>

    <div>
      <img src={img2} alt="CCSE and Knutsford University College" className="w-full rounded-md mb-6" />

      <div className="text-[#232323] font-Inter font-medium space-y-6 my-4 text-base leading-relaxed">
        <p className="my-10">
            The Ghana GLOBE Program and Greening Schools Initiative facilitated by the Ghana Education
            Service and the HBCU Green Fund aims to promote scientific literacy, environmental
            awareness, and global connectivity among students across the country and the diaspora.
            By providing students with opportunities for hands-on scientific inquiry and
            facilitating collaboration and knowledge exchange both locally and internationally,
            the program aims to empower the next generation of environmental leaders.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img2} alt="Description 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img3} alt="Description 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img4} alt="Description 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img5} alt="Description 4" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img2} alt="Description 5" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded">
                            <img src={img6} alt="Description 6" className="w-full h-full object-cover" />
                        </div>
                        </div>

      <div className="text-[#232323] font-Inter font-medium space-y-6 my-6 text-base leading-relaxed">
        <p className="mt-10 mb-20">
            Building upon the foundations laid by the GLOBE Program, the HBCU Green Fund PanAfriGlobe
            and the Greening Schools initiative by UNESCO, the merging of these three initiatives 
            will take their implementation further by facilitating weather data collection, direct
            communication, mobilization of resources and collaborative learning experiences among 
            young people across diverse geographical and climatic regions. This will not only
            empower students to understand and address environmental issues but also foster
            a sense of responsibility and stewardship towards their local environments
            (Smith & Johnson, 2022).
        </p>

      </div>
    </div>
  </div>
</div>

            <Footer />
        </>
    )
}
export default News3;