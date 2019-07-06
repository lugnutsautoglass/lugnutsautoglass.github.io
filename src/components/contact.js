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
                </Grid>
            </div>
        )
    }
}

export default Contact;