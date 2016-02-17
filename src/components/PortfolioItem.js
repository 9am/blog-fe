/**
 * @file PortfolioItem
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';
import { Link } from 'react-router';

class PortfolioItem extends React.Component {
    render() {
        return (
            <div>
                <h1>PortfolioItem</h1>
                <h2>
                    <Link to={'portfolio/' + this.props.data.title}>
                        {this.props.data.title}
                    </Link>
                </h2>
            </div>
        );
    }
}

export default PortfolioItem;