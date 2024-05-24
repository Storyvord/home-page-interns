// import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import { useRef } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () => {
    const carouselRef = useRef(null);

    const handlePrevSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const handleNextSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const data = [
        {
            name: 'Matthew Turner',
            description: "Thanks to Storyvord I've been able to connect with new clients and create work that reaches audiences around the world. The platform has opened up new opportunities for me as a filmmaker and I'm grateful for the exposure it has given me.",
        },
        {
            name: 'Alexander Roberts',
            description: "With Storyvord, I've gained the freedom to reach new clients independently, without having to rely solely on production companies. This has provided me with a new source of income and opened up new possibilities for my career as a filmmaker.",
        },
        {
            name: 'Jack Robinson',
            description: "I've always found it difficult to connect with bigger players in the industry. But thanks to the Storyvord platform, I've been able to network and find new opportunities that would have been difficult to access otherwise. The platform is truly empowering for smaller players in the video production industry.",
        },
    ];

    return (
        <>
            <section>
                <div className='text-white h-[600px] bg-[#092679] flex flex-col items-center relative'>
                    <h2 className="md:text-[37px] text-[23px] lg:text-[48px] font-barlow-2 font-bold uppercase text-center tracking-wide lg:py-20 py-10 p-8 mt-[20px] mb-15">
                        Why Creators love <span className="uppercase text-green-400 tracking-wide">Storyvord?</span>
                    </h2>

                    <div className='lg:w-[60%] md:w-[60%] w-35% overflow-hidden lg:mx-auto mx-4 my-[-5px] relative z-10'>
                        <OwlCarousel
                            className='owl-theme'
                            ref={carouselRef}
                            loop
                            margin={15}
                            slideBy={1}
                            dots={false}
                            stageElement='div'
                            touchDragEnabled={true}
                            center={true}
                            responsive={{
                                0: {
                                    items: 1,
                                    nav: false
                                },
                                768: {
                                    items: 2,
                                    nav: false
                                },
                                1100: {
                                    items: 1.5,
                                    nav: false
                                }
                            }}
                        >

                            {data.map((d, index) => (
                                <div key={index} className='testimonial-item'>
                                    <div className='text-center rounded-3xl lg:p-8 p-4 mx-4 bg-[#000821]'
                                        style={{ height: '110%' }}>
                                        <p className='lg:text-[16px] text-[15px] font-Josefin-Sans font-semibold text-white py-2'>{d.description}</p>
                                        <h3 className='lg:text-[30px] text-[24px] font-extrabold font-barlow text-white uppercase py-1'>{d.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                    <div className='flex lg:flex-col flex-row mt-10 space-x-4'>
                        {/* Left navigation button */}
                        <div className="lg:absolute left-[15%] top-[60%] transform -translate-y-1/2 cursor-pointer lg:z-20 items-stretch" onClick={handlePrevSlide}>
                            <img src="https://storyvord.com/img/circle-left.svg" alt="Left navigation" className='opacity-75 w-12 h-12' />
                        </div>

                        {/* Right navigation button */}
                        <div className="lg:absolute right-[15%] top-[60%] transform -translate-y-1/2 cursor-pointer lg:z-20" onClick={handleNextSlide}>
                            <img src="https://storyvord.com/img/circle-right.svg" alt="Right navigation" className='opacity-75 w-12 h-12' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
