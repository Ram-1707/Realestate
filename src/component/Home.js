
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Home.css';

const Home = () => {
  const images = [
   './img/pexels-photo-186077.jpeg',
   './img/pexels-photo-259588.jpeg',
   './img/pexels-photo-1396122.webp'
  ];

  return (
    <div className='homebg'>
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">EXPLORE BUY LAND PROPERTY</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className=" mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
          <div className="">
            <img 
              src={src} 
              alt={`Property ${index + 1}`} 
              className="himg"
            />
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
      
      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold text-white">Buy, Sell and Rent Property</h2>
        <p className="text-white mt-2 px-4 lg:px-20">
          Real estate properties is one of the best property websites in Tamil Nadu, helping to connect buyers and sellers of properties in Chennai. We provide an innovative interface to buy, rent, and sell commercial and residential properties in Chennai easily.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 d-flex flex-juestify-center">
        <div className="bg-white shadow-lg rounded-lg p-4 m-2 ">
          
          <img src="/img/real-estate-in-chennai.jpg" alt="Real Estate in Chennai" className="w-full h-60 object-cover rounded-md imgres" />
         
      
          <h3 className="text-lg font-bold text-center text-gray-800 mt-4">Real Estate in Chennai</h3>
          <p className="text-gray-600 mt-2">
            The real estate industry in Chennai has been steadily growing. With the advent of the IT sector, SEZs, and IT corridors, property prices have increased by 3% - 5% monthly, while housing demand has risen by 1% - 2.5% per month over the last two years.
          </p>
        
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 m-2">
          <h3 className="text-lg font-bold text-gray-800">Destination Chennai – Real Estate in the City</h3>
          <p className="text-gray-600 mt-2">
            Chennai is a booming real estate market. Over 45 million sq. ft. of housing property has been sold in the past two and a half years. The market has evolved with buyers now opting for large-scale townships with top-notch amenities rather than mid-size projects.
          </p>
          <img src="/img/Property-in-chennai.jpg" alt="Property in Chennai" className="w-full h-60 object-cover rounded-md mt-4 imgres" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
