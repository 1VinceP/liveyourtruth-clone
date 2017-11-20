import React from 'react';
import like from '../../assets/like.svg';
import './footer.css';

export default function Footer() {

    return(
        <div className='footer-body'>
            <section className='footer-content'>
                <div className='footer-logo'>
                    <img src='https://i0.wp.com/shop.liveyourtruth.com/media/wysiwyg/shoppermod/logo-default.png' alt='logo' />
                    <div>&copy; 2017 DRESSING YOUR TRUTH</div>
                    <div>ALL RIGHTS RESERVED.</div>
                </div>
                <ul className='f-directory'>
                    <li className='footer-dir-header'>My Account</li>
                    <li>My Info</li>
                    <li>My Orders</li>
                    <li>My Rewards</li>
                    <li>My Heart Items</li>
                </ul>
                <ul className='f-directory'>
                    <li className='footer-dir-header'>Help</li>
                    <li>Customer Care</li>
                    <li>Shipping Information</li>
                    <li>Return Policy</li>
                    <li>FAQ</li>
                </ul>
                <ul className='f-directory'>
                    <li className='footer-dir-header'>And More...</li>
                    <li>Learn Your Type of Beauty</li>
                    <li>Meet Carol Tuttle</li>
                    <li>Size Guide</li>
                    <li>Terms & Privacy</li>
                    <li>Gift Cards</li>
                </ul>
                <ul className='footer-facebook'>
                    <li>Join Us on Facebook</li>
                    <div className='footer-like'>
                        <button className='footer-like-button'>
                            <img className='footer-like-thumb' src={like} alt='thumbs up' />
                            <div>Like</div>
                        </button>
                        <div className='footer-like-text'>183K people like this. <u className='footer-like-signup'>Sign Up</u> to see what your friends like.</div>
                    </div>
                </ul>
            </section>

            <section className='footer-disclaimer'>
                <div>DRESSING YOUR TRUTH, AND ENERGY PROFILING ARE REGISTERED TRADEMARKS OF CAROL TUTTLE ENTERPRISES, LLC.</div>
                <div>TYPE 1, TYPE 2, TYPE 3, TYPE 4, DYT, ENERGY PROFILE, CHILD WHISPERER ARE TRADEMARKS OWNED BY CAROL TUTTLE ENTERPRISES, LLC.</div>
                <div>LIVE YOUR TRUTH LLC 4161 N. THANKSGIVING WAY SUITE #102 LEHI, UT 84043.</div>
            </section>
        </div>
    )
}