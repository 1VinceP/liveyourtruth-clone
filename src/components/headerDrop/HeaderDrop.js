import React, { Component } from 'react';
import list from './list';
import './headerDrop.css';

class HeaderDrop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tType: '',
            secondary: '',
            tertiary: ''
        }
    }

    componentDidMount() {
        document.getElementById('drop-main').style.borderTop = `3px solid ${this.props.theme}`;
        document.getElementById('links').style.color = this.props.third

        for( let i = 0; i < 5; i++ ) {
            document.getElementsByClassName('headrop-topic-title')[i].style.color = this.props.third
        }
        for( let i = 0; i < 3; i++ ) {
            document.getElementsByClassName('headrop-alerts-button')[i].style.border = `2px solid ${this.props.second}`
            document.getElementsByClassName('headrop-alerts-button')[i].style.color = this.props.third
        }
    }

    componentWillReceiveProps(nextProps) {
        document.getElementById('drop-main').style.borderTop = `3px solid ${nextProps.theme}`;
        document.getElementById('links').style.color = nextProps.third
        
        for( let i = 0; i < 5; i++ ) {
            document.getElementsByClassName('headrop-topic-title')[i].style.color = nextProps.third
        }
        for( let i = 0; i < 3; i++ ) {
            document.getElementsByClassName('headrop-alerts-button')[i].style.border = `2px solid ${nextProps.second}`
            document.getElementsByClassName('headrop-alerts-button')[i].style.color = nextProps.third
        }
        
    }
    
    render() {
        
        let mappedList = list.map( ( topic, i ) => {
            return (
                <div className='headrop-topic-container' key={i}>
                    <div className='headrop-topic-title'>{topic.title}</div>
                    {topic.items.map( ( items, i ) => {
                        return ( <div key={i}>{items.items}</div> )
                    } )}
                </div>
            )
        } )

        return (
            <div className='headrop-body' id='drop-main' onMouseEnter={() => this.props.hover()} >
                <div className='headrop-content-box'>
                    <section className='headrop-alerts' >
                        <div className='headrop-alerts-button' id='eins'>New Arrivals</div>
                        <div className='headrop-alerts-button'>Basic Essentials</div>
                        <div className='headrop-alerts-button'>Sale</div>
                        <div className='headrop-new-outfits'>New Outfits</div>
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