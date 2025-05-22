import svg1 from '/src/assets/svgs/contact-1.svg'
import svg2 from '/src/assets/svgs/contact-2.svg'
import svg3 from '/src/assets/svgs/contact-3.svg'


function ContactUs() {
    return(
        <>
                {/*LARGE SCREENS */}
            <div className="mainContainer hidden pt-60 mb-40 md:flex justify-center items-center">
                <div className="subContainer w-[90%] ">
                    <p className="font-Roboto font-bold text-[#EFA51E] text-3xl text-left mb-10">CONTACT US</p>

                    <p className="font-Inter font-bold italic text-[#1D7948] text-left mb-5">Let’s Connect</p>
                    
                    <p className='font-Inter font-medium mb-7'>Whether you’re looking to partner, volunteer, donate, or learn more about our work, we’re <br /> just a message away.</p>

                    <div className="flex justify-center gap-20 items-center"> {/*CONATCT CARD */}
                        
                            <form className="space-y-8 w-1/2 border border-white py-5 px-10 font-Roboto shadow-[0_0px_20px_rgba(0,0,0,0.2)]">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                                <input id="name" type="text" className="w-full p-0.5 border focus:outline-none border-[#cecece] rounded" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                <input id="email" type="email" className="w-full p-0.5 border focus:outline-none border-[#cecece] rounded" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                                <input id="project" type="text"  className="w-full h-28 p-0.5 border focus:outline-none border-[#cecece] rounded" />
                            </div>
                            <button type="submit" className="bg-[#1D7948] mt-5 text-white px-4 py-0.5 w-full rounded">Send</button>
                            </form>

                            <div className="flex flex-col w-1/2 justify-start md:gap-10 lg:gap-20 md:ml-0 lg:ml-28">
                            <div className="flex items-start gap-5 font-Inter font-medium">
                              <img src={svg1} alt="Email Us" className="w-12 h-12 self-start" />
                              <div>
                                <p>info@ccseghana.com <br />ccseghana@gmail.com</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-5 font-Inter font-medium">
                              <img src={svg2} alt="Call Us" className="w-12 h-12 self-start" />
                              <div>
                                <p>+233 24 418 2515 <br /> +233 50 223 8487</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-5 font-Inter font-medium">
                              <img src={svg3} alt="Location" className="w-12 h-12 self-start" />
                              <div>
                                <p>Parakuo Estate, Oko Street <br />Opposite Chrispod Hospital <br />Dome</p>
                              </div>
                            </div>
                          </div>
                       

                    </div>

                    
                    
                    <div className=' mt-30 w-full h-[500px]'>

                    <svg className='w-full'  viewBox="0 0 1322 554" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1322" height="554" fill="#D9D9D9"/>
                    </svg>

                    </div>


                </div>
            </div>

                {/*SMALL SCREENS */}
            <div className="mainContainer pt-30 mb-20 flex flex-col items-center">
  <div className="subContainer w-[90%]">
    <p className="font-Roboto font-bold text-[#EFA51E] text-2xl text-center mb-6">CONTACT US</p>

    <p className="font-Inter font-bold italic text-[#1D7948] text-center mb-4">Let’s Connect</p>

    <p className="font-Inter font-medium mb-16 text-center">
      Whether you’re looking to partner, volunteer, donate, or learn more about our work, we’re just a message away.
    </p>

    {/* Contact Card - Column Layout for Mobile */}
    <div className="flex flex-col gap-10 items-center">
      
      {/* Contact Form */}
      <form className="space-y-6 w-full border border-white py-5 px-5 font-Roboto shadow-[0_0px_20px_rgba(0,0,0,0.2)] mb-16">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input id="name" type="text" className="w-full p-2 border border-[#cecece] rounded focus:outline-none" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input id="email" type="email" className="w-full p-2 border border-[#cecece] rounded focus:outline-none" />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea id="message" className="w-full h-32 p-2 border border-[#cecece] rounded focus:outline-none"></textarea>
        </div>

        <button type="submit" className="bg-[#1D7948] text-white py-2 w-full rounded">Send</button>
      </form>

      {/* Contact Info */}
      <div className="flex flex-col gap-6 w-full ml-5">
        <div className="flex items-start gap-4 font-Inter font-medium">
          <img src={svg1} alt="Email Us" className="w-10 h-10 self-start" />
          <p>info@ccseghana.com <br /> ccseghana@gmail.com</p>
        </div>

        <div className="flex items-start gap-4 font-Inter font-medium">
          <img src={svg2} alt="Call Us" className="w-10 h-10 self-start" />
          <p>+233 24 418 2515 <br /> +233 50 223 8487</p>
        </div>

        <div className="flex items-start gap-4 font-Inter font-medium">
          <img src={svg3} alt="Location" className="w-10 h-10 self-start" />
          <p>Parakuo Estate, Oko Street <br /> Opposite Chrispod Hospital <br /> Dome</p>
        </div>
      </div>
    </div>

    {/* Optional: SVG Section for Visual Enhancement */}
    <div className='mt-20 w-full h-72'>
      <svg className='w-full h-full' viewBox="0 0 922 554" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1322" height="554" fill="#D9D9D9" />
      </svg>
    </div>
  </div>
</div>

        </>
    )
}

export default ContactUs;