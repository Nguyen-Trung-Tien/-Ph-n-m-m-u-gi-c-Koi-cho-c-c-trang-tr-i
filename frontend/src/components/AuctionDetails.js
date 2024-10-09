import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/auction-details.css';

const AuctionDetails = () => {
    const { id } = useParams();

    const items = [
        { id: 1, type: 'koi', name: "ca koi 1", breeder:'Anos' , size: 'small', Length:'44',age:'2' ,color: 'blue', price: 150, image: '../img/h1.jpg' },
        { id: 2, type: 'koi', name: "ca koi 2",breeder:'Anos' , size: 'medium', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h2.jpg' },
        { id: 3, type: 'koi', name: "ca koi 3",breeder:'Anos' , size: 'medium', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h2.jpg' },
        { id: 4, type: 'butterfly', name: "ca koi 4",breeder:'Anos' , size: 'small', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h4.jpg' },
        { id: 5, type: 'koi', name: "ca koi 5",breeder:'Anos' , size: 'large', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h5.jpg' },
        { id: 6, type: 'koi', name: "ca koi 6",breeder:'Anos' , size: 'small', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h6.jpg' },
        { id: 7, type: 'butterfly', name: "ca koi 7",breeder:'Anos' , size:'small', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h1.jpg' },
        { id: 8, type: 'koi', name: "ca koi 8",breeder:'Anos' , size: 'large', Length:'44',age:'2', color: 'red', price: 150, image: '../img/h1.jpg' },
    ];

    const auctionItem = items.find(item => item.id === parseInt(id));

    if (!auctionItem) {
        return (
            <div className="container text-center">
                <h1>Item not found</h1>
            </div>
        );
    }

    return (
        <div id="main">
            <Header />
            <div id="content">
                <div className="container-auction-details text-center">
                    <div className="auction-details-wrapper row">
                        <div className="col-md-5 auction-item-image">
                            <img src={auctionItem.image} alt={auctionItem.name} className="img-fluid" />
                        </div>
                        <div className="col-md-7 auction-item-info">
                            <div className="container text-left">
                                <section className="koi-info">
                                        <div className="card-header">
                                            <h2 className="auction-item-title">{auctionItem.name}</h2>
                                        </div>
                                        <div className="row-cols-2 row-custom d-flex flex-wrap g-3">
                                            <div className="col-md-6 card-info">
                                                <span>
                                                    <i className="fa-solid fa-venus-mars"></i>
                                                    Sex
                                                </span>
                                                <p>Unknown</p>
                                            </div>
                                            <div className="col-md-6 card-info">
                                                <span>
                                                    <i className="fa-solid fa-ruler"></i>
                                                    Length
                                                </span>
                                                <p>{auctionItem.Length}cm</p>
                                            </div>
                                            <div className="col-md-6 card-info">
                                                <span>
                                                    <i className="fa-solid fa-earth-americas"></i>
                                                    Breeder
                                                </span>
                                                <p>{auctionItem.breeder}</p>
                                            </div>
                                            <div className="col-md-6 card-info">
                                                <span>
                                                    <i className="fa-solid fa-cake-candles"></i>
                                                    Age
                                                </span>
                                                <p>{auctionItem.age}y</p>
                                            </div>
                                        </div>
                                </section>
                                <section className="koi-info">
                                    <div className="row-cols-2 row-custom d-flex flex-wrap">
                                        <div className="col card-info">
                                            <span>Starting Price</span>
                                            <p>{auctionItem.price}$</p>
                                        </div>
                                        <div className="col card-info">
                                            <span>Current Highest Price</span>
                                            <p>3000$</p>
                                        </div>
                                        <div className="col card-info">
                                            <span>Start Date:</span>
                                            <p>hiện chưa có</p>
                                        </div>
                                        <div className="col card-info">
                                            <span>End Date</span>
                                            <p>hiện chưa có</p>
                                        </div>
                                    </div>
                                </section>
                                <section className="koi-info">
                                    <div className="time-remaining">
                                        <span>Time Remaining</span>
                                        <p>Hiện chưa có</p>
                                    </div>
                                    <div className="Input-price-frame">
                                        <input className="Input-price" type="Number" placeholder={"Mời nhập giá"}/>
                                        <a href="#" className="btn btn-primary btn-bid">Place Bid</a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default AuctionDetails;
