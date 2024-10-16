import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/auction.css';

const AuctionCarousel = ({ koiList, timeLeft }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    const auctionItems = koiList.filter(item => item.amount > 10);

    return (
        <div className="auction-carousel">
            <Slider {...settings}>
                {auctionItems.length > 0 ? (
                    auctionItems.map(item => (
                        <div key={item.koiId} className="auction-item" data-type={item.type} data-name={item.koiName} data-size={item.length} data-price={item.startingPrice}>
                            <div className="auction-image">
                                <img src={`../img/h${item.koiId}.jpg`} alt="Product" />
                            </div>
                            <div className="auction-details">
                                <h2 className="auction-title">{item.koiName}</h2>
                                <p className="auction-start-price">Starting Price: {item.startingPrice}$</p>
                                <p className="auction-current-price">Current Price: ${item.currentPrice}</p>
                                <p className="auction-time-left">Time Left: {formatTime(timeLeft[item.koiId])}</p> {/* Hiển thị thời gian còn lại */}
                                <Link to={`/auction/${item.koiId}`} className="btn btn-primary custom-btn">View Details</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không có mục nào đủ điều kiện để hiển thị.</p>
                )}
            </Slider>
        </div>
    );
};

const formatTime = (timeInMillis) => {
    if (timeInMillis <= 0) return "Đã kết thúc";
    const hours = Math.floor((timeInMillis % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeInMillis % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeInMillis % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
};

export default AuctionCarousel;
