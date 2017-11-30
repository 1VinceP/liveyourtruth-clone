import React, { Component } from 'react';
import bag from '../../assets/bag.png';
import HeadDrop from '../headerDrop/HeaderDrop';
import './header.css';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            theme: '',
            second: '',
            third: '',
            bgPos: '',
            tType: '',
            display: '',
            hover: ''
        }

        this.isHover = this.isHover.bind(this);
        this.isNotHover = this.isNotHover.bind(this);
    }

    componentDidMount() {
        this.setState({
            theme: 'black',
            display: false,
            hover: false
        })
    }

    handleEnter( theme, second, third, bgPos, tType ) {
        this.setState({
            theme,
            second,
            third,
            bgPos,
            tType,
            display: true,
            hover: true
        })
    }

    handleLeave(display) {
        this.setState({
            hover: false
        })
    }

    isHover() {
        this.setState({
            hover: true
        })
    }

    isNotHover() {
        this.setState({
            hover: false
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
                            <div className='h-h-r-b-div h-one' onMouseEnter={() => this.handleEnter('#FF416D', '#FFD4DE', '#FF587F', 'left top', 'Cute')} onMouseLeave={() => this.handleLeave()}>TYPE ONE</div>
                            <div className='h-h-r-b-div h-two' onMouseEnter={() => this.handleEnter('#DF8FA9', '#F6E7EA', '#DA8291', 'left -100px', 'Soft')} onMouseLeave={() => this.handleLeave()}>TYPE TWO</div>
                            <div className='h-h-r-b-div h-three' onMouseEnter={() => this.handleEnter('#D23D55', '#FFD9DF', '#D33D55', 'left -200px', 'Hot')} onMouseLeave={() => this.handleLeave()}>TYPE THREE</div>
                            <div className='h-h-r-b-div h-four' onMouseEnter={() => this.handleEnter('#DCDCDC', '#E6E6E6', '#000000', 'left -300px', 'Exact')} onMouseLeave={() => this.handleLeave()}>TYPE FOUR</div>
                            <input placeholder='Search' />
                        </section>
                    </section>
                    { this.state.hover
                        ? <HeadDrop theme={this.state.theme}
                                    second={this.state.second}
                                    third={this.state.third}
                                    bgPos={this.state.bgPos}
                                    tType={this.state.tType}
                                    hover={this.isHover}
                                    notHover={this.isNotHover} />
                        : null
                    }
                    
                </header>
            </div>
        )
    }
}

export default Header;