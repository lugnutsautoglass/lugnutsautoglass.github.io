import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Contact extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                        <div className="contact-title">Contact</div>
                    </Cell>
                    <Cell col={6}>
                        <div className="contact-content">
                            LOCATION:
                            LUGNUT’S AUTO GLASS
                            1234 WINDSHIELD WAY
                            COLUMBUS, OH 12345
                            TELEPHONE #:
                            123-456-7890
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div className="contact-content">Questions or Comments?</div>
                    </Cell>
                    <Cell col={4}>
                        <div className="about-contact">
                            <h4>Social Media</h4>
                            <a href="https://www.instagram.com/lugnutsautoglass/"><i class='fab fa-instagram'><h4>Instagram</h4></i></a>
                            <a href="https://twitter.com/LugnutsG"><i class='fab fa-twitter'><h4>Twitter</h4></i></a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;