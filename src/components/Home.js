/**
 * @file Home
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigator from './Navigator';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Navigator></Navigator>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;