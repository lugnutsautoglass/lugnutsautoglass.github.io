import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import MessageForm from './MessageForm';



class Contact extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                        <div className="contact-title">Contact</div>
                    </Cell>
                    <Cell col={7}>
                        <div className="contact-content"><h4>LOCATION:</h4>
                            <h5>LUGNUT’S AUTO GLASS
                            1234 WINDSHIELD WAY
                            COLUMBUS, OH 12345</h5>
                            <h4>TELEPHONE #:</h4>
                            <h5>123-456-7890</h5>
                       </div>
                    </Cell>
                    <Cell col={3}>
                        <div className="contact-content">
                            <h4>Social Media</h4>
                            <a href="https://www.instagram.com/lugnutsautoglass/"><i class='fab fa-instagram'><h5>Instagram</h5></i></a>
                            <a href="https://twitter.com/LugnutsG"><i class='fab fa-twitter'><h5>Twitter</h5></i></a>
                        </div>
                    </Cell>
                    <Cell col={7}>
                        <div className="cart-title"><MessageForm/></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;