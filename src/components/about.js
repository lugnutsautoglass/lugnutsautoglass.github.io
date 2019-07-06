import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class About extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                        <div className="about-title">About</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;