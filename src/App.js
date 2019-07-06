import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Lugnut's Auto Glass" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/cart">Cart</Link>
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