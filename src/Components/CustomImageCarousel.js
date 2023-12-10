// CustomImageCarousel.jsx
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div>
      {/* Carrossel dentro do modal */}
      <Carousel showArrows={true} selectedItem={selectedImageIndex}>
        {images.map((image, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            <img
              src={`images/portfolio/${image}`}
              alt={`Image ${index + 1}`}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </Carousel>

      {/* Previews acima do carrossel */}
      <div style={{ display: 'flex', marginTop: '10px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={`images/portfolio/${image}`}
            alt={`Preview ${index + 1}`}
            style={{
              width: '50px',
              height: '50px',
              marginRight: '5px',
              border: index === selectedImageIndex ? '2px solid #000' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomImageCarousel;