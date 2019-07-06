import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Home extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="home-title">Home</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;