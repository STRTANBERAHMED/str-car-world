import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/topbg1.jpg';
import banner2 from '../../../images/topbg2.jpg';
import banner3 from '../../../images/topbg3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Str Car World</h3>
                        <p>Bugatti Chiron Red</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Str Car World</h3>
                        <p>Bugatti Chiron Blue</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Str Car World</h3>
                        <p>Lamborghini Huracan</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;