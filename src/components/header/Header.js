import React, { Component } from 'react';
import bag from '../../assets/bag.png';
import HeadDrop from '../headerDrop/HeaderDrop';
import './header.css';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            theme: '',
            display: ''
        }
    }

    componentDidMount() {
        this.setState({
            theme: 'black',
            display: false
        })
    }

    handleEnter( theme ) {
        this.setState({
            theme,
            display: true
        })
    }

    handleLeave(display) {
        this.setState({
            display: false
        })
    }

    render() {
        return (
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
                            <div className='h-h-r-b-div h-one' onMouseEnter={() => this.handleEnter('#FF416D') } onMouseLeave={() => this.handleLeave() }>TYPE ONE</div>
                            <div className='h-h-r-b-div h-two' onMouseEnter={() => this.handleEnter('#DF8FA9') } onMouseLeave={() => this.handleLeave() }>TYPE TWO</div>
                            <div className='h-h-r-b-div h-three' onMouseEnter={() => this.handleEnter('#A92D3F') } onMouseLeave={() => this.handleLeave() }>TYPE THREE</div>
                            <div className='h-h-r-b-div h-four' onMouseEnter={() => this.handleEnter('#DCDCDC') } onMouseLeave={() => this.handleLeave() }>TYPE FOUR</div>
                            <input placeholder='Search' />
                        </section>
                    </section>
                    { this.state.display
                        ? <HeadDrop theme={this.state.theme} />
                        : null
                    }
                    
                </header>
            </div>
        )
    }
}

export default Header;