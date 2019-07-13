import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Grid, Cell} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import logo from './components/img/logo.jpg';



class App extends Component {
  render() {
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */
    <div>
      <Grid className="main-grid">
        <Cell col={4}>
          <Link to="/"><img src={logo} className="logo-img" alt="logo" /></Link>
        </Cell>
        <Cell col={4}><div className="main-title"><h3>Lugnuts Auto Glass</h3></div></Cell>
      </Grid>

        <Layout>
            <Header className="header-color" scroll>
                <Navigation>
                    <Link to="/"><h6>Home</h6></Link>
                    <Link to="/about"><h6>About</h6></Link>
                    <Link to="/products"><h6>Products</h6></Link>
                    <Link to="/contact"><h6>Contact</h6></Link>
                    <Link to="/cart"><h6>Cart</h6></Link>
                </Navigation>
            </Header>
            <Drawer title="Lugnut's Auto Glass">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/cart">Cart</Link>
              </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main></Main>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
