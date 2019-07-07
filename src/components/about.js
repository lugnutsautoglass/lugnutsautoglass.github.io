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
                    <Cell col={12}>
                        <div className="about-content">Lugnut’s Auto Glass is a family owned and operated glass business that has been around for over 50 years. Larry Lugnut started with a single location installing glass and they have moved into a company that not just installs glass, but they sell it as well. The company operates in the Ohio Valley region, with locations in the following states, Ohio, Indiana, Tennessee, Kentucky, and West Virginia. The company currently has over 500 employees with many of the employees being with the company for over 20 years. Lugnut’ has been recently taken over by Larry’s daughter, Patty Lugnut. Patty is continuing the tradition established by her father of keeping the customer first and understanding that a company’s reputation is made and broken by the customers’ loyalty to the brand.  She will be looking at integrating new technology as a way to build on the customer relationships of the company. Lugnut’s is looking forward to next 50 years of success.</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;