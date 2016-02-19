/**
 * @file Home
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomIn: this.props.location.pathname.match(/portfolio\//)
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                zoomIn: newProps.location.pathname.match(/portfolio\//)
            });
        }
    }

    render() {
        return (
            <div>
                <Header zoomIn={this.state.zoomIn}></Header>
                {this.props.children}
                <Footer zoomIn={this.state.zoomIn}></Footer>
            </div>
        );
    }
}

export default Home;