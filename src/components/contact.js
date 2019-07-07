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
                </Grid>
            </div>
        )
    }
}

export default Contact;