import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import productImage from './img/blade1.jpg';
import productImage1 from './img/windshield.jpg';


class Products extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                        <div className="products-title">Windsheilds</div>
                    </Cell>
                    <Cell col={4}>
                        <img src={productImage1} alt="productImage1"  className="product-img"/>
                        <div className="products-content">DW02418 GTY</div>
                        <div className="products-content">Domestic Windshield WINDSHIELD GREEN TINT SOLAR ACOUSTIC INTERLAYER 3RD VISOR FRIT AFTERMARKET</div>
                        <div className="products-content">$859.00</div>
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
                    <Cell col={12}>
                        <div className="products-title">Wipers</div>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                        <img src={productImage} alt="productImage"  className="product-img"/>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                        <img src={productImage} alt="productImage"  className="product-img"/>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                        <img src={productImage} alt="productImage"  className="product-img"/>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                        <img src={productImage} alt="productImage"  className="product-img"/>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                        <img src={productImage} alt="productImage"  className="product-img"/>
                    </Cell>
                    <Cell col={4}>
                        <div className="products-content">Product Name</div>
                        <img src={productImage} alt="productImage"  className="product-img"/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Products;
