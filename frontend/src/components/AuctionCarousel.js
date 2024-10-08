import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/auction.css';

const AuctionCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    const auctionItems = [
        { id: 1, type: 'koi', name: "ca koi 1", breeder:'Anos' , size: 'small', Length:'44',age:'2' ,color: 'blue', price: 150, image: '../img/h1.jpg' },
        { id: 2, type: 'koi', name: "ca koi 2",breeder:'Anos' , size: 'medium', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h2.jpg' },
        { id: 3, type: 'koi', name: "ca koi 3",breeder:'Anos' , size: 'medium', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h2.jpg' },
        { id: 4, type: 'butterfly', name: "ca koi 4",breeder:'Anos' , size: 'small', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h4.jpg' },
        { id: 5, type: 'koi', name: "ca koi 5",breeder:'Anos' , size: 'large', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h5.jpg' },
        { id: 6, type: 'koi', name: "ca koi 6",breeder:'Anos' , size: 'small', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h6.jpg' },
        { id: 7, type: 'butterfly', name: "ca koi 7",breeder:'Anos' , size:'small', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h1.jpg' },
        { id: 8, type: 'koi', name: "ca koi 8",breeder:'Anos' , size: 'large', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h1.jpg' },
    ];

    return (
        <div className="auction-carousel">
            <Slider {...settings}>
                {auctionItems.map(item => (
                    <div key={item.id} className="auction-item" data-type={item.type} data-name={item.name} data-size={item.size} data-color={item.color} data-price={item.price}>
                        <div className="auction-image">
                            <img src={item.image} alt="Product" />
                        </div>
                        <div className="auction-details">
                            <h2 className="auction-title">{item.name}</h2>
                            <p className="auction-start-price">Starting Price: $100</p>
                            <p className="auction-current-price">Current Price: ${item.price}</p>
                            <p className="auction-time-left">Time Left: 2d 3h 15m</p>
                            <Link to={`/auction/${item.id}`} className="btn btn-primary custom-btn">View Details</Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AuctionCarousel;
