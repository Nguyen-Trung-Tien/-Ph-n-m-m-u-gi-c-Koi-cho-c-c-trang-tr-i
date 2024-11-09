import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import '../css/successful-auctions.css';

const SuccessfulAuctionsList = () => {
    const [successfulAuctions, setSuccessfulAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

    useEffect(() => {
        if (user && user.id) {
            fetchSuccessfulAuctions(user.id);
        }
    }, [user]);

    const fetchSuccessfulAuctions = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8080/auction/api/successful-auctions/users/${userId}`);
            setSuccessfulAuctions(response.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách đấu giá thành công:", error);
            setError("Không thể lấy danh sách đấu giá thành công.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="main">
            <Header />
            <div id="content">
                <div className="container mt-5">
                    <h2 className="text-center mb-4">Danh sách đấu giá thành công</h2>
                    {loading ? (
                        <div className="text-center">Đang tải...</div>
                    ) : error ? (
                        <div className="text-danger text-center">{error}</div>
                    ) : (
                        <div id="successful-auction-container">
                            <table className="table table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên cá</th>
                                        <th>Hình ảnh</th>
                                        <th>Giá cuối</th>
                                        <th>Thời gian kết thúc</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {successfulAuctions.map(auction => (
                                        <tr key={auction.id}>
                                            <td>{auction.id}</td>
                                            <td>{auction.koiName}</td>
                                            <td>
                                                <img src={`/img/h${auction.koiId}.jpg`} alt={auction.koiName} style={{ width: '100px', height: 'auto' }} />
                                            </td>
                                            <td>{auction.finalPrice}</td>
                                            <td>{new Date(auction.auctionEndTime).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SuccessfulAuctionsList;
