'use client'

import { useState, useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from "next/image";
import logo from '../public/REVA_1.png'
import img1 from '../public/1.png'
import img2 from '../public/2.png'
import img3 from '../public/3.png'
import img4 from '../public/4.png'


const classes = {
    InfoSection: 'z-10 flex-1 w-[452px] lg:-ml-[200px] lg:max-w-[650px] p-8 lg:clip-slant-left flex flex-col items-center gap-2 justify-center bg-white ',
    logo: 'h-14 w-auto 2xl:h-20 object-contain -ml-8 mt-[1px] ml-2',
    DateLocation: 'ml-4 flex  flex-row gap-4 mt-4 sm:max-width-[350px]',
    Date: 'border mt-2 rounded-2xl 2xl:text-2xl text-black py-1 p-2',
    Location: 'font-bold mt-1 text-black 2xl:text-2xl p-2',
    Details: 'max-w-[400px] 2xl:max-w-[500px] font-medium 2xl:text-xl text-black ml-12 text-justify p-2',
    buttons: 'flex flex-row  gap-6 2xl:gap-12 mt-3 mb-[1px] mb:-ml-4',
    ContactButton: 'border text-black 2xl:text-lg font-medium p-4 lg:p-3 rounded-xl ',
    RegisterNow: ' flex items-center justify-between bg-orange-400 font-medium 2xl:text-lg text-white p-4 lg:p-3 rounded-xl'
}

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='flex flex-row w-full rounded-2xl pt-[7.6rem]'>
            <div className="relative flex-1 overflow-hidden hidden lg:block">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <Image key={index} src={src} className="w-full  min-h-[450px] object-cover " alt={`Slide ${index + 1}`} />
                    ))}
                </div>
                <button className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full bg-opacity-50 text-white border-none p-2 py-0 cursor-pointer left-2 z-20" onClick={prevSlide}>&#10094;</button>
                <button className="absolute top-1/2 transform -translate-y-1/2 bg-black rounded-full bg-opacity-50 text-white border-none p-2 py-0 cursor-pointer right-2 md:right-24 2xl:right-24 z-20  " onClick={nextSlide}>&#10095;</button>
            </div>
            <div className={classes.InfoSection}>
                <div className=' lg:-mr-[70px] flex flex-col justify-center items-center gap-2'>
                    <Image src={logo} className={classes.logo} alt="#" />
                    <div className={classes.DateLocation}>
                        <div className={classes.Date}>September 9-12, 2025</div>
                        <div className={classes.Location}>Bengaluru,India</div>
                    </div>
                    <div className={classes.Details}>ICAECC, an international conference on engineering, technology, and education is the IEEE Education Society’s premier conference series in the Asia-Pacific region. </div>
                    <div className={classes.buttons}><button className={classes.ContactButton}>Contact Us</button>
                        <button className={classes.RegisterNow}>Register Now !<KeyboardArrowRightIcon /></button></div>
                </div>
            </div></div>
    );
};

export default Carousel;