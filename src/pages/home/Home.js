import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import bundles from '../../assets/home-courses-bundles.jpg';
import books from '../../assets/home-books-by-carol.jpg';
import giftCards from '../../assets/home-gift-cards.jpg';
import arrow from '../../assets/arrow_totop.png';
import './home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            guaranteeOpen: 'false'
        }
    }

    componentWillMount() {
        this.setState({
            width: window.innerWidth,
            scrollBar: this.getScrollBarWidth()
        })
    }

    componentDidMount() {
        this.checkScroll()
    }

    getScrollBarWidth() {
        let inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";
      
        let outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild (inner);
      
        document.body.appendChild(outer);
        let w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let w2 = inner.offsetWidth;
        if (w1 === w2) w2 = outer.clientWidth;
      
        document.body.removeChild(outer);
      
        return (w1 - w2);
    }

    checkScroll() {
        window.addEventListener( 'scroll', e => {
            if( window.pageYOffset > 200 )
                document.getElementById('scroll-arrow').style.display = 'block';
            else
                document.getElementById('scroll-arrow').style.display = 'none';
        } )
    }

    onArrow() {
        window.scrollTo( 0, 0 )
    }

    onGuaranteeClick() {
        if( this.state.guaranteeOpen === 'false' ) {
            this.setState({
                guaranteeOpen: 'true'
            })
        }
        console.log( this.state.guaranteeOpen )
        
    }

    onCloseGuarantee() {
        this.setState({
            guaranteeOpen: 'false'
        })
    }

    render() {
        return(
            <div className='home-body'>
                <Header />

                <div className='home-main'>
                    <h3 className='home-title'>Shop Your Type</h3>
                    <section className='home-type-row'>
                        <div className='home-type-box' id='home-type-one'>
                            <div />
                            <button>Shop Now</button>
                        </div>
                        <div className='home-type-box' id='home-type-two'>
                            <div/>
                            <button>Shop Now</button>
                        </div>
                        <div className='home-type-box' id='home-type-three'>
                            <div />
                            <button>Shop Now</button>
                        </div>
                        <div className='home-type-box' id='home-type-four'>
                            <div />
                            <button>Shop Now</button>
                        </div>
                    </section>

                    <section className='home-shop-now-row'>
                        <div className='home-courses-bundles'>
                            <img src={bundles} alt='' />
                        </div>
                        <div className='home-books-by-carol'>
                            <img src={books} alt='' />
                        </div>
                        <div className='home-gift-cards'>
                            <img src={giftCards} alt='' />
                        </div>
                    </section>

                    <section className='home-love-guarantee' style={{width: this.state.width - this.state.scrollBar + 'px'}}>
                        <hr/>
                        <div className='home-love-overlay' onClick={() => this.onGuaranteeClick()} >
                            
                        </div>
                        <div className='home-love-guarantee-img' />
                    </section>
                    <section className='home-love-drop' drop-open={this.state.guaranteeOpen} style={{width: this.state.width - this.state.scrollBar + 'px'}}>
                    
                    </section>
                </div>

                <div className='home-arrow-to-top' id='scroll-arrow' onClick={() => this.onArrow()}>
                    <img src={arrow} alt='' />
                </div>

                <Footer />

            </div>
        )
    }
}

export default Home;