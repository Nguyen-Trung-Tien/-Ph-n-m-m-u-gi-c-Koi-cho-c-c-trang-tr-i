import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuctionCarousel from '../components/AuctionCarousel';
import '../css/auction.css';

const Auction = () => {
    const [typeFilter, setTypeFilter] = useState('all');
    const [sizeFilter, setSizeFilter] = useState('all');
    const [colorFilter, setColorFilter] = useState('all');
    const [maxPriceFilter, setMaxPriceFilter] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

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

    const applyFilters = () => {
        const filtered = auctionItems.filter(item => {
            const matchesType = typeFilter === 'all' || item.type === typeFilter;
            const matchesSize = sizeFilter === 'all' || item.size === sizeFilter;
            const matchesColor = colorFilter === 'all' || item.color === colorFilter;
            const matchesPrice = !maxPriceFilter || item.price <= parseFloat(maxPriceFilter);
            return matchesType && matchesSize && matchesColor && matchesPrice;
        });
        setFilteredItems(filtered);
    };

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
                                    <select
                                        id="typeFilter"
                                        className="form-control"
                                        value={typeFilter}
                                        onChange={(e) => setTypeFilter(e.target.value)}
                                    >
                                        <option value="all">All</option>
                                        <option value="koi">Koi</option>
                                        <option value="butterfly">Butterfly Koi</option>
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="sizeFilter">Size:</label>
                                    <select
                                        id="sizeFilter"
                                        className="form-control"
                                        value={sizeFilter}
                                        onChange={(e) => setSizeFilter(e.target.value)}
                                    >
                                        <option value="all">All</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="colorFilter">Color:</label>
                                    <select
                                        id="colorFilter"
                                        className="form-control"
                                        value={colorFilter}
                                        onChange={(e) => setColorFilter(e.target.value)}
                                    >
                                        <option value="all">All</option>
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="white">White</option>
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="priceFilter">Max Price:</label>
                                    <input
                                        type="number"
                                        id="maxPriceFilter"
                                        className="form-control"
                                        value={maxPriceFilter}
                                        onChange={(e) => setMaxPriceFilter(e.target.value)}
                                        placeholder="Max Price"
                                    />
                                </div>
                                <button id="applyFilters" className="btn btn-primary" onClick={applyFilters}>Apply Filters</button>
                            </div>
                        </div>
                        <div className="row row-cols-4">
                            {filteredItems.length > 0 ? (
                                filteredItems.map(item => (
                                    <div key={item.id} className="col">
                                        <div className="auction-item" data-type={item.type} data-name={item.name} data-size={item.size} data-color={item.color} data-price={item.price}>
                                            <div className="auction-image">
                                                <img src={item.image} alt="Product" />
                                            </div>
                                            <div className="auction-details">
                                                <h2 className="auction-title">Product Name: {item.name}</h2>
                                                <p className="auction-start-price">Starting Price: $100</p>
                                                <p className="auction-current-price">Current Price: ${item.price}</p>
                                                <p className="auction-time-left">Time Left: 2d 3h 15m</p>
                                                <Link to={`/auction/${item.id}`} className="btn btn-primary custom-btn">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                auctionItems.map(item => (
                                    <div key={item.id} className="col">
                                        <div className="auction-item" data-type={item.type} data-name={item.name} data-size={item.size} data-color={item.color} data-price={item.price}>
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
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <h2>Hot Auction Item</h2>
                    <div className="container text-center">
                        <AuctionCarousel />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Auction;
