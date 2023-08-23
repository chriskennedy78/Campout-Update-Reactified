import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bonfire from "../../app/assets/img/bonfire.png";
import brenda from "../../app/assets/img/brenda.jpg";
import candles from "../../app/assets/img/candle-floats.jpg";
import kayaks from "../../app/assets/img/kayaks.jpg";

const ImageCarousel = () => {
    const images = [bonfire, brenda, candles, kayaks];
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
        >
            {images.map((images, index) => (
                <div key={index}>
                    <img src={images} alt={`Slide ${index}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
