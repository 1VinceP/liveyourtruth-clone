import React, { Component } from 'react';
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

    componentWillReceiveProps(nextProps) {
        document.getElementById('drop-main').style.borderTop = `3px solid ${this.props.theme}`;
        if( this.props.theme === '#FF416D' ) {
            this.setState({
                tType: 'Cute',
                secondary: '#FF587F',
                tertiary: '#FFD4DE'
            })
        }
        else if( this.props.theme === '#DF8FA9' ) {
            this.setState({
                tType: 'Soft'
            })
        }
        else if( this.props.theme === '#A92D3F' ) {
            this.setState({
                tType: 'Hot'
            })
        }
        else if( this.props.theme === '#DCDCDC' ) {
            this.setState({
                tType: 'Exact'
            })
        }
        document.getElementById('eins').style.color = this.state.secondary;
        document.getElementById('eins').style.border = `6px solid ${this.state.tertiary}`;
        
        // document.getElementsByClassName('headrop-alerts-button').style.color = this.state.secondary;
        // document.getElementsByClassName('headrop-alerts-button').style.border = `6px solid ${this.state.tertiary}`;
    }
    
    render() {
        console.log( this.props.theme )
        console.log( this.state.secondary, this.state.tertiary )
        return (
            <div className='headrop-body' id='drop-main'>
                <div className='headrop-content-box'>
                    <section className='headrop-alerts' >
                        <div className='headrop-alerts-button' id='eins'>New Arrivals</div>
                        <div className='headrop-alerts-button'>Basic Essentials</div>
                        <div className='headrop-alerts-button'>Sale</div>
                        <div className='headrop-new-outfits'>New Outfits</div>
                    </section>
                </div>
            </div>
        )
    }
}

export default HeaderDrop;