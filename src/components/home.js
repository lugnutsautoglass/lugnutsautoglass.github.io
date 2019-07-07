import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import productImage from './img/blade1.jpg';


class Home extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="home-content"><h4>Lugnut's Auto Glass is your one stop shop for all auto glass needs. From just buying the glass, to having the work completed by our certified technicians, we have it all!</h4></div>
                    </Cell>
                    <Cell col={4}>
                        <div className="home-content"><h4>Featured Product</h4>
                        <img src={productImage} alt="productImage"  className="product-img"/></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;