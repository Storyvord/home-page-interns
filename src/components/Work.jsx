import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1100 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1100, min: 768 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Work = () => {

    
}

    const carouselRef = useRef();

    const sliderImageUrl = [
        {
            url: "https://storyvord.com/img/festive-collection-2022.jpg",
            name: "Festive Collection 2022"
        },
        {
            url: "https://storyvord.com/img/sajay-ali-fashionfilm.jpg",
            name: "Sajay Ali Fashionfilm"
        },
        {
            url: "https://storyvord.com/img/west-collection-2022.jpg",
            name: "West Collection 2022"
        },
        {
            url: "https://storyvord.com/img/portfolio-thmb1.png",
            name: "rippel"
        },
        {
            url: "https://storyvord.com/img/portfolio-thmb5.png",
            name: "rippel"
        },
        {
            url: "https://storyvord.com/img/portfolio-thmb13.png",
            name: "Portfolio Thumbnail 13"
        },
        {
            url: "https://storyvord.com/img/portfolio-thmb2.png",
            name: "Portfolio Thumbnail 2"
        },
        {
            url: "https://storyvord.com/img/portfolio-thmb9.png",
            name: "Portfolio Thumbnail 9"
        },
        {
            url: "https://storyvord.com/img/perfume.jpg",
            name: "Perfume"
        }
    ];

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    return (
        <section className="container max-w-full p-6 lg:p-20 bg-[#092679] flex justify-center items-start">
            <div className="text-white text-left w-full lg:w-4/5 py-4">
                <h2 className="text-[30px] lg:text-[40px] font-bold font-barlow-2 uppercase">Our Work</h2>
                <p className="font-josefin text-[16px] lg:text-[20px] py-2">Content for any audience, goal, or budget</p>
                <div className="relative text-white">
                    <img
                        src="https://storyvord.com/img/drag.svg"
                        className="hover:scale-75 transform-none absolute top-[-30px] right-0 lg:top-[-38px] mt-[-48px] cursor-pointer"
                        alt="drag"
                        onClick={handleNext}
                    />
                </div>
                <div className="py-6 lg:py-10">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        stagePadding={0}
                        arrows={false}
                        showDots={false}
                        ref={carouselRef}
                    >
                        {sliderImageUrl.map((imageUrl, index) => (
                            <div className="mx-2 lg:mx-2 relative" key={index}>
                                <img
                                    src={imageUrl.url}
                                    alt="movie"
                                    className="w-full h-full"
                                />
                                <h6 className="absolute bottom-2 left-2 text-white bg-opacity-50 px-2 py-1 font-barlow-2 font-bold uppercase drop-shadow-2xl">
                                    {imageUrl.name}
                                </h6>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};


export default Work;
