import React, { Component } from 'react';
import list from './list';
import './headerDrop.css';

class HeaderDrop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tType: '',
            outfitColor: ''
        }
    }

    componentWillMount() {
        if( this.props.theme === '#DCDCDC' ) {
            this.setState({
                outfitColor: '#000000'
            })
        }
        else {
            this.setState({
                outfitColor: '#FFFFFF'
            })
        }
    }

    componentDidMount() {
        document.getElementById('drop-main').style.borderTop = `3px solid ${this.props.theme}`
        document.getElementById('links').style.color = this.props.third
        document.getElementById('clothing-ts').innerHTML = `${this.props.tType}-T's`

        for( let i = 0; i < 5; i++ ) {
            document.getElementsByClassName('headrop-topic-title')[i].style.color = this.props.third
        }
        for( let i = 0; i < 3; i++ ) {
            document.getElementsByClassName('headrop-alerts-button')[i].style.border = `2px solid ${this.props.second}`
            document.getElementsByClassName('headrop-alerts-button')[i].style.color = this.props.third
        }
        document.getElementsByClassName('headrop-new-outfits')[0].style.color = this.state.outfitColor
        
    }

    componentWillReceiveProps(nextProps) {
        document.getElementById('drop-main').style.borderTop = `3px solid ${nextProps.theme}`;
        document.getElementById('links').style.color = nextProps.third
        document.getElementById('clothing-ts').innerHTML = `${nextProps.tType}-T's`
        
        for( let i = 0; i < 5; i++ ) {
            document.getElementsByClassName('headrop-topic-title')[i].style.color = nextProps.third
        }
        for( let i = 0; i < 3; i++ ) {
            document.getElementsByClassName('headrop-alerts-button')[i].style.border = `2px solid ${nextProps.second}`
            document.getElementsByClassName('headrop-alerts-button')[i].style.color = nextProps.third
        }
        document.getElementsByClassName('headrop-new-outfits')[0].style.color = this.state.outfitColor
        
    }
    
    render() {
        
        let mappedList = list.map( ( topic, i ) => {
            let mappedItems = topic.items.map( ( list, i ) => {
                return (
                    <div className='mapped-items' key={i}>{list}</div>
                )
            } )
            return (
                <div className='headrop-topic-container' key={i}>
                    <div className='headrop-topic-title'>{topic.title}</div>
                    { topic.title === 'CLOTHING'
                        ? <div className='headrop-topic-items' id='clothing-ts'></div>
                        : null
                    }
                    <div className='headrop-topic-items'>{mappedItems}</div>
                </div>
            )
        } )

        return (
            <div className='headrop-body' id='drop-main' onMouseEnter={() => this.props.hover()} onMouseLeave={() => this.props.notHover()} >
                <div className='headrop-content-box'>
                    <section className='headrop-alerts'>
                        <div className='headrop-alerts-button'>New Arrivals</div>
                        <div className='headrop-alerts-button'>Basic Essentials</div>
                        <div className='headrop-alerts-button'>Sale</div>
                        <div className='headrop-new-outfits' style={{backgroundPosition: this.props.bgPos}}>NEW OUTFITS</div>
                    </section>
                    <section className='headrop-list-container'>
                        {mappedList}
                    </section>
                    <section className='headrop-extra-links' id='links'>
                        <div>BOOKS</div>
                        <div>COURSES</div>
                        <div>GIFT CARDS</div>
                        <div>SALE</div>
                    </section>
                </div>
            </div>
        )
    }
}

export default HeaderDrop;