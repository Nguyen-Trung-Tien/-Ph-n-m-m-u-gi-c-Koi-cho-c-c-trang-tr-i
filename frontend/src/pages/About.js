import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/about.css';

const About = () => {
    return (
        <div id="main">
            <Header />
            <div id="content">
                <div className="about-section">
                    <h1>About Us</h1>
                    <p>Welcome to AuctionKoi, your number one source for all things related to koi fish. We're dedicated to giving you the very best of koi auctions, with a focus on reliability, customer service, and uniqueness.</p>
                    
                    <h2>Our Story</h2>
                    <p>Founded in 2024, AuctionKoi has come a long way from its beginnings. When we first started out, our passion for providing the best auction platform for koi fish drove us to do intense research and gave us the impetus to turn hard work and inspiration into a booming online auction platform. We now serve customers all over the world and are thrilled to be a part of the eco-friendly wing of the auction industry.</p>
                    
                    <h2>Meet Our Team</h2>
                    <p>Our team is made up of passionate individuals who love koi fish and are committed to bringing you the best auction experience. From our auction specialists to our customer service team, each member is dedicated to ensuring your satisfaction.</p>
                    
                    <h2>Contact Us</h2>
                    <p>If you have any questions or comments, please don't hesitate to contact us. Our support team is always ready to assist you.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
