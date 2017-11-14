import React from 'react';
import bag from '../../assets/bag.png';
import './header.css';

export default function Header() {
    return(
        <div className='header-body'>
            <header className='home-header'>
                    <section className='home-header-left'>
                        <img src='https://i0.wp.com/shop.liveyourtruth.com/media/wysiwyg/shoppermod/logo-default.png' alt='logo' className='home-logo'/>
                    </section>
                    <section className='home-header-right'>
                        <section className='h-h-r-top'>
                            <div className='h-h-link'>Sign In</div>
                            <div className='h-h-link'>Customer Care</div>
                            <div className='h-h-r-t-cart'>
                                <div className='h-h-cart-link'>
                                    <img src={bag} className='home-cart-img' alt=''/>
                                    {0} Items
                                </div>
                                <div className='home-cart-drop' id='h-c-d'>
                                    <div className='home-cart-drop-head'>TOTAL: $0.00</div>
                                    <div className='home-cart-drop-body'>
                                        <button className='home-view-bag-button'>View Bag</button>
                                    </div>
                                </div>
                            </div>
                            
                            <button className='home-checkout-button'>Checkout</button>
                        </section>
                        <section className='h-h-r-bottom'>
                            <div>TYPE ONE</div>
                            <div>TYPE TWO</div>
                            <div>TYPE THREE</div>
                            <div>TYPE FOUR</div>
                            <input placeholder='Search' />
                        </section>
                    </section>
                </header>
        </div>
    )
}