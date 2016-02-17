/**
 * @file PortfolioItem
 * @author 9am(gbgogb@gmail.com)
 */

import React from 'react';
import { Link } from 'react-router';

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tags = this.props.data.tag.map(function (tag) {
            return (
                <span key={tag}>{tag}</span>
            );
        });
        let redirectUrl = 'portfolio/' + this.props.data.key;
        let dateStr = new Date(this.props.data.timestamp).toString().substr(4, 11);
        return (
            <div className='portfolio-item'>
                <Link className='sketch' to={redirectUrl}>
                    <svg>
                        <path className="path" d={this.props.data.path} fill="none"/>
                    </svg>
                </Link>
                <h2 className='title'>
                    <Link to={redirectUrl}>{this.props.data.title}</Link>
                    <span className='date'>{dateStr}</span>
                </h2>
                <div className='tag'>
                    {tags}
                </div>
                <p className='desc'>{this.props.data.desc}</p>
            </div>
        );
    }
}

export default PortfolioItem;