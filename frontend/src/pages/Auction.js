import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuctionCarousel from '../components/AuctionCarousel';
import '../css/auction.css';
const Auction = () => {
    return (
        <div id="main">
            <Header />
            <div id="content">
                <label className=""></label>
                <div className="home-product">
                    <div className="container text-center">
                        <div className="home-filter-container">
                            <div className="home-filter">
                                <div className="filter-group">
                                    <label htmlFor="typeFilter">Type:</label>
                                    <select id="typeFilter" className="form-control">
                                        <option value="all">All</option>
                                        <option value="koi">Koi</option>
                                        <option value="butterfly">Butterfly Koi</option>
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="sizeFilter">Size:</label>
                                    <select id="sizeFilter" className="form-control">
                                        <option value="all">All</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="colorFilter">Color:</label>
                                    <select id="colorFilter" className="form-control">
                                        <option value="all">All</option>
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="white">White</option>
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="priceFilter">Max Price:</label>
                                    <input type="number" id="maxPriceFilter" className="form-control"
                                           placeholder="Max Price"/>
                                </div>
                                <button id="applyFilters" className="btn btn-primary">Apply Filters</button>
                            </div>
                        </div>
                        <div className="row row-cols-4">
                            <div className="col">
                                <div className="auction-item" data-type="koi" data-size="small" data-color="red"
                                     data-price="150">
                                    <div className="auction-image">
                                        <img src="../img/h1.jpg" alt="Product Image"/>
                                    </div>
                                    <div className="auction-details">
                                        <h2 className="auction-title">Product Name</h2>
                                        <p className="auction-start-price">Starting Price: $100</p>
                                        <p className="auction-current-price">Current Price: $150</p>
                                        <p className="auction-time-left">Time Left: 2d 3h 15m</p>
                                        <a href="#" className="btn btn-primary custom-btn">Place Bid</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="auction-item" data-type="koi" data-size="small" data-color="red"
                                     data-price="150">
                                    <div className="auction-image">
                                        <img src="../img/h1.jpg" alt="Product Image"/>
                                    </div>
                                    <div className="auction-details">
                                        <h2 className="auction-title">Product Name</h2>
                                        <p className="auction-start-price">Starting Price: $100</p>
                                        <p className="auction-current-price">Current Price: $150</p>
                                        <p className="auction-time-left">Time Left: 2d 3h 15m</p>
                                        <a href="#" className="btn btn-primary custom-btn">Place Bid</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="auction-item" data-type="koi" data-size="small" data-color="red"
                                     data-price="150">
                                    <div className="auction-image">
                                        <img src="../img/h1.jpg" alt="Product Image"/>
                                    </div>
                                    <div className="auction-details">
                                        <h2 className="auction-title">Product Name</h2>
                                        <p className="auction-start-price">Starting Price: $100</p>
                                        <p className="auction-current-price">Current Price: $150</p>
                                        <p className="auction-time-left">Time Left: 2d 3h 15m</p>
                                        <a href="#" className="btn btn-primary custom-btn">Place Bid</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="auction-item" data-type="koi" data-size="small" data-color="red"
                                     data-price="150">
                                    <div className="auction-image">
                                        <img src="../img/h1.jpg" alt="Product Image"/>
                                    </div>
                                    <div className="auction-details">
                                        <h2 className="auction-title">Product Name</h2>
                                        <p className="auction-start-price">Starting Price: $100</p>
                                        <p className="auction-current-price">Current Price: $150</p>
                                        <p className="auction-time-left">Time Left: 2d 3h 15m</p>
                                        <a href="#" className="btn btn-primary custom-btn">Place Bid</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="auction-item" data-type="koi" data-size="small" data-color="red"
                                     data-price="150">
                                    <div className="auction-image">
                                        <img src="../img/h1.jpg" alt="Product Image"/>
                                    </div>
                                    <div className="auction-details">
                                        <h2 className="auction-title">Product Name</h2>
                                        <p className="auction-start-price">Starting Price: $100</p>
                                        <p className="auction-current-price">Current Price: $150</p>
                                        <p className="auction-time-left">Time Left: 2d 3h 15m</p>
                                        <a href="#" className="btn btn-primary custom-btn">Place Bid</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Hot Auction Item</h2>
                    <div className="container text-center">
                        <AuctionCarousel/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Auction;
