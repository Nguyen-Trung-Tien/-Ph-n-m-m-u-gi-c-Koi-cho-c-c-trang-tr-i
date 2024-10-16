import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/home.css'

const Home = () => {
    return (
        <div id="main">
            <Header />
            <div id="content">
                <div className="cover-page">
                    <div className="banner-container">
                        <img src="../img/breeders-transparent.png" alt="" className="banner-img"/>
                        <div className="banner-text-container">
                            <h1 className="banner-text">AUCTIONKOI</h1>
                        </div>
                    </div>
                    <div className="flexgrow">
                        <h1 className="banner-slogan">Kết Nối Trực Tiếp Với Những Người Nuôi Cá Koi Hàng Đầu
                            <span> Nhật Bản</span>
                        </h1>
                    </div>
                    
                    <div className="button-container">
                        <a href="/auction" className="btn btn-Auction">View Auctions</a>
                        <a href="/about" className="btn btn-Learn">Learn More</a>
                    </div>
                </div>
                <div className="trademark-container">
                    <div className="trademark">
                        <img src="../logo/dainichi-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Dainichi</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/isa-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Isa</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/izumiya-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Izumiya</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/kanno-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Kanno</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/marudo-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Marudo</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/maruhiro-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Maruhiro</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/marujyu-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Marujyu</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/marushin-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Marushin</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/nnd-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Nnd</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/omosako-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Omosako</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/sakai-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Sakai</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/shinoda-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Shinoda</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/shintaro-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Shintaro</span>
                    </div>
                    <div className="trademark">
                        <img src="../logo/torazo-logo.png" alt="" className="trademark-img"/>
                        <span className="trademark-name">Torazo</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
