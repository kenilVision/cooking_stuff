import React, { useState, useEffect } from 'react';
import image1 from '../../assets/Home/Slider/image1.png';
import image2 from '../../assets/Home/Slider/image2.png';
import image3 from '../../assets/Home/Slider/image3.png';
import live from '../../assets/Home/Slider/Group 4.png'
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Background images array
  const backgroundImages = [image1, image2, image3];

  return (
    <div className="relative w-full">
      <div
        className="relative  rounded-lg flex justify-center"
        style={{
          backgroundImage: `url(${backgroundImages[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
       
       <div className={`w-7xl p-16 min-heigth-[515px] ${currentIndex === 0 ? 'block' : 'hidden'}`}>
        <img src={live} 
        Width="111"
        Height="63px"
        className='mb-11'
        />
        <div className='text-white text-5xl font-bold mb-11'>Find Your <span className='text-[#ffbf00]'>Favorite<br/>
        Food & Make Better</span> <br/>Your Cooking</div>
        <div className='text-[#D7F315] text-5xl font-bold mb-5 '>
        10th - 20th May
        </div>
        <div className='flex text-2xl text-white'>
            <div className='bg-black p-3'>
                Lifetime access
            </div>
            <div className='bg-[#F99106] p-3'>
                 Videos
            </div>
            <div className='bg-[#FAEE21] p-3'>
                    PDF
            </div>
        </div>

       </div>


       <div className={`w-7xl p-16 ${currentIndex === 1 ? 'block' : 'hidden'}`}>
        <img src={live} 
        Width="111"
        Height="63px"   
        />
        <div className='text-white text-5xl font-bold mb-1'><span className='text-[#faee21]'>Variety of Juice</span><br/>
        Workshop </div>
        <div className='text-black bg-white text-3xl font-bold px-6 py-2 mb-8 w-fit rounded-md '>
        10th - 20th May
        </div>
      
        <div className='text-white text-3xl font-bold   mb-7'>
            <span className='relative inline-block pe-3 '>
                <span className='absolute left-0 right-0 top-1/2  transform rotate-12 border-t-5 border-red-500 w-full h-0'></span>
                $5000
            </span>
            $500 (Lifetime access)
            </div>
            <div className='text-white text-3xl font-bold  mb-5'>
            10+ Recipes
            </div>
        <div className='flex text-2xl text-white'>
            <div className='bg-black p-3'>
                Lifetime access
            </div>
            <div className='bg-[#F99106] p-3 '>
                 Videos
            </div>
            <div className='bg-[#FAEE21] p-3'>
                    PDF
            </div>
        </div>

       </div>

       <div className={`w-7xl p-16 min-heigth-[515px] ${currentIndex === 2 ? 'block' : 'hidden'}`}>
        <div className='text-black text-6xl font-bold mb-11'> <span className='text-[#B821FA] text-5xl'>Gaint Strawberry</span><br/>
        Workshop</div>
        <div className='text-white text-5xl font-bold mb-11 bg-[#F99106] rounded-md w-fit p-3'>
        Coming Soon
        </div>
        <div className='text-[#FA2147] text-3xl font-bold  mb-5 '>
            10+ Recipes
        </div>
        <div className='flex text-2xl text-white'>
            <div className='bg-black p-3'>
                Lifetime access
            </div>
            <div className='bg-[#F99106] p-3'>
                 Videos
            </div>
            <div className='bg-[#FAEE21] p-3'>
                    PDF
            </div>
        </div>

       </div>



      </div>



      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${currentIndex === 0 ? 'bg-gray-600' : 'bg-gray-300'}`}
          onClick={() => setCurrentIndex(0)}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${currentIndex === 1 ? 'bg-gray-600' : 'bg-gray-300'}`}
          onClick={() => setCurrentIndex(1)}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${currentIndex === 2 ? 'bg-gray-600' : 'bg-gray-300'}`}
          onClick={() => setCurrentIndex(2)}
        ></button>
      </div>
    </div>
  );
}

export default Slider;
