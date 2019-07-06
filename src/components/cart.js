import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Cart extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                        <div className="cart-title">Cart</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Cart;