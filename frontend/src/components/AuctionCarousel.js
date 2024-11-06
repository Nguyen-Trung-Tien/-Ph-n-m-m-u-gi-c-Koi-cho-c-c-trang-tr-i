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
                        <div key={item.bidId} className="auction-item" data-type={item.type} data-name={item.koiName} data-size={item.length} data-price={item.startingPrice}>
                            <div className="auction-image">
                                <img src={`../img/h${item.koiId}.jpg`} alt="Product" />
                            </div>
                            <div className="auction-details">
                                <h2 className="auction-title">{item.koiName}</h2>
                                <p className="auction-start-price">Starting Price: {item.startingPrice}$</p>
                                <p className="auction-current-price">Current Price: ${item.currentPrice}</p>
                                <p className="auction-time-left">Time Left: {formatTime(timeLeft[item.bidId])}</p> {/* Hiển thị thời gian còn lại */}
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

    const millisecondsInSecond = 1000;
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    const daysInMonth = 30; // For simplicity, assume 30 days in a month

    // Calculate time components
    const months = Math.floor(timeInMillis / (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay * daysInMonth));
    timeInMillis %= (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay * daysInMonth);

    const days = Math.floor(timeInMillis / (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay));
    timeInMillis %= (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay);

    const hours = Math.floor(timeInMillis / (millisecondsInSecond * secondsInMinute * minutesInHour));
    timeInMillis %= (millisecondsInSecond * secondsInMinute * minutesInHour);

    const minutes = Math.floor(timeInMillis / (millisecondsInSecond * secondsInMinute));
    const seconds = Math.floor((timeInMillis % (millisecondsInSecond * secondsInMinute)) / millisecondsInSecond);

    // return `${months} tháng ${days} ngày ${hours}h ${minutes}m ${seconds}s`;
    return `${days} ngày ${hours}h ${minutes}m ${seconds}s`;

};

// Example usage
// console.log(formatTime(2650000000)); // Output: "1 tháng 25 ngày 11h 46m 40s"


export default AuctionCarousel;
