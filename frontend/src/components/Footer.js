import React from 'react';
import '../css/base.css';
import '../css/auction.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-heading">Về Chúng Tôi</h2>
                    <p>Chúng tôi cung cấp nền tảng đấu giá cá koi, giúp người đam mê tìm kiếm và đặt giá cho những chú cá yêu thích.</p>
                </div>
                <div className="footer-section">
                    <h2 className="footer-heading">Liên Kết Nhanh</h2>
                    <ul>
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="/auction">Đấu Giá</a></li>
                        <li><a href="/help">Hỗ Trợ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-heading">Liên Hệ Chúng Tôi</h2>
                    <p><i className="fas fa-map-marker-alt"></i> 123 Koi Street, Fish City, KO 12345</p>
                    <p><i className="fas fa-phone-alt"></i> +1 234 567 890</p>
                    <p><i className="fas fa-envelope"></i> info@auctionkoi.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 AuctionKoi | Thiết kế bởi KhongCo
            </div>
        </footer>
    );
};

export default Footer;
