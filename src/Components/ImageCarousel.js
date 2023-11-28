

//npm install react-responsive-carousel --save

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; // Importe seu arquivo CSS

const ImageCarousel = ({ images }) => {
  return (
    <div className="image-carousel-container">
      <Carousel className="image-carousel">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

