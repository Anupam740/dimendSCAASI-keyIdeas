import React from 'react'
import "./FineJewelry.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function FineJewelry() {
  const LooseDiamonds = [
    {
      id: 1,
      src:
        'https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/home-slider-asscher-Diamond.webp',
      LdName: 'asscher',
    },
    {
      id: 2,
      src:
        'https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/home-slider-emerald-Diamond.webp',
      LdName: 'emerald',
    },
    {
      id: 3,
      src:
        'https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/home-slider-heart-Diamond.webp',
      LdName: 'heart',
    },
    {
      id: 4,
      src:
        'https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/home-slider-oval-Diamond.webp',
      LdName: 'oval',
    },
    {
      id: 5,
      src:
        'https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/home-slider-round-Diamond.webp',
      LdName: 'round',
    },
  ];

  return (
    <div name="finejewelry" className='finejewelry-container'>
      <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     
      {LooseDiamonds.map(({ id, src, LdName }) => (
            <SwiperSlide key={id} >
              <div id={id} className='finejewelryMapped'>
                <img src={src} alt={LdName} className='finejewelryMappedImg'/>
                <h4>{LdName}</h4>
              </div>
            </SwiperSlide>
          ))}
      
      
    </Swiper>
   
    </div>
  )
}

export default FineJewelry
