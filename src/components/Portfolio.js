/**
 * @file Portfolio
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <h2>{this.props.params.name}</h2>
            </div>
        );
    }
}

export default Portfolio;