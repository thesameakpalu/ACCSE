import Header from "../Header";
import Footer from "../Footer";
import img2 from '/src/assets/images/news/2.webp'
import gall2 from '/src/assets/images/gallery/2.webp'



function News2() {
    return(
        <>
            <Header />
                            {/*LARGE SCREENS */}
            <div className="mainContainer hidden md:flex  flex-col items-center justify-center pt-60">
                <div className="subContainer w-[90%]">
                    <p className="uppercase text-[#EFA51E] font-Roboto font-bold md:text-3xl lg:text-4xl mb-20">CCSE and Knutsford University College have <br className="hidden lg:block"/> announced the signing of a Memorandum of <br className="hidden lg:block"/> Understanding (MoU)</p>
                    
                    <div>
                        <img src={img2} alt="CCSE and Knutsford University College" className="" />

                        <div className="text-[#232323] font-Inter font-medium space-y-10 my-5 text-lg">
                            <p>The agreement is to establish a collaboration between CCSE and Knutsford to undertake a short course on Climate Change Communication, Advocacy, and Activism.</p>

                            <p>This strategic partnership aims to educate and empower Ghanaians especially climate change workers, NGO members and staff, community leaders and activists, environmental educators and communicators, policymakers and 
                                stakeholders involved in environmental issues with the necessary skills and knowledge to effectively
                                 address climate change through communication, advocacy, and activism.
                                The MoU was signed by Ms. Jewelina Ackah, Research and Partnership Officer 
                                of CCSE, and Mr. Frank Adjei-Ntekor, the Registrar of Knutsford University in a
                                ceremony held at the university’s main campus in Accra.
                             </p>

                             <p>
                                The primary objectives of the MOU are to enable participants to 
                                effectively convey complex climate change information to diverse
                                 audiences, equip participants with strategies to influence policy
                                  and advocate for climate action and teach techniques for grassroots
                                   organizing and mobilising communities for climate action.
                            </p>
                        </div>

                        <img src={gall2} alt="CCSE and Knutsford University College 2" className="" />

                        <div className="text-[#232323] font-Inter font-medium space-y-10 mt-5 my-20 text-lg">
                            <p>It is also geared towards ensuring participants have a balanced
                                 understanding of theoretical frameworks and practical applications
                                  developing leadership skills and encouraging innovative solutions for 
                                  climate challenges.
                            Research and Partnership Officer, Jewelina Ackah remarked,
                             “This partnership represents a significant step forward in 
                             our mission to empower communities through quality climate 
                             change education and sustainable practices. By working with Knutsford
                              University College, we can amplify our efforts to address the pressing 
                              issues of climate change and sustainability.”</p>

                              <p>Registrar of Knutsford University College, Frank Adjei-Ntekor added,
                                 “We are thrilled to partner with CCSE in this vital endeavor. This
                                  MoU will not only enrich our academic offerings but also ensure
                                   that our students and faculty are at the forefront of climate 
                                   and sustainability initiatives. Together, we can make a meaningful 
                                   impact on our community and beyond.”</p>

                            <p>The signing ceremony was attended by faculty members, students, and
                                 representatives from both organizations, highlighting the collective 
                                 enthusiasm and commitment to this groundbreaking collaboration.
                                </p>
                        </div>

                    </div>

                </div>

            </div>

                                {/*SMALL  SCREENS */}
            <div className="mainContainer flex  md:hidden flex-col items-center justify-center pt-32">
  <div className="subContainer w-[90%]">
    <p className="uppercase text-[#EFA51E] font-Roboto font-bold text-xl mb-10 leading-snug">
      CCSE and Knutsford University College have announced the signing of a Memorandum of Understanding (MoU)
    </p>

    <div>
      <img src={img2} alt="CCSE and Knutsford University College" className="w-full rounded-md mb-6" />

      <div className="text-[#232323] font-Inter font-medium space-y-6 my-4 text-base leading-relaxed">
        <p>
            The agreement is to establish a collaboration between CCSE and Knutsford to undertake a short course on Climate Change Communication, Advocacy, and Activism.        </p>

        <p>
            This strategic partnership aims to educate and empower Ghanaians especially climate change workers, NGO members and staff, community leaders and activists, environmental educators and communicators, policymakers and stakeholders involved in environmental issues with the necessary skills and knowledge to effectively address climate change through communication, advocacy, and activism.
The MoU was signed by Ms. Jewelina Ackah, Research and Partnership Officer of CCSE, and Mr. Frank Adjei-Ntekor, the Registrar of Knutsford University in a ceremony held at the university’s main campus in Accra.
        </p>

        <p>
The primary objectives of the MOU are to enable participants to effectively convey complex climate change information to diverse audiences, equip participants with strategies to influence policy and advocate for climate action and teach techniques for grassroots organizing and mobilising communities for climate action.        </p>
      </div>

      <img src={gall2} alt="CCSE and Knutsford University College 2" className="w-full rounded-md my-6" />

      <div className="text-[#232323] font-Inter font-medium space-y-6 my-6 text-base leading-relaxed">
        <p>
                It is also geared towards ensuring participants have a balanced understanding of theoretical frameworks and practical applications developing leadership skills and encouraging innovative solutions for climate challenges.
Research and Partnership Officer, Jewelina Ackah remarked, “This partnership represents a significant step forward in our mission to empower communities through quality climate change education and sustainable practices. By working with Knutsford University College, we can amplify our efforts to address the pressing issues of climate change and sustainability.” 
        </p>

        <p>
                Registrar of Knutsford University College, Frank Adjei-Ntekor added, “We are thrilled to partner with CCSE in this vital endeavor. This MoU will not only enrich our academic offerings but also ensure that our students and faculty are at the forefront of climate and sustainability initiatives. Together, we can make a meaningful impact on our community and beyond.”
        </p>

        <p>
The signing ceremony was attended by faculty members, students, and representatives from both organizations, highlighting the collective enthusiasm and commitment to this groundbreaking collaboration.        </p>
      </div>
    </div>
  </div>
</div>

            <Footer />
        </>
    )
}
export default News2;