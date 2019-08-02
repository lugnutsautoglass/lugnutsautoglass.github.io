import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import UserForm from './UserForm';


class Cart extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={7}>
                        <div className="cart-title"><UserForm/></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Cart;