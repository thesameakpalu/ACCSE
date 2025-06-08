import Header from "../components/Header";
import Footer from "../components/Footer";
import ACEImg from '/src/assets/images/aboutLastSection.webp'
import BCImg from '/src/assets/images/gallery/14.webp'
import CRAImg from '/src/assets/images/ImpactsPage3.webp'
import FRImg from '/src/assets/images/ImpactsPage.webp'
import WMImg from '/src/assets/images/gallery/13.webp'







function OurImpacts() {
    return(
        <>
            <Header />
                                {/*LARGE SCREEN */}
            <div className="mainContainer hidden md:flex justify-center pt-60 mb-20">
  <div className="subContainer flex flex-col items-center justify-center w-[90%] gap-20">

    <p className="font-bold font-Roboto text-[#EFA51E] text-3xl mb-16">Our Impact</p>


                        {/*ACTION FOR CLIMATE EMPOWERMENT */}

    <div id="Action_For_Climate_Empowerment" className="flex flex-col items-center justify-center shadow-[0_0px_10px_rgba(0,0,0,0.1)] p-5 rounded-md">
      <p className="mt-4 font-inter font-medium text-2xl mb-10">Action For Climate Empowerment</p>

      {/* Image and First Paragraph */}
      <div className="flex md:gap-10 lg:gap-20 mt-4 w-full items-stretch">
        <img
          src={ACEImg}
          alt="Action For Climate Empowerment"
          className="w-1/2  object-center object-cover"
        />

        <p className="w-1/2 font-Inter font-medium text-lg text-[#232323]">
          Action for Climate Empowerment (ACE) is a term <br className=" hidden xl:block" />
          adopted by the United Nations Framework <br className=" hidden xl:block" />
          Convention on Climate Change (UNFCCC). It <br className=" hidden xl:block" />
          refers to Article 6 of the Convention’s original <br className=" hidden xl:block" />
          text (1992), focusing on six priority areas: education, <br className=" hidden xl:block" />
          training, public awareness, public participation, <br className=" hidden xl:block" />
          public access to information, and international <br className=" hidden xl:block" />
          cooperation on these issues. <br className=" hidden xl:block" />
          The implementation of all six areas has been <br className=" hidden xl:block" />
          identified in recent years as the pivotal factor <br className=" hidden xl:block" />
          for everyone to understand and participate in solving <br className=" hidden xl:block" />
          the complex challenges presented by climate <br className=" hidden xl:block" />
          change.
        </p>
      </div>

      {/* Full-Width Paragraph Under Both Columns */}
      <div className="mt-8 w-full text-lg font-Inter font-medium text-[#232323]">
        <p>
          The importance of ACE is reflected in other international frameworks such as the Sustainable Development
          Goals (SDGs), the Global Action Programme for Education for Sustainable Development (GAP on ESD), and
          the Aarhus Convention. Members of CCSE are part of the ACE working group of the Youth Constituency
          (YOUNGO) of the United Nations Framework Convention on Climate Change and they contribute to policy
          formulation and implementation. CCSE is also actively involved in the annual ACE dialogue, which is
          organized by the UNFCCC Secretariat at the Bonn SBI Sessions. Ghana has successfully incorporated
          Climate Change Education into the school curriculum at the basic level and through our Teach for Climate
          (T4C) Initiative; training workshops are organized for basic school teachers on how to incorporate
          quality climate change education in their teaching. They are able to teach their students and
          sometimes empower the entire community to take actions to mitigate and adapt to the
          effects of climate change.
        </p>
      </div>
    </div>

                             {/*BIODIVERSITY CONSERVATION*/}
    <div id="Biodiversity_Conservation" className="flex flex-col items-center justify-center shadow-[0_0px_10px_rgba(0,0,0,0.1)] p-5 rounded-md">
      <p className="mt-4 font-inter font-medium text-2xl mb-10">Biodiversity conservation</p>

      {/* Image and First Paragraph */}
      <div className="flex md:gap-10 lg:gap-20 mt-4 w-full items-stretch">

        <p className="w-1/2 font-Inter font-medium text-lg text-[#232323]">
          Biodiversity is the very basis of human survival <br className=" hidden xl:block" /> and economic well-being and encompasses all
           life <br className=" hidden xl:block" /> forms, ecosystems and ecological processes. <br className=" hidden xl:block" /> Unfortunately, Biodiversity loss and
            conservation <br className=" hidden xl:block" /> have been a global focus for such a long time. <br className=" hidden xl:block" /> Human activities have
             degraded Ghana’s <br className=" hidden xl:block" /> Biological resources significantly and species are <br className=" hidden xl:block" /> constantly becoming 
             endangered. Young people <br className=" hidden xl:block" /> are an important constituency in the conservation <br className=" hidden xl:block" /> of biodiversity
              and have a huge impact on it. <br className=" hidden xl:block" /> Illegal Mining popularly known as “Galamsey” is <br className=" hidden xl:block" /> destroying 
              our cocoa farmlands, which houses <br className=" hidden xl:block" /> certain species of birds and provides shades for <br className=" hidden xl:block" /> certain
               plants and animals in our ecosystem.
        </p>

        <img
          src={BCImg}
          alt="Action For Climate Empowerment"
          className="w-1/2  object-center object-cover"
        />

        
      </div>

      {/* Full-Width Paragraph Under Both Columns */}
      <div className="mt-8 w-full text-lg font-Inter font-medium text-[#232323]">
        <p>
          Clearing of cocoa farmlands destroys many wildlife habitats and plant species diversity is
           drastically reduced. At CCSE, we sensitize and educate cocoa farmers in our communities on the importance of Cocoa farms to biodiversity conservation. We also empower and give them training on Sustainable Cocoa production.
        </p>
      </div>
    </div>


    
                        {/*Climate resilient agriculture */}

    <div id="Climate_Resilient_Agriculture" className="flex flex-col items-center justify-center shadow-[0_0px_10px_rgba(0,0,0,0.1)] p-5 rounded-md">
      <p className="mt-4 font-inter font-medium text-2xl mb-10">Climate Resilient Agriculture</p>

      {/* Image and First Paragraph */}
      <div className="flex md:gap-10 lg:gap-20 mt-4 w-full items-stretch">
        <img
          src={CRAImg}
          alt="Action For Climate Empowerment"
          className="w-1/2  object-center object-cover"
        />

        <p className="w-1/2 font-Inter font-medium text-lg text-[#232323]">
        Young farmers in Ghana are experiencing the <br className=" hidden xl:block" /> effects of agriculture on their farmlands in
        the <br className=" hidden xl:block" /> form of increasing temperatures, weather <br className=" hidden xl:block" /> variability, shifting agroecosystem boundaries, <br className=" hidden xl:block" />
        invasive crops and pests, and more frequent <br className=" hidden xl:block" /> extreme weather events. With the requisite <br className=" hidden xl:block" />
        knowledge and expertise, they can be very <br className=" hidden xl:block" /> innovative in agriculture by adapting Climate <br className=" hidden xl:block" />
        resilient agriculture techniques. Climate resilient <br className=" hidden xl:block" /> agriculture involves a wide-range
        of practices that <br className=" hidden xl:block" /> sustainably increase productivity and resilience, <br className=" hidden xl:block" /> reduce and/or
        remove greenhouse gas emissions <br className=" hidden xl:block" /> where possible and augments the achievement of <br className=" hidden xl:block" /> food
        security.
        </p>
      </div>

      {/* Full-Width Paragraph Under Both Columns */}
      <div className="mt-8 w-full text-lg font-Inter font-medium text-[#232323]">
        <p>
          It is in that regard that CCSE started its Model Climate Smart Agriculture in 2021 (MOCSA) in
            the Eastern Region of Ghana. The MOCSA project provides a learning platform for CCSE members 
           to have a hand on experience on how to practice Climate Smart Agriculture by integrating
            climate resilient crops and livestock rearing on the same piece of land at the same time.
        </p>
      </div>
    </div>


                                {/*Forest restoration*/}
    <div id="Forest_Restoration" className="flex flex-col items-center justify-center shadow-[0_0px_10px_rgba(0,0,0,0.1)] p-5 rounded-md">
      <p className="mt-4 font-inter font-medium text-2xl mb-10">Forest Restoration</p>

      {/* Image and First Paragraph */}
      <div className="flex md:gap-10 lg:gap-20 mt-4 w-full items-stretch">

        <p className="w-1/2 font-Inter font-medium text-lg text-[#232323]">
          Trees are an important part of every community. <br className=" hidden xl:block" /> The streets, parks, playgrounds and 
          backyards <br className=" hidden xl:block" /> when lined with trees creates a peaceful, <br className=" hidden xl:block" /> aesthetically pleasing environment. 
          Trees <br className=" hidden xl:block" /> contribute to the environment by providing <br className=" hidden xl:block" /> oxygen, improving air quality, climate
           amelioration, <br className=" hidden xl:block" /> conserving water, preserving soil, and supporting <br className=" hidden xl:block" /> wildlife. Trees also lower
            the air temperature and <br className=" hidden xl:block" /> reduce the heat intensity of the greenhouse effect <br className=" hidden xl:block" /> by maintaining
            low levels of carbon dioxide. <br className=" hidden xl:block" /> CCSE initiated the 1 Life – 1 Tree (1L1T) project in <br className=" hidden xl:block" /> 2020 to
              mobilize the planting of 1 million trees in <br className=" hidden xl:block" /> communities highly affected by the effects of <br className=" hidden xl:block" />
            climate change.
        </p>

        <img
          src={FRImg}
          alt="Action For Climate Empowerment"
          className="w-1/2  object-center object-cover"
        />

        
      </div>

      {/* Full-Width Paragraph Under Both Columns */}
      <div className="mt-8 w-full text-lg font-Inter font-medium text-[#232323]">
        <p>
            The 1 million trees includes mangroves to protect life under water. The first 300 trees were
             planted in the year 2020 involving 12 communities. In the year 2021, Trees were planted in 
             the Okurase in the Eastern Region of Ghana and Tumu in the Northern Region of Ghana.
        </p>
      </div>
    </div>


                           {/*Waste management */}

    <div id="Waste_Management" className="flex flex-col items-center justify-center shadow-[0_0px_10px_rgba(0,0,0,0.1)] p-5 rounded-md">
      <p className="mt-4 font-inter font-medium text-2xl mb-10">Waste Management</p>

      {/* Image and First Paragraph */}
      <div className="flex md:gap-10 lg:gap-20 mt-4 w-full items-stretch">
        <img
          src={WMImg}
          alt="Action For Climate Empowerment"
          className="w-1/2  object-center object-cover"
        />

        <p className="w-1/2 font-Inter font-medium text-lg text-[#232323]">
                Waste management as a priority is critical to<br className="hidden xl:block" />
                addressing the Sustainable Development Goals<br className="hidden xl:block" />
                (SDGs). The waste management challenge in<br className="hidden xl:block" />
                Ghana remains uphill despite several interventions<br className="hidden xl:block" />
                by government and other major stakeholders. It is<br className="hidden xl:block" />
                an issue that traverses the economic, social, and<br className="hidden xl:block" />
                environmental dimensions of the country and<br className="hidden xl:block" />
                finding innovative solutions is critical now more<br className="hidden xl:block" />
                than ever.<br className="hidden xl:block" />
                The waste management sector in Ghana requires<br className="hidden xl:block" />
                action on multiple fronts, including investment in<br className="hidden xl:block" />
                waste reduction, reuse and recycling. The vast<br className="hidden xl:block" />
                majority of e-waste in Ghana is managed under <br className="hidden xl:block" /> poor environmental, health and safety conditions.
</p>

      </div>

      {/* Full-Width Paragraph Under Both Columns */}
      <div className="mt-8 w-full text-lg font-Inter font-medium text-[#232323]">
        <p>
          Open burning of cables and manual disassembly of lead-acid batteries are still widely used practices, causing significant environmental pollution and damage to human health. CCSE in partnership with an association in the informal e-waste recycling sector at Agbogbloshie (An e-waste scrapyard in the suburb of Accra) and provides them with training on best practices in recycling e-waste.
        </p>
      </div>
    </div> 

    
  </div>
</div>

            
                                    {/*SMALL SCREENS */}
            <div className="mainContainer flex md:hidden justify-center pt-28 mb-16">
  <div className="subContainer flex flex-col items-center justify-center w-[95%] gap-16">

    <p className="font-bold font-Roboto text-[#EFA51E] text-2xl sm:text-3xl  text-center">Our Impact</p>

    {/* Action For Climate Empowerment */}
    <div id="action_for_climate_empowerment" className="flex flex-col items-center shadow-md p-4 rounded-md w-full">
      <p className="text-xl font-inter font-medium mb-6 text-center">Action For Climate Empowerment</p>
      <img src={ACEImg} alt="Action For Climate Empowerment" className="w-full h-auto mb-4 object-cover rounded" />
      <p className="text-base font-Inter font-medium text-[#232323]">
            Action for Climate Empowerment (ACE) is a term adopted by the United Nations Framework Convention on
            Climate Change (UNFCCC). It refers to Article 6 of the Convention’s original text (1992), focusing on 
            six priority areas: education, training, public awareness, public participation, public access 
            to information, and international cooperation on these issues. The implementation of all six areas
            has been identified in recent years as the pivotal factor for everyone to understand and participate
            in solving the complex challenges presented by climate change.      </p>
      <div className="mt-6 text-base font-Inter font-medium text-[#232323]">
        <p>
            The importance of ACE is reflected in other international frameworks such as the
             Sustainable Development Goals (SDGs), the Global Action Programme for Education
              for Sustainable Development (GAP on ESD) and the Aarhus Convention. Members of CCSE
               are part of the ACE working group of the youth Constituency (Youngo) of the United
                Nations Framework Conventions on Climate Change and they contribute in policy
                 formulation and implementation. CCSE is also actively involved in the annual
                  ACE dialogue, which is organized by the UNFCCC Secretariat at the Bonn SBI Sessions.
                   Ghana has successfully incorporated Climate Change Education in School Curriculum
                    at the basic level and through our Teach for Climate (T4C) Initiative; training 
                    workshops are organized for Basic School teachers on how to incorporate quality
                     climate change education in their teaching. They are able to teach their students
                     
                      and sometimes able to empower the entire community to take actions to
                       mitigate and adapt to the effects of climate change.
        </p>
      </div>
    </div>

    {/* Biodiversity Conservation */}
    <div id="biodiversity_conservation" className="flex flex-col items-center shadow-md p-4 rounded-md w-full">
      <p className="text-xl font-inter font-medium mb-6 text-center">Biodiversity Conservation</p>
      <img src={BCImg} alt="Biodiversity Conservation" className="w-full h-auto mb-4 object-cover rounded" />
      <p className="text-base font-Inter font-medium text-[#232323]">
        Biodiversity is the very basis of human survival and economic well-being and encompasses
        all life forms, ecosystems and ecological processes. Unfortunately, Biodiversity loss
        and conservation have been a global focus for such a long time. Human activities have
        degraded Ghana’s Biological resources significantly and species are constantly becoming
        endangered. Young people are an important constituency in the conservation of biodiversity
        and have a huge impact on it. Illegal Mining popularly known as “Galamsey” is destroying
        our cocoa farmlands, which houses certain species of birds and provides shades for
        certain plants and animals in our ecosystem.
      </p>
      <div className="mt-6 text-base font-Inter font-medium text-[#232323]">
        <p>
    Clearing of cocoa farmlands destroys many wildlife habitats and plant
     species diversity is drastically reduced. At CCSE, we sensitize and educate cocoa farmers in
      our communities on the importance of Cocoa farms to biodiversity conservation. We also empower
       and give them training on Sustainable Cocoa production.        </p>
      </div>
    </div>

    {/* Climate Resilient Agriculture */}
    <div id="climate_resilient_agriculture" className="flex flex-col items-center shadow-md p-4 rounded-md w-full">
      <p className="text-xl font-inter font-medium mb-6 text-center">Climate Resilient Agriculture</p>
      <img src={CRAImg} alt="Climate Resilient Agriculture" className="w-full h-auto mb-4 object-cover rounded" />
      <p className="text-base font-Inter font-medium text-[#232323]">
        Young farmers in Ghana are experiencing the effects of agriculture on their farmlands in
         the form of increasing temperatures, weather variability, shifting agroecosystem boundaries,
          invasive crops and pests, and more frequent extreme weather events. With the requisite 
          knowledge and expertise, they can be very innovative in agriculture by adapting Climate
           resilient agriculture techniques. Climate resilient agriculture involves a wide-range 
           of practices that sustainably increase productivity and resilience, reduce and/or remove 
           greenhouse gas emissions where possible and augments the achievement of food security.  
        </p>
      <div className="mt-6 text-base font-Inter font-medium text-[#232323]">
        <p>
        It is in that regard that CCSE started its Model Climate Smart Agriculture in 2021 (MOCSA) 
        in the Eastern Region of Ghana. The MOCSA project provides a learning platform for CCSE         
        members to have a hand on experience on how to practice Climate Smart Agriculture by
         integrating climate resilient crops and livestock rearing on the same piece of land
          at the same time.        </p>
      </div>
    </div>

    {/* Forest Restoration */}
    <div id="forest_restoration" className="flex flex-col items-center shadow-md p-4 rounded-md w-full">
      <p className="text-xl font-inter font-medium mb-6 text-center">Forest Restoration</p>
      <img src={FRImg} alt="Forest Restoration" className="w-full h-auto mb-4 object-cover rounded" />
      <p className="text-base font-Inter font-medium text-[#232323]">
        Trees are an important part of every community. The streets, parks, playgrounds and backyards 
        when lined with trees creates a peaceful, aesthetically pleasing environment. Trees contribute
         to the environment by providing oxygen, improving air quality, climate amelioration, 
         conserving water, preserving soil, and supporting wildlife. Trees also lower the air
          temperature and reduce the heat intensity of the greenhouse effect by maintaining low
           levels of carbon dioxide. CCSE initiated the 1 Life – 1 Tree (1L1T) project in 2020 
           to mobilize the planting of 1 million trees in communities highly affected by the
            effects of climate change.      </p>
      <div className="mt-6 text-base font-Inter font-medium text-[#232323]">
        <p>
            The 1 million trees includes mangroves to protect life under water.
            The first 300 trees were planted in the year 2020 involving 12 communities. In the year
             2021, Trees were planted in the Okurase in the Eastern Region of Ghana and Tumu in the
              Northern Region of Ghana.
         </p>
      </div>
    </div>

    {/* Waste Management */}
    <div id="waste_management" className="flex flex-col items-center shadow-md p-4 rounded-md w-full">
      <p className="text-xl font-inter font-medium mb-6 text-center">Waste Management</p>
      <img src={WMImg} alt="Forest Restoration" className="w-full h-auto mb-4 object-cover rounded" />
      <p className="text-base font-Inter font-medium text-[#232323]">
        Waste management as a priority is critical to addressing the Sustainable Development Goals (SDGs).
        The waste management challenge in Ghana remains uphill despite several interventions by
         government and other major stakeholders. It is an issue that traverses the economic, social,
          and environmental dimensions of the country and finding innovative solutions is critical
           now more than ever. The waste management sector in Ghana requires action on multiple fronts,
            include investment in waste reduction, reuse and recycling. The vast majority of e-waste 
            in Ghana is managed under poor environmental, health and safety conditions.  
               </p>
      <div className="mt-6 text-base font-Inter font-medium text-[#232323]">
        <p>
            Open burning of cables and manual disassembly of lead-acid batteries are still widely
             used practices, causing significant environmental pollution and damage to human health. 
             CCSE in partnership with an association in the informal e-waste recycling sector at 
             Agbogbloshie (An e-waste scrapyard in the suburb of Accra) and provides them with 
             training on best practices in recycling e-waste.
         </p>
      </div>
    </div>

  </div>
</div>
            <Footer />

        </>
    )
}

export default OurImpacts;