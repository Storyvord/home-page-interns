const Hero = () => {
    return (
        <section className="flex items-center justify-between h-[640px] max-w-full bg-cover bg-center" style={{ backgroundImage: "url('https://storyvord.com/img/banner-bg.png')" }}>
            <div className="relative text-left flex-col p-0 px-3 py-4 lg:ml-24 xl:w-1/2 top-[-40px] text-white">
                <h6 className="text-[16px] font-bold tracking-[4px] antialiased font-barlow-2"><span className="bold-30 font-barlow tracking-[-.075em]">-----------------------</span> STORYVORD</h6>
                <h1 className="text-[65px] font-bold leading-none tracking-[1px] font-barlow-2 py-2">WE HELP SHOOT CONTENT ANYWHERE IN THE WORLD</h1>
                <p className="text-[18px] mt-3 py-5 font-josefin text-extrabold w-3/4">Our AI-powered tools make the production process more efficient and save costs up to 50%</p>
                <div className="mb-0 mt-8 absolute">
                    <div className="h-48 w-80 mb-[-4px]">
                        <div className="flex flex-row justify-between bg-gradient-to-r from-[#03256c] to-green-500 py-4 relative top-10 w-[30vw]">
                            <button className="py-1 px-5 text-[20px] font-barlow font-extrabold text-left sm:mb-0 tracking-normal">Get In Touch
                            </button><img src="https://storyvord.com/img/right-arrow.svg" className="text-right px-5" alt="arrow" />
                        </div>
                        <div className="bg-white h-[165px] px-4 py-8 relative top-[40px] z-10 w-[30vw]">
                            <h2 className="uppercase text-[30px] font-barlow-2 font-bold text-[#092679] mt-2 mb-0 t">Are you a creator?</h2>
                            <div className="relative inline-block">
                                <p className=" underline underline-offset-8  text-[20px] font-barlow-2 bg-gradient-to-r from-[#03256c] to-green-500 bg-clip-text text-transparent font-extrabold " >Start Creating Now</p></div>
                        </div> </div>
                </div>
                <div className="foot w-full h-20 relative top-[180px] left-[74%] flex justify-between">
                    <img src="https://storyvord.com/img/svgicon/move-icon22.svg" className="" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon11.svg" className="" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon33.svg" className="" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon44.svg" className="" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon55.svg" className="" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon66.svg" className="" alt="" />
                </div>
            </div>


            <div className="h-full w-32 bg-black flex flex-col justify-center align-middle gap-10 px-12">
                <a href="https://www.facebook.com/storyvord">
                    <div className="text-white flex">
                        <img src="https://storyvord.com/img/social-media-icon1.svg" alt="facebook" className="h-6 w-6" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/company/storyvord/">
                    <div className="text-white flex">
                        <img src="https://storyvord.com/img/social-media-icon4.svg" alt="linkedin" className="h-6 w-6" />
                    </div>
                </a>
                <a href="https://twitter.com/storyvord">
                    <div className="text-white flex">
                        <img src="https://storyvord.com/img/social-media-icon3.svg" alt="x" className="h-6 w-6" />
                    </div>
                </a>
            </div>
        </section>

    )
}

export default Hero