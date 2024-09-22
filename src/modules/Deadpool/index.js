import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { EffectCoverflow, Navigation, Thumbs } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TypingAnimation from "@/components/magicui/typing-animation";


const Deadpool = () => {
    const mainRef = useRef(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    useGSAP(() => {
        gsap.fromTo(
            ".intro .spider img",
            { scale: 0, opacity: 0 },
            { scale: 3, opacity: 1, duration: 1.5, delay: 0.5 }
        );
        gsap.fromTo(
            ".intro .hand",
            { y: 1000, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
        );
        gsap.fromTo(
            ".intro h2",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 1 }
        );
        gsap.fromTo(
            ".thumbs .swiper-slide",
            { x: 1000, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 1 }
        );
    }, { scope: mainRef });

    return (
        <main className="relative w-full h-screen overflow-hidden font-mono" ref={mainRef}>
            <nav className="absolute top-0 z-10 flex items-center w-full h-[150px] px-5 text-white">
                <div className="w-[100px] h-[100px] flex justify-center items-center">
                    <img src="/images/deadpool-logo.png" alt="Spiderman Logo" className="scale-[1.5]" />
                </div>
                <div className="menu mx-[10px] text-[20px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                        />
                    </svg>
                </div>
                <div className="flag ml-[30px] mr-[50px] flex items-center text-[14px]">

                    <img
                        src="/images/flag.png"
                        alt="Flag"
                        className="w-[30px] h-[30px] object-contain"
                    />
                    <div className="current pl-2">
                        <span>ENG</span>
                    </div>
                </div>
                <button className="text-[20px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </nav>

            <div className="relative w-full h-full">
                <Swiper
                    modules={[Thumbs, Navigation, EffectCoverflow]}
                    effect="coverflow"
                    speed={2000}
                    initialSlide={1}
                    thumbs={{ swiper: thumbsSwiper }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="relative w-screen h-screen z-50 bg-red-700"
                >
                    <SwiperSlide className="swiper-slide relative w-full h-full md:overflow-visible overflow-hidden" style={{ background: '#3281c2' }}>
                        <img
                            src="/images/deadpool-watch.png"
                            className="absolute bottom-0 md:right-[26%] right-0 h-[85vh] object-contain cover-img"
                            alt="Spiderman Mask"
                            style={{ transform: 'scale(0.9)' }}
                        />
                        <div className="text absolute bottom-[30%] left-[20%]">
                            <TypingAnimation
                                className="text-6xl font-bold text-white"
                                text={'DEADPOOL'}
                            />
                            <TypingAnimation
                                className="mt-10 text-2xl font-semibold text-white"
                                text={'SUPERHERO'}
                            />
                        </div>
                        <div className="spider absolute bottom-[15%] right-[13%] z-[-1] w-fit h-fit">
                            <img
                                src="/images/deadpool-white-logo.png"
                                className="h-full w-full object-cover scale-[3]"
                                alt="Spiderman Logo"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide relative intro w-full h-full md:overflow-visible overflow-hidden" style={{ background: '#832e2c' }}>
                        <img
                            src="/images/deadpool.png"
                            className="absolute bottom-0 md:right-[30%] right-0 h-[85vh] object-contain cover-img"
                            alt="Spiderman Hand"
                        />
                        <div className="text absolute bottom-[30%] left-[20%] flex justify-start items-center  flex-col">
                            <TypingAnimation
                                className="text-6xl font-bold text-white"
                                text={'DEADPOOL'}
                            />
                            <TypingAnimation
                                className="mt-10 text-2xl font-semibold text-white"
                                text={'SUPERHERO'}
                            />
                        </div>
                        <div className="spider absolute bottom-[10%] right-[12%] z-[-1] w-fit h-fit">
                            <img
                                src="/images/deadpool-white-logo.png"
                                className="h-full w-full object-cover scale-[3]"
                                alt="Spiderman Logo"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide relative w-full h-full md:overflow-visible overflow-hidden" style={{ background: '#3281c2' }}>
                        <img
                            src="/images/deadpool-helmet.png"
                            className="cover-img absolute bottom-0 md:right-[30%] right-0 h-[85vh] object-contain animate-[slow-bounce]"
                            alt="Spiderman Helmet"
                            style={{ transform: 'scale(0.9)' }}
                        />
                        <div className="text absolute bottom-[30%] left-[20%]">
                            <TypingAnimation
                                className="text-6xl font-bold text-white"
                                text={'DEADPOOL'}
                            />
                            <TypingAnimation
                                className="mt-10 text-2xl font-semibold text-white"
                                text={'SUPERHERO'}
                            />
                        </div>
                        <div className="spider absolute bottom-[15%] right-[12%] z-[-1] w-fit h-fit">
                            <img
                                src="/images/deadpool-white-logo.png"
                                className="h-full w-full object-cover scale-[3]"
                                alt="Spiderman Logo"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={2}
                    watchSlidesProgress={true}
                    modules={[Thumbs]}
                    className="thumbs absolute bottom-[300px] -right-[500px] w-[300px] z-[100]"
                >
                    <SwiperSlide className="swiper-slide relative w-[100px] h-1/2 bg-[#266598]">
                        <div className="absolute text-[20px] top-0 right-2 font-semibold z-[100] opacity-[0.7] text-white">01</div>
                        <img src="/images/deadpool-watch.png" alt="Thumb 01" className="w-full h-full object-contain aspect-[3/4]" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide relative w-full h-full bg-red-800">
                        <div className="absolute text-[20px] top-0 right-2 font-semibold z-[100] opacity-[0.7] text-white">02</div>
                        <img src="/images/deadpool.png" alt="Thumb 02" className="w-full h-full object-contain aspect-[3/4]" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide relative w-full h-full bg-[#266598]">
                        <div className="absolute text-[20px] top-0 right-2 font-semibold z-[100] opacity-[0.7] text-white">03</div>
                        <img src="/images/deadpool-helmet.png" alt="Thumb 03" className="w-full h-full object-contain aspect-[3/4]" />
                    </SwiperSlide>
                </Swiper>

                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="swiper-button-next">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" swiper-button-prev">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>

            <div className="socials absolute bottom-[10%] left-[20%] flex gap-5 text-sm z-10">
                <a href="#" className="w-[50px] h-[50px] grid place-content-center bg-[#ffffff0f] border-2 text-white rounded-full">
                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#f4f5f6]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path
                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                    </span>
                </a>
                <a href="#" className="w-[50px] h-[50px] grid place-content-center bg-[#ffffff0f] border-2 text-white rounded-full">
                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#fef9f9]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                    </span>
                </a>
                <a href="#" className="w-[50px] h-[50px] grid place-content-center bg-[#ffffff0f] border-2 text-white rounded-full">
                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#fef9f9]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512">
                            <path
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                    </span>
                </a>
            </div>
        </main>
    );
};

export default Deadpool;