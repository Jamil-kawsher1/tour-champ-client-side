import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <div className="mb-5 header">
            <Carousel className="mb-5 header" >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/MhhppP5/tour1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/f99ZQzd/tour2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/zPDGL44/tour3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >


    );
};

export default Header;