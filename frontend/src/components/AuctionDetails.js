import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/auction-details.css';
import { useUser } from '../UserContext/UserContext';
import axios from 'axios';

const AuctionDetails = () => {
    const { id } = useParams(); 
    const [koiDetails, setKoiDetails] = useState(null);
    const [bidDetails, setBidDetails] = useState();
    const [auctionTransactions,setAuctionTransactions] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [timeRemaining, setTimeRemaining] = useState('');
    const [isAuctionEnded, setIsAuctionEnded] = useState(false);
    const [bidPrice, setBidPrice] = useState('');
    const { user, setUser } = useUser();
    const [temporaryBid, setTemporaryBid] = useState(null);

    useEffect(() => {
        const fetchKoiDetails = async () => {
            try {
                console.log(`Fetching Koi Details for Koi ID: ${id}...`);
                const response = await axios.get(`http://localhost:8080/auction/info/addAuction/${id}`);
                console.log("Koi Details fetched successfully:", response.data);
                const koiData = response.data;
                setKoiDetails(koiData.bid.koi);
                setBidDetails(koiData.bid);
                setAuctionTransactions(koiData.auctionTransactions);
                calculateTimeRemaining(koiData.auctionEndTime);
            } catch (error) {
                console.error('Lỗi khi lấy chi tiết cá koi:', error);
                setErrorMessage('Không thể lấy chi tiết cá koi.');
            }
        };

        fetchKoiDetails();
    }, [id]);

    useEffect(() => {
        let timer;
        if (koiDetails && koiDetails.auctionEndTime) {
            timer = setInterval(() => {
                calculateTimeRemaining(bidDetails.auctionEndTime);
            }, 1000);
        }

        return () => clearInterval(timer); 
    }, [koiDetails]);

    const calculateTimeRemaining = (auctionEndTime) => {
        const endTime = new Date(auctionEndTime);
        const remainingTime = endTime - Date.now();

        if (remainingTime > 0) {
            const days = Math.floor(remainingTime / (1000 * 3600 * 24));
            const hours = Math.floor((remainingTime % (1000 * 3600 * 24)) / (1000 * 3600));
            const minutes = Math.floor((remainingTime % (1000 * 3600)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            setIsAuctionEnded(false);
        } else {
            setTimeRemaining("Phiên đấu giá đã kết thúc");
            setIsAuctionEnded(true);

            // if (temporaryBid) {
            //     updateWallet(user.id, temporaryBid);
            //     setTemporaryBid(null);
            // }
        }
    };


    const handlePlaceBid = async () => {
        if (!user) {
            alert('Bạn cần đăng nhập để thực hiện đấu giá.');
            return;
        }

        const bidAmount = parseFloat(bidPrice);
        const startingPrice = parseFloat(bidDetails.currentPrice);
        if (bidAmount === '' || isNaN(bidAmount)||bidAmount <= startingPrice || bidAmount <= (highestPrice(auctionTransactions)===-Infinity ?0 : highestPrice(auctionTransactions))) {
            alert('Giá đấu phải cao hơn giá khởi điểm hoặc giá cao nhật hiện tại.',highestPrice(auctionTransactions));
            return;
        }

        if (bidAmount > user.wallet) {
            alert('Giá đấu không được vượt quá số tiền trong ví.');
            return;
        }

        if (isAuctionEnded) {
            alert('Phiên đấu giá đã kết thúc, không thể đặt giá đấu.');
            return;
        }

        try {
            const bidResponse = await axios.post(`http://localhost:8080/auction/transaction/add`, {
                // amount: koiDetails.amount + 1,
                price: bidAmount,
                bidId: bidDetails.bidId,
                userId: user.id,
                // auctionStartTime: koiDetails.auctionStartTime
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setBidPrice('');
            alert(`Đặt giá đấu thành công`);

        } catch (error) {
            console.error('Lỗi khi đặt giá đấu:', error);
            if (error.response) {
                alert(`Đặt giá đấu không thành công: ${error.response.data}`);
            } else {
                alert('Đặt giá đấu không thành công.');
            }
        }
    };

    
    // const updateWallet = async (userId, bidAmount) => {
    //     const newWalletBalance = user.wallet - bidAmount;
    //
    //     try {
    //         await axios.put(`http://localhost:8080/auction/users/update/${userId}`, {
    //             wallet: newWalletBalance
    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //
    //         setUser({ ...user, wallet: newWalletBalance });
    //         localStorage.setItem('user', JSON.stringify({ ...user, wallet: newWalletBalance }));
    //     } catch (error) {
    //         console.error('Lỗi khi cập nhật wallet:', error);
    //         alert('Không thể cập nhật số dư trong ví.');
    //     }
    // };

    //return max in auction now
    const highestPrice = (list) => Math.max(...list.map(item => item.price));

    function formatDateTime(dateTimeString) {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        return new Date(dateTimeString).toLocaleDateString('vi-VN', options);
    }

    if (errorMessage) {
        return <p>{errorMessage}</p>;
    }

    if (!koiDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div id="main">
            <Header />
            <div id="content">
                <div className="container-auction-details text-center">
                    <div className="auction-details-wrapper row">
                        <div className="col-md-5 auction-item-image">
                            <img src={`../img/h${koiDetails.koiId}.jpg`} alt={koiDetails.koiName} className="img-fluid" />
                        </div>
                        <div className="col-md-7 auction-item-info" style = {{overflowY:"scroll",maxHeight:"620px"}}>
                            <div className="container text-left">
                                <section className="koi-info">
                                    <div className="card-header">
                                        <h2 className="auction-item-title">{koiDetails.koiName}</h2>
                                    </div>
                                    <div className="row-cols-2 row-custom d-flex flex-wrap g-3">
                                        <div className="col-md-6 card-info">
                                            <span>
                                                <i className="fa-solid fa-venus-mars"></i>
                                                Gender
                                            </span>
                                            <p>{koiDetails.sex || "Unknown"}</p>
                                        </div>
                                        <div className="col-md-6 card-info">
                                            <span>
                                                <i className="fa-solid fa-ruler"></i>
                                                Length
                                            </span>
                                            <p>{koiDetails.length} cm</p>
                                        </div>
                                        <div className="col-md-6 card-info">
                                            <span>
                                                <i className="fa-solid fa-earth-americas"></i>
                                                Breeder
                                            </span>
                                            <p>{koiDetails.breeder.breederName || "Unknown"}</p>
                                        </div>
                                        <div className="col-md-6 card-info">
                                            <span>
                                                <i className="fa-solid fa-cake-candles"></i>
                                                Age
                                            </span>
                                            <p>{koiDetails.age} y</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="koi-info">
                                    <div className="row-cols-2 row-custom d-flex flex-wrap">
                                        <div className="col card-info">
                                            <span>Starting Price</span>
                                            <p>{bidDetails.currentPrice}$</p>
                                        </div>
                                        <div className="col card-info">
                                            <span>Current Highest Price</span>
                                            <p>{highestPrice(auctionTransactions)===-Infinity ?0 : highestPrice(auctionTransactions)}$</p>
                                        </div>
                                        <div className="col card-info">
                                            <span>Start Date:</span>
                                            <p>{formatDateTime(bidDetails.auctionStartTime) || "Hiện chưa có"}</p>
                                        </div>
                                        <div className="col card-info">
                                            <span>End Date</span>
                                            <p>{formatDateTime(bidDetails.auctionEndTime )|| "Hiện chưa có"}</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="koi-info">
                                    <div className="time-remaining">
                                        <span>Time Remaining</span>
                                        <p>{timeRemaining}</p>
                                    </div>
                                    <div className="Input-price-frame">
                                        <input
                                            className="Input-price"
                                            type="number"
                                            placeholder={"Mời nhập giá"}
                                            value={bidPrice}
                                            onChange={(e) => setBidPrice(e.target.value)}
                                            disabled={isAuctionEnded}
                                        />
                                        <button
                                            className="btn btn-primary btn-bid"
                                            onClick={handlePlaceBid}
                                            disabled={isAuctionEnded}
                                        >
                                            Place Bid
                                        </button>
                                    </div>
                                </section>
                            </div>
                            <div className="container_buttom">
                                <div className="container_buttom--header">
                                    <label>Danh sách người dùng đấu giá sản phẩm: </label>
                                </div>
                                {auctionTransactions
                                    .sort((a, b) => new Date(b.transactionTime) - new Date(a.transactionTime)) // Sort in ascending order
                                    .map((box) => (
                                        <div className="container_buttom--box" key={box.id}>
                                            <div className="container_buttom--box_image">
                                                <div className="container_buttom--box_image__immg">
                                                    <i className="fa fa-user change_size"></i>
                                                </div>
                                            </div>
                                            <div className="container_buttom--box_infomation">
                                                <div className="container_buttom--box_infomation-top">
                                                    {box.user.firstName + " " + box.user.lastName}
                                                </div>
                                                <div className="container_buttom--infomation-bottom">
                                                    {formatDateTime(box.transactionTime)}
                                                </div>
                                            </div>
                                            <div className="container_buttom--box_price">
                                                {box.price}$
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AuctionDetails;