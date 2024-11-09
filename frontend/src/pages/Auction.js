import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuctionCarousel from '../components/AuctionCarousel';
import axios from 'axios';
import '../css/auction.css';

const Auction = () => {
    const [koiList, setKoiList] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const [timeLeft, setTimeLeft] = useState({}); 

    useEffect(() => {
        const fetchKoi = async () => {
            try {
                console.log("Fetching Koi List...");
                const response = await axios.get('http://localhost:8080/auction/info/list');
                console.log("Koi List fetched successfully:", response.data);
                setKoiList(response.data);
                
                const remainingTime = {};
                response.data.forEach(item => {
                    const endTime = new Date(item.auctionEndTime).getTime();
                    remainingTime[item.bidId] = endTime - Date.now();
                });
                setTimeLeft(remainingTime);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách cá koi:', error);
                setErrorMessage('Không thể lấy danh sách cá koi.');
            }
        };
        fetchKoi();
    }, []);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const updatedTimeLeft = { ...prev };
                Object.keys(updatedTimeLeft).forEach(koiId => {
                    updatedTimeLeft[koiId] -= 1000;
                });
                return updatedTimeLeft;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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

    return (
        <div id="main">
            <Header />
            <div id="content">
                <div className="home-product">
                    <div className="container text-center">
                        {errorMessage && <p>{errorMessage}</p>}
                        <div className="row row-cols-4">
                            {koiList.length > 0 ? (
                                koiList.map(item => (
                                    <div key={item.bidId} className="col">
                                        <div className="auction-item" data-type={item.type} data-name={item.koiName} data-size={item.length} data-price={item.startingPrice}>
                                            <div className="auction-image">
                                                <img src={`../img/h${item.koiId}.jpg`} alt="Product" />
                                            </div>
                                            <div className="auction-details">
                                                <h2 className="auction-title">{item.koiName}</h2>
                                                <p className="auction-start-price">Starting Price: {item.startingPrice}$</p>
                                                <p className="auction-current-price">Current Price: ${item.currentPrice}</p>
                                                <p className="auction-time-left">Time Left: {formatTime(timeLeft[item.bidId])}</p>
                                                <Link to={`/auction/${item.bidId}`} className="btn btn-primary custom-btn">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Không có cá koi nào.</p>
                            )}
                        </div>
                    </div>

                    <h2>Hot Auction Item</h2>
                    <div className="container text-center">
                        <AuctionCarousel koiList={koiList} timeLeft={timeLeft} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Auction;
