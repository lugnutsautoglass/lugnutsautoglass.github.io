import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Products extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                        <div className="products-title">Products</div>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Products;