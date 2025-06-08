import Header from "../Header";
import Footer from "../Footer";
import img2 from '/src/assets/images/news/5.webp'



function News5() {
    return(
        <>
            <Header />
                            {/*LARGE SCREENS */}
            <div className="mainContainer hidden md:flex  flex-col items-center justify-center pt-60">
                <div className="subContainer w-[90%]">
                    <p className="uppercase text-[#EFA51E] font-Roboto font-bold md:text-3xl lg:text-4xl mb-20">COP 27 IN RETROSPECT</p>
                    
                    <div>
                        <img src={img2} alt="CCSE and Knutsford University College" className="" />

                        <div className="text-[#232323] font-Inter font-medium space-y-10 my-5 text-lg">
                            <p>
                            COP 27 was the first COP in Africa after more than a decade and was 
                            dubbed the “African COP”. It took place in Sharma El-Sheikh, Egypt
                            from the 6 th to the 18 th of November 2022 under the theme “together
                            for Implementation” with focus on turning promises into action. 
                            Going to COP 27, there was conversation around making sure the
                            developing economies gets justice for a crisis they did not cause
                            but have to deal with its effects. People from the Global South 
                            were therefore hopeful that COP 27 would be a big step forward on
                            major issues like securing climate finance for developing countries
                            (US$100 billion), financial Mechanism for loss and damage and
                            increasing support for adaptation and mitigation. Unfortunately,
                             COP 27 concluded with mixed feelings for me and I had two major big takeaways.
                            </p>

                            <p>
                                Firstly as someone from a vulnerable country, the fact that Parties 
                                agreed to create a loss and damage fund to help compensate developing
                                economies and areas highly suffering from the devastating effects of 
                                climate change is history in the making. This massive success was made
                                possible by the untiring work of activists all over the world. Despite
                                the win, my only hope is that the loss and damage funds does not 
                                end up like the existing climate funds (Adaptation Fund, Green
                                Climate Fund, Global Environment Facility etc.) The cumbersome
                                and beaurecratic nature of these facilities makes it very difficult
                                 for developing countries to follow and access these funds. 
                                 Vulnerable Countries like Ghana has already being dealing
                                  with losses and damages for decades and therefore if a funding
                                   mechanism is to be in operation, then it should be easily 
                                   accessible.
                             </p>

                             <p>
                                Secondly as someone who follows Action for Climate Empowerment (ACE)
                                negotiations, I was pleased that parties adopted the 4-year ACE 
                                action plan. The ACE action plan sets out short- term, clear and
                                time-bound activities in the four priority areas (Policy Coherence,
                                Coordinated Action, Tools and Support, Monitoring, Evaluation and 
                                Reporting) aimed at addressing gaps and challenges related to
                                implementing the six ACE elements (Climate Change Education,
                                Training, Public Participation, Public Awareness, Public 
                                Access to Information and International Cooperation on these issues)
                                creating opportunities to accelerate their implementation.
                            </p>
                        </div>


                        <div className="text-[#232323] font-Inter font-medium space-y-10 mt-5 my-20 text-lg">
                            <p>
                            Unfortunately, the ACE negotiations at the Bonn Conference
                            (Subsidiary Bodies of Implementation, SBI 56) ended on a disappointing 
                            note with parties just managing to come up with an informal note.
                            Parties were therefore so much determined to complete the informal
                            note into an action plan at COP 27. Although it took hours of 
                            negotiations to agree on certain deliverables in the action plan and 
                            with negotiations coming to a halt for hours at some point, Parties
                            managed to compromise their positions and adopted the first ACE
                            action plan. My only reservation with this action plan is the fact 
                            that it was adopted without a funding mechanism. Climate Education,
                            Training and Public Participation cannot be effectively implemented
                            without the requisite financial backing and unfortunately, that was
                            missing in the action plan.
                              </p>

                              <p>
                                Despite the mixed feelings on the outcomes of COP 27, my experience has
                                 being the best so far in terms of participation and logistics. 
                                 The Egypt Government did a great job with logistical arrangement with 
                                 very affordable accommodation. My effective participation in COP 27
                                would not have been possible without the support of Omega and the
                                HBCU Green Fund. The HBCU Green Fund technical and financial 
                                support through its Pre-COP27 virtual Conference was very helpful
                                and insightful. It empowered me to know more about trending 
                                climate issues prior to COP 27 and also gave me the opportunity
                                to connect and network with Climate youth leaders and advocates
                                from Sub-Saharan Africa and the diaspora embarking on amazing 
                                innovations in creating solutions at the community level.
                            </p>

                            <p>
                                Although COP27 ended with several important steps to curb the climate
                                crisis, its impacts continues to worsen. There is therefore the need
                                for increased action on climate change from governments, financial 
                                institutions, corporations and Civil Society organisations to limit
                                emissions and accelerate climate resilience. The attention from 
                                now until COP 28 will therefore need to be on turning agreements
                                and promises into specific actions that reduce emissions,
                                protect people in vulnerable communities and green the planet.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

                                {/*SMALL  SCREENS */}
            <div className="mainContainer flex  md:hidden flex-col items-center justify-center pt-32">
  <div className="subContainer w-[90%]">
    <p className="uppercase text-[#EFA51E] font-Roboto font-bold text-xl mb-10 leading-snug">
            COP 27 IN RETROSPECT
    </p>

    <div>
      <img src={img2} alt="CCSE and Knutsford University College" className="w-full rounded-md mb-6" />

      <div className="text-[#232323] font-Inter font-medium space-y-6 my-4 text-base leading-relaxed">
        <p>
            COP 27 was the first COP in Africa after more than a decade and was dubbed the “African COP”.
            It took place in Sharma El-Sheikh, Egypt from the 6 th to the 18 th of November 2022 under
            the theme “together for Implementation” with focus on turning promises into action.
            Going to COP 27, there was conversation around making sure the developing economies gets 
            justice for a crisis they did not cause but have to deal with its effects. People from 
            the Global South were therefore hopeful that COP 27 would be a big step forward on major
            issues like securing climate finance for developing countries (US$100 billion), 
            financial Mechanism for loss and damage and increasing support for adaptation and 
            mitigation. Unfortunately, COP 27 concluded with mixed feelings for me and I had
            two major big takeaways.
        
        </p>

        <p>
            Firstly as someone from a vulnerable country, the fact that Parties agreed to create a loss
            and damage fund to help compensate developing economies and areas highly suffering from the 
            devastating effects of climate change is history in the making. This massive success was
            made possible by the untiring work of activists all over the world. Despite the win, my
            only hope is that the loss and damage funds does not end up like the existing climate
            funds (Adaptation Fund, Green Climate Fund, Global Environment Facility etc.)
            The cumbersome and beaurecratic nature of these facilities makes it very difficult
            for developing countries to follow and access these funds. Vulnerable Countries
            like Ghana has already being dealing with losses and damages for decades and 
             therefore if a funding mechanism is to be in operation, then it should be
            easily accessible.
        </p>

        <p>
            Secondly as someone who follows Action for Climate Empowerment (ACE) negotiations,
             I was pleased that parties adopted the 4-year ACE action plan. The ACE action plan
              sets out short- term, clear and time-bound activities in the four priority areas
               (Policy Coherence, Coordinated Action, Tools and Support, Monitoring, Evaluation 
               and Reporting) aimed at addressing gaps and challenges related to implementing 
               the six ACE elements (Climate Change Education, Training, Public Participation,
                Public Awareness, Public Access to Information and International Cooperation
                 on these issues) creating opportunities to accelerate their implementation.    
        </p>
      </div>


      <div className="text-[#232323] font-Inter font-medium space-y-6 my-6 text-base leading-relaxed">
        <p>
            Unfortunately, the ACE negotiations at the Bonn Conference (Subsidiary Bodies of 
            Implementation, SBI 56) ended on a disappointing note with parties just managing to
            come up with an informal note. Parties were therefore so much determined to complete
            the informal note into an action plan at COP 27. Although it took hours of negotiations 
            to agree on certain deliverables in the action plan and with negotiations coming to a 
            halt for hours at some point, Parties managed to compromise their positions and adopted
            the first ACE action plan. My only reservation with this action plan is the fact that
            it was adopted without a funding mechanism. Climate Education, Training and Public
            Participation cannot be effectively implemented without the requisite financial
            backing and unfortunately, that was missing in the action plan.
        </p>

        <p>
            Despite the mixed feelings on the outcomes of COP 27, my experience has being the best so
            far in terms of participation and logistics. The Egypt Government did a great job with 
            logistical arrangement with very affordable accommodation. My effective participation
            in COP 27 would not have been possible without the support of Omega and the HBCU Green
            Fund. The HBCU Green Fund technical and financial support through its Pre-COP27 virtual
            Conference was very helpful and insightful. It empowered me to know more about 
            trending climate issues prior to COP 27 and also gave me the opportunity to connect
            and network with Climate youth leaders and advocates from Sub-Saharan Africa and
            the diaspora embarking on amazing innovations in creating solutions at the community
            level.
        </p>

        <p>
            Although COP27 ended with several important steps to curb the climate crisis, its impacts
             continues to worsen. There is therefore the need for increased action on climate change 
             from governments, financial institutions, corporations and Civil Society organisations
              to limit emissions and accelerate climate resilience. The attention from now until COP
               28 will therefore need to be on turning agreements and promises into specific actions
                that reduce emissions, protect people in vulnerable communities and green the planet.
        </p>
      </div>
    </div>
  </div>
</div>

            <Footer />
        </>
    )
}
export default News5;