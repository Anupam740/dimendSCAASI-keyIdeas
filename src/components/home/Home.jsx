import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://www.dimendscaasi.com/wp-content/product-images/engagement-rings/ds-er-295/shapes/round/ds-er-295-whitegold_platinum_round_default.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://www.dimendscaasi.com/wp-content/product-images/engagement-rings/ds-er-291/shapes/emerald/ds-er-291-whitegold_platinum_emerald_default.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://i.pinimg.com/474x/2c/d4/d9/2cd4d9c8cdce76b919b6b8fba3cfab11--anniversary-rings-diamond-engagement-rings.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://www.dimendscaasi.com/wp-content/product-images/bracelets/ds-br-005/shapes/ds-br-005-whitegold_platinum_round_default.png',
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'https://www.dimendscaasi.com/wp-content/product-images/earrings/ds-err-3/shapes/round/ds-err-3-whitegold_platinum_round_default.jpg',
    },
    // Add more products as needed
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === products.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div name="diamond" className="product-slider">
      <div className="product-slider-inner">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`product-slide ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <img src={product.image} alt={product.name} id="productImg"/>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button className="prev-button" onClick={handlePrevSlide}>
          &lt;
        </button>
        <button className="next-button" onClick={handleNextSlide}>
          &gt;
        </button>
      </div>
      <button className='viewDetailsbtn' onClick={()=>alert("View Details button is clicked")}>View Details</button>
    </div>
  );
}

export default Home;

